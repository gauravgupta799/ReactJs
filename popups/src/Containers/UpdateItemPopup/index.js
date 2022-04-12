import React from 'react'
import {Card} from "../../Components/Style"
import { Loading3QuartersOutlined } from '@ant-design/icons';
import "./style.css";

const UpdateItemPopup = (props) => {
    // console.log(props);
    return (
        <>
         <Card>
            {props.Data.map((item, i) =>{
                {/* console.log(item); */}
                const {heading,text,loader} = item;
                return (
                    <>
                      <div className="container">
                         <Loading3QuartersOutlined id="loader" />
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

export default UpdateItemPopup ;
