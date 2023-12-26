import React from "react";
import user from "../images/user.png";
import { useNavigate } from "react-router-dom";

const ContactCard = (props) => {
    const navigate =  useNavigate();


    const {id,name,email} = props.contact;
    return (
        <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" style=  {{float : 'right',color:"red", marginTop:"7px" , marginLeft :"10px" }}
        onClick={()=> props.clickHandler(id)}
        ></i>
        <i className="edit alternate outline icon"  style=  {{float : 'right',color:"blue", marginTop:"7px"}}
        onClick={()=>{navigate("/edit")}}
        ></i>
        
    </div>
    );
};

export default ContactCard;