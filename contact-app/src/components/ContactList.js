import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    console.log(props);
// render matlab dikhana(show kar na)
    const deleteContactHandler = (id) =>{
        props.getcontactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact ={contact} clickHandler={deleteContactHandler}></ContactCard>;
    });

    return (
        <div className="ui celled list">
            <h3>Contanct List</h3>
            {renderContactList}
        </div>
    );
}


export default ContactList;
