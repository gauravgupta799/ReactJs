import React, { useState } from "react";
import {Button}  from "../Style"
import { Modal, Card, Row, Col, Avatar, Typography } from "antd";

const { Title, Text } = Typography;

const ConfrmModal = (props) => {
	// console.log(props.Data);

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div >
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title={props.Data[0].title}
				visible={isModalVisible}
				onBuy={handleOk}
				onCancel={handleCancel}
			>
				<Card style={{ marginTop: 16, marginBottom: 20 }}>
					<Row gutter={[16, 16]}>
						<Col>
							<Avatar shape='square' size={74} />
						</Col>
						<Col>
							<Title level={4}>Name of Piece</Title>
							<Text>Creator - Agency</Text>
						</Col>
					</Row>
				</Card>
				{props.Data.map((item, i) => {
					const { piecetitle, price, creatorRoyality, DaamFee } = item;
					return (
						<>
							<Row
								style={{
									display: "flex",
									flexDirection: "Column",
								}}
							>
								<Col>
									<Row gutter={[340, 340]}>
										<Col>
											{" "}
											<Text>{piecetitle}</Text>{" "}
										</Col>
										<Col>
											{" "}
											<Text>{price}</Text>{" "}
										</Col>
									</Row>
								</Col>
								<Col>
									<Row gutter={[300, 300]}>
										<Col>
											{" "}
											<Text>{creatorRoyality}</Text>{" "}
										</Col>
										<Col>
											{" "}
											<Text>{price}</Text>{" "}
										</Col>
									</Row>
								</Col>
								<Col>
									<Row gutter={[340, 340]}>
										<Col>
											{" "}
											<Text>{DaamFee}</Text>{" "}
										</Col>
										<Col>
											{" "}
											<Text>{price}</Text>{" "}
										</Col>
									</Row>
								</Col>
							</Row>
						</>
					);
				})}
				<hr />
				<Title level ={5}>Total</Title>
			
			</Modal>
		</div>
	);
};

export default ConfrmModal;
