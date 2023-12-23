import React,{ useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from './ContactCard';
import { v4 } from 'uuid';



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
        setContacts([...contacts,{id : v4(), ...contact}]);


        // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify([...contacts,contact]));
    };

    // const deleteHandler = (id) => {
    //     let c = [...contacts]
    //     console.log(c)
    // }


    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
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
        // console.log("The ID is =", v4() )
    },[contacts]);

    return (
        <div className='ui container'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
                    />
                    <Route
                        path="/add"
                        element={<AddContact addContactHandler={addContactHandler} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;