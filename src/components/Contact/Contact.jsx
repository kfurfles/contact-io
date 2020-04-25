import React from 'react';
import './style.scss'
import { BrazilianFormatDate } from '../../modules/time';



const Contact = ({ user }) => {
  const { 
    name, 
    avatar, 
    company, 
    department, 
    admissionDate, 
    phone, 
    country 
  } = user

  return (<article className="contact">
    <span className="contact__avatar">
      <img src={avatar} alt={`avatar ${name}`} />
    </span>
    <span className="contact__data">{name}</span>
    <span className="contact__data">{phone}</span>
    <span className="contact__data">{country}</span>
    <span className="contact__data">{BrazilianFormatDate(admissionDate)}</span>
    <span className="contact__data">{company}</span>
    <span className="contact__data">{department}</span>
  </article>)
}


Contact.defaultProps = {
  user: {
    "name": "Daniela Terry",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
    "company": "Rohan - Pagac",
    "department": "Clothing",
    "admissionDate": "2019-04-08T19:28:41.878Z",
    "phone": "1-931-065-2122 x879",
    "country": "Iceland"
  }
}
export default Contact;
