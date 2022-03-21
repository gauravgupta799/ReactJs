import React from 'react'
import "./BFooter.css"
import { Row, Col } from "antd";

const BottomFooter = () => {
    return (
        <div className ="footer-container">
            <Row>
                <Col>
                    <p>© Copyright 2020 DAAM Corporation.</p>
                </Col>
                <Col>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </Col>
            </Row>
        </div>
    )
}

export default BottomFooter
