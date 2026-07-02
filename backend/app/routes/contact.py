from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.contact import ContactMessage
from ..schemas.contact import ContactCreate

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=dict)
async def submit_contact_form(contact: ContactCreate, db: Session = Depends(get_db)):
    """Submit contact form — validates input and stores message in the database."""
    try:
        db_message = ContactMessage(
            fullname=contact.fullname,
            email=contact.email,
            subject=contact.subject,
            message=contact.message
        )
        
        db.add(db_message)
        db.commit()
        db.refresh(db_message)
        
        return {
            "status": "success",
            "message": "Thank you! Your message has been received. I'll get back to you soon."
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Failed to save your message. Please try again later."
        )
