import React, {useState} from 'react';
import {addUser} from "../Service/api";
import {useHistory} from "react-router-dom";

     const initialValue = {
         name: "",
         username: "",
         email: "",
         phone: "",
     }

     const AddUser =()=>{
         const [user, setUser]= useState(initialValue);
         const {name,username, email, phone} = user;
         const history = useHistory();
     

     const onValueChange = (e) => {
       setUser({...user, [e.target.name]: e.target.value});
     }

     const addUserDetails = async() => {
       await addUser(user);
       history.push('./all');

     }

  return (
    <div className="container mt-5 bg-secondary">
        <form>
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" onChange={(e)=>onValueChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control"   name="username" onChange={(e)=>onValueChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="text" className="form-control"   name="email" onChange={(e)=>onValueChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input type="number" className="form-control"  name="phone" onChange={(e)=>onValueChange(e)} />
        </div>  
        <button type="submit" className="btn btn-primary" onClick = {()=> addUserDetails()}>Add User</button>
      </form>
    </div>

  )
}

export default AddUser;
