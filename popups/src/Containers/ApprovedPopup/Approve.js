import React from 'react'
import {Card} from "../../Components/Style"
import { CheckOutlined } from '@ant-design/icons';
import "./style.css"

const Approve = (props) =>{
    // console.log(props.Data)
  return (
    <>
     <Card>
        {props.Data.map((item) =>{
            const {heading, text} = item
            return (
                <>
                    <div className ="approve-box">
                        <CheckOutlined id ="checkIcon" />
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </div>
                </>
            )
        })}

     </Card>
    </>
  )
}

export default Approve;