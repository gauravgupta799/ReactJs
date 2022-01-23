import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';
import {Link} from "react-router-dom";

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
      await editUser(id, user);
      history.push('./all');
  }

    return (
        <div className="container mt-5 bg-secondary fs-5">
            <form>
                <h1>Edit User</h1><hr className="w-50% "/>
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label ">Name:</label>
              <input type="text" className="form-control" name="name" value={name} onChange={(e)=>onValueChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control"   name="username" value={username} onChange={(e)=>onValueChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="text" className="form-control"   name="email" value={email} onChange={(e)=>onValueChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone:</label>
              <input type="number" className="form-control"  name="phone" value={phone} onChange={(e)=>onValueChange(e)} />
            </div>
            <Link to ="/add">
               <button type="submit" className="btn btn-info mb-3"  onClick = {()=> editUserDetails()}>Edit User</button>
            </Link>
            
          </form>
        </div>
    
      )
}

export default EditUser;