import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };


//   navigate =  useNavigate();



  // add = (e) => {
  //   e.preventDefault();
  //   if (this.state.name === "" || this.state.email === "") {
  //     alert("fill all the fields");
  //     return;
  //   }
  //   this.props.addContactHandler(this.state);
  //   this.setState({ name: "", email: "" });
  //   // this.props.history.push("/");
  // };

//   render() {
//     return (
      // <div className="ui main">
      //   <h2>Add Contact</h2>

      //   <form className="ui form" onSubmit={this.add}>
      //     <div className="field">
      //       <label>Name</label>
      //       <input
      //         type="text"
      //         name="name"
      //         placeholder="Name"
      //         value={this.state.name}
      //         onChange={(e) => this.setState({ name: e.target.value })}
      //       />
      //     </div>
      //     <div className="field">
      //       <label>Email</label>
      //       <input
      //         type="text"
      //         name="email"
      //         placeholder="Email"
      //         value={this.state.email}
      //         onChange={(e) => this.setState({ email: e.target.value })}
      //       />
      //     </div>
      //     <button className="ui button blue" onClick={() => this.navigate("/")} >Add</button>
      //   </form>
      // </div>
//     );
//   }
// }

const AddContact = (props) => {

  
  const navigate =  useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const changeHandeler = (e) => {
    let newState = {...state};
    newState[e.target.name] = e.target.value;
    console.log(e.value.target);
    setState({...newState})
    console.log(state)
  }

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("fill all the fields");
      return;
    }
    props.addContactHandler(state);
    setState({ name: "", email: "" });
    alert("SuccessFully Added");
    // this.props.history.push("/");
  };

  return (
    <div className="ui main">
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={changeHandeler}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={changeHandeler}
            />
          </div>
          <button onClick={(e) => {add(e); navigate("/")}} className="ui button blue" >Add</button>
        </form>
      </div>
  )
}

export default AddContact;
