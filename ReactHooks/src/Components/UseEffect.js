import React,{useEffect,useState} from 'react';
import axios from 'axios';

const UseEffect = () => {

    const [data, setData] = useState("")

   const url ="http://dummy.restapiexample.com/api/v1/employees"
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
            // console.log(data)
        })   
    },[])

    return (
        <div className='container '>
        <h1>Hello UseEffect Hook</h1>
        
        <h3></h3>
            
        </div>
    )
}

export default UseEffect
