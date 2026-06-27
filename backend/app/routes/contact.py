from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.contact import ContactMessage
from ..schemas.contact import ContactCreate

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=dict)
async def submit_contact_form(contact: ContactCreate, db: Session = Depends(get_db)):
    """Submit contact form"""
    db_message = ContactMessage(
        fullname=contact.fullname,
        email=contact.email,
        subject=contact.subject,
        message=contact.message
    )
    
    db.add(db_message)
    db.commit()
    
    return {
        "status": "success",
        "message": "Thank you! Your message has been received."
    }
