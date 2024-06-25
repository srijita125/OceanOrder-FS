import React from "react";
import "./Whatsapp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import logo from "../../assets/Images/whatsapp-logo.webp";
const Whatsapp = () => {
  return (
    <div
      className="whatsapp
"
    >
      <FloatingWhatsApp
        className="z-0 custom-whatsapp"
        phoneNumber="+918420170040"
        accountName="OceanOrder"
        avatar={"logo"}
        chatMessage="Hi! Welcome to 'OceanOrder'. We will get back to you within 1–2 hours. In the meantime, check out the services that we offer."
      />
    </div>
  );
};

export default Whatsapp;
