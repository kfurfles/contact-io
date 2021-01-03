import React from 'react';
import { Contact } from './styled'
import { BrazilianFormatDate } from '../../modules/time';

const ContactComponent = ({ user }) => {
  const { 
    name, 
    avatar, 
    company, 
    department, 
    admissionDate, 
    phone, 
    country 
  } = user

  return (
  <Contact>
    <span className="avatar">
      <img src={avatar} alt={`avatar ${name}`} />
    </span>
    <span className="data">{name}</span>
    <span className="data">{phone}</span>
    <span className="data">{country}</span>
    <span className="data">{BrazilianFormatDate(admissionDate)}</span>
    <span className="data">{company}</span>
    <span className="data">{department}</span>
  </Contact>)
}


ContactComponent.defaultProps = {
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
export default ContactComponent;
