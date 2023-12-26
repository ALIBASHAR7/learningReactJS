import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import { v4 } from "uuid";
import api from '../api/contacts';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  // ()=>{
  // const prevData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // return prevData == null ? [] : prevData;
  // });


  const retrieveContacts = async () =>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact)
    // contact.id = contacts.length + 1;
    const request = { id: v4(), ...contact }

    
    const response = await api.post ("/contacts",request)
    console.log(response)
    setContacts([...contacts, response.data]);

    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify([...contacts,contact]));
  };


  const updateContactHandler = () => {

  }

  // const deleteHandler = (id) => {
  //     let c = [...contacts]
  //     console.log(c)
  // }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
        const allcontacts = await retrieveContacts();
        if(allcontacts) setContacts(allcontacts);
    };
    getAllContacts();

  }, []);

  useEffect(() => {
    // console.log("read from storage");
    //if (contacts.length > 0) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // console.log("The ID is =", v4() )
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            render= {(props)=>(
              <EditContact{...props} updateContactHandler={updateContactHandler} />
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
