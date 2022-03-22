import React from 'react';
import UpperFooter from "./UpperFooter/UpperFooter"
import MidFooter from "./MidFooter/MidFooter";
import BottomFooter from "./BottomFooter/BottomFooter"

const Footer = () => {
    return (
        <div style ={{marginTop:"60px"}}>
            <UpperFooter/>
            <MidFooter/>
            <BottomFooter/>
        </div>
    )
}

export default Footer;
