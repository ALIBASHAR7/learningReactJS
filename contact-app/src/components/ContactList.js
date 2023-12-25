import React from "react";
import {useNavigate} from "react-router-dom";
import ContactCard from "./ContactCard";
import Header from "./Header";
import AddContact from "./AddContact";


const ContactList = (props) => {

    const navigate =  useNavigate();



    console.log(props);
    // render matlab dikhana(show kar na)
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };


    const renderContactList = props.contacts.map((contact) => {
        return (
        <ContactCard
            contact={contact}
            clickHandler= {deleteContactHandler}
            key = {contact.id}
        />
        );    // <ContactCard contact ={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>;
    });

    return (
        <div class ="main">
            <h2>Contanct List
                <div> 
                    <button onClick={() => navigate("/add")} className="ui button blue right">Add Contact</button>
                </div>
            </h2>
           <div className="ui celled list"> {renderContactList}
        </div>
        </div>
    );
}


export default ContactList;
