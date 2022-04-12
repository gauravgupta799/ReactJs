import React from 'react'
import Modal from "../Components/Modal/ConfrmModal"
import {ConfirmData, UpdatingItem, Approved ,Decline } from "../Data"
import UpdateItemPopup from "../Containers/UpdateItemPopup/index"
import AprrovePopup from "../Containers/ApprovedPopup/Approve"
import DeclinePopup from "../Containers/DeclinePopoup/Decline"
import CongratsPopup from "../Containers/Congrates/Congrats"

const index = () => {
    return (
        <div style ={{display: "flex" ,flexDirection: "row"}}>
            <Modal Data={ConfirmData}/>
            <div style={{margin:"20px 10px"}}>
              <UpdateItemPopup Data ={UpdatingItem}/><br/><br/>
              <AprrovePopup Data ={Approved} /><br/><br/>
              <DeclinePopup Data ={Decline}/><br/><br/>
              <CongratsPopup message ={{msg:"Congratulations" ,text :"The item is now yours."}}/>
            </div>
              
        </div>
    )
}

export default index
