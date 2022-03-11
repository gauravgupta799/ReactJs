import React from "react";
import "./UserType.css";
import daamLogo from "../images/daam.png";
import {
	Card,
	Form,
	Grid,
	Container,
	Image,
	Header,
	Button,
} from "semantic-ui-react";

const UserType = () => {
	return (
		<>
			<Container className='container'>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column>
							<Grid.Row style={{ textAlign: "center" }}>
								<Grid.Column>
									<Image
										src={daamLogo}
										style={{
											width: "195px",
											margin: "auto",
											marginTop: "60px",
											height: "23px",
										}}
									/>
								</Grid.Column>
								<Grid.Column>
									<Header
										size='large'
										style={{ marginTop: "20px", color: "#342F2F" }}
									>
										Tell What You Are
									</Header>
								</Grid.Column>
								<Grid.Column className='para-box'>
									<p className='para-text'>
										What type of user are you? Agents will <br />
										need to be approved, Creators, etc.
									</p>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row className='form-box'>
								<Grid.Column>
									<Form
										style={{
											width: "50%",
											margin: "auto",
											marginTop: "-50px",
										}}
									>
										<Grid centered columns={2}>
											<Grid.Column
												style={{ position: "relative" }}
												className='card'
											>
												<Card
													className='role'
													style={{
														height: "110px",
														borderRadius: "0px",
														zIndex: "1",
														marginBottom: "-32px",
														border: "1px solid #B9B5B5",
													}}
												>
													<Grid.Row className='card-box'>
														<Grid.Column className='img-box'>
															<Image
																src='https://i.ibb.co/ck0xMYM/home.png'
																className='card-img'
																alt='...'
															/>
														</Grid.Column>
														<Grid.Column>
															<h3>Agent</h3>
														</Grid.Column>
													</Grid.Row>
												</Card>
											</Grid.Column>

											<Grid.Row centered columns={2}>
												<Grid.Column className='card'>
													<Card
														className='role'
														style={{
															height: "110px",
															marginLeft: "10px",
															borderRadius: "0px",
															border: "1px solid #B9B5B5",
														}}
													>
														<Grid.Row className='card-box'>
															<Grid.Column >
																<Image
																	src='https://i.ibb.co/ysZ9Tw8/Pen-Pencile.png'
																	className='card-img'
																	alt='...'
																/>
															</Grid.Column>
															<Grid.Column>
																<h3>Creator</h3>
															</Grid.Column>
														</Grid.Row>
													</Card>
												</Grid.Column>
												<Grid.Column className='card'>
													<Card
														className='role'
														style={{
															height: "110px",
															marginLeft: "-18px",
															borderRadius: "0px",
															border: "1px solid #B9B5B5",
														}}
													>
														<Grid.Row className='card-box'>
															<Grid.Column >
																<Image
																	src='https://i.ibb.co/zrMdRF0/collector-1.png'
																	className='card-img'
																	alt='...'
																	

																/>
															</Grid.Column>
															<Grid.Column>
																<h3>Collector</h3>
															</Grid.Column>
														</Grid.Row>
													</Card>
												</Grid.Column>
											</Grid.Row>
										</Grid>
									</Form>
								</Grid.Column>
								<Grid.Column id='btn-box' style={{ height: "80px" }}>
									<Button id='btn'>Create Account</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid.Column>

						<Grid.Column>
							<Image
								src='https://i.ibb.co/481XhQ5/daamImg.png'
								alt='daamimg'
								style={{ marginTop: "10px" }}
								id='daamimg'
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</>
	);
};

export default UserType;
