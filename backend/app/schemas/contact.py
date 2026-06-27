from pydantic import BaseModel
from datetime import datetime

class ContactBase(BaseModel):
    fullname: str
    email: str
    subject: str
    message: str

class ContactCreate(ContactBase):
    pass

class ContactResponse(ContactBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
