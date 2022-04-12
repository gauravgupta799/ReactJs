import React from 'react'
import {Card} from "../../Components/Style"
import { CloseOutlined } from '@ant-design/icons';
import "./style.css"

const Decline = (props) => {
    // console.log(props)
  return (
    <>
     <Card>
        {props.Data.map((item) =>{
            const {heading, text} = item
            return (
                <>
                    <div className ="decline-box">
                        <CloseOutlined id= "decline" />
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

export default Decline