import React from 'react';
import {getUsers,deleteUser} from "../Service/api";
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users,setUser] = useState([])

    useEffect(() =>{
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async() =>{
        const response = await getUsers();
        console.log(response.data);
        setUser(response.data)
    }

  return(
    <div className="container mt-5">
        <table className="table">
          <thead className="table-dark">
              <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Username</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td></td>
              </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                        <Link to={`/edit/${user.id}`}><button type="button" className="btn btn-primary" >Edit</button></Link>
                        <button type="button" className="btn btn-danger ms-2" onClick={() => deleteUserData(user.id)}>Delete</button>
                    </td>
                </tr>
                ))}
          </tbody>
        
        </table>
    </div>

      ) 
};

export default AllUsers;


