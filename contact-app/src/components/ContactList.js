import React from "react";
import {link} from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    console.log(props);
// render matlab dikhana(show kar na)
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    // const contacts =[
    //     {
    //         id : "1",
    //         name : "ABC",
    //         email : "MDGJ@gmail.com",
    //     },
    // ];

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
                <link to="/add"> 
                    <button className="ui button blue right">Add Contact</button>
                </link>
            </h2>
           <div className="ui celled list"> {renderContactList}
        </div>
        </div>
    );
}


export default ContactList;
