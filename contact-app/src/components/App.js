import React,{ useState,useEffect } from 'react';
import {uuid } from "uuidv4";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from './ContactCard';



function App(){

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts]= useState([]);
        // ()=>{
        // const prevData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        // return prevData == null ? [] : prevData;
    // });

    const addContactHandler = (contact) => {
        console.log(contact)
        // contact.id = contacts.length + 1;
        setContacts([...contacts,{id : uuid(), ...contacts}]);


        // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify([...contacts,contact]));
    };

    // const deleteHandler = (id) => {
    //     let c = [...contacts]
    //     console.log(c)
    // }


    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            contact.id !== id;
        });
        setContacts(newContactList);
    }
  
    
    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveContacts) setContacts(retriveContacts);
    },[]);
    
    
    useEffect(() => {
        console.log("read from storage");
        if (contacts.length > 0) localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]);

    return (
        <div className='ui container'>
    <Header/>
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList 
    // deleteHandler={deleteHandler}
    getContactId={removeContactHandler}
     contacts={ contacts } />
    </div>
    );
}

export default App;