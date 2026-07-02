from pydantic import BaseModel, EmailStr, field_validator
from datetime import datetime

class ContactBase(BaseModel):
    fullname: str
    email: str
    subject: str
    message: str

    @field_validator('fullname')
    @classmethod
    def validate_fullname(cls, v):
        v = v.strip()
        if len(v) < 2:
            raise ValueError('Name must be at least 2 characters long')
        if len(v) > 100:
            raise ValueError('Name must be less than 100 characters')
        return v

    @field_validator('email')
    @classmethod
    def validate_email(cls, v):
        v = v.strip().lower()
        if '@' not in v or '.' not in v.split('@')[-1]:
            raise ValueError('Please provide a valid email address')
        if len(v) > 100:
            raise ValueError('Email must be less than 100 characters')
        return v

    @field_validator('subject')
    @classmethod
    def validate_subject(cls, v):
        v = v.strip()
        if len(v) < 2:
            raise ValueError('Subject must be at least 2 characters long')
        if len(v) > 200:
            raise ValueError('Subject must be less than 200 characters')
        return v

    @field_validator('message')
    @classmethod
    def validate_message(cls, v):
        v = v.strip()
        if len(v) < 10:
            raise ValueError('Message must be at least 10 characters long')
        if len(v) > 5000:
            raise ValueError('Message must be less than 5000 characters')
        return v

class ContactCreate(ContactBase):
    pass

class ContactResponse(ContactBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
