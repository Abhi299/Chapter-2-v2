import React from "react";
import "./WhatsappButton.css";
import Whatsapp from "../../images/whatsapp_logo.png";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+85262019012"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Whatsapp} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;
