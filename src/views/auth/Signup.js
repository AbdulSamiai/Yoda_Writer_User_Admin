// import React from 'react';
// import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Import icons from react-icons
// import img from '../../assets/img/singup.jpg';
// const Signup = () => {
//     return (
//         <Container>
//             <Row>
//                 {/* First Column - Signin Form */}
//                 <Col lg={6} className='px-12'>
//                     <h2 className="text-center mb-4 text-4xl font-bold">Welcome back to <span className='text-blue-500'>Textory</span></h2>
//                     <p className='text-sm text-gray-500 text-center'>Sign in with Social Media</p>
//                     <div className="text-center mt-3 flex mx-auto py-6">

//                         <Button className="mr-2 bg-blue-500  flex hover:bg-black">
//                             <FaFacebook className="mr-2" />
//                             Facebook
//                         </Button>
//                         <Button className='flex bg-gray-50 text-black hover:bg-black hover:text-white'>
//                             <FaGoogle className="mr-2" />
//                             Google
//                         </Button>
//                     </div>
//                     <Form>
//                         <FormGroup>
//                             <Label for="email" className='text-sm font-semibold'>Email</Label>
//                             <Input type="email" name="email" id="email" placeholder="Enter your email" className='text-sm py-4' />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="password" className='text-sm font-semibold'>Password</Label>
//                             <Input type="password" name="password" id="password" placeholder="Enter your password" className='text-sm py-4' />
//                         </FormGroup>
//                         <FormGroup check className="mb-2 flex justify-between">
//                             <Label check>
//                                 <Input type="checkbox" /> Keep me signed in
//                             </Label>

//                             <a href="#" className="mb-3 d-block">Forgot password?</a>
//                         </FormGroup>

//                         <Button color="primary" className='w-auto px-8 font-bold rounded-3xl mx-auto' block>
//                             Sign In
//                         </Button>
//                         <div className='text-center text-sm py-2'>
//                             <p>Next to textory</p>
//                             <a href="#" className="mb-3 d-block">Sign Up</a>
//                         </div>


//                     </Form>
//                 </Col>

//                 {/* Second Column - Image */}
//                 <Col className='' lg={6}>
//                     <img
//                         src={img}
//                         alt="Welcome Image"
//                         className="img-fluid d-none d-lg-block h-auto"
//                     />
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Signup;



import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import img from '../../assets/img/singup.jpg';

const Signup = () => {
    return (
        <Container>
            <Row>
                {/* First Column - Signin Form */}
                <Col lg={6} className='px-12'>
                <div className='font-bold py-3'>
                  <TfiWorld />
                </div>
                    <h2 className="text-center mb-4 text-4xl font-bold">Welcome back to <span className='text-blue-500'>Textory</span></h2>
                    <p className='text-sm text-gray-500 text-center'>Sign in with Social Media</p>
                    <div className="text-center mt-3 flex justify-center mx-auto py-6">
                        <Button className="mr-2 bg-blue-500  flex hover:bg-black">
                            <FaFacebook className="mr-2" />
                            Facebook
                        </Button>
                        <Button className='flex bg-gray-50 text-black hover:bg-black hover:text-white'>
                            <FaGoogle className="mr-2" />
                            Google
                        </Button>
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="fullName" className='text-sm font-semibold'>Full Name</Label>
                            <Input type="text" name="fullName" id="fullName" placeholder="Enter your full name" className='text-sm py-4 border-0 bg-gray-100' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" className='text-sm font-semibold'>Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" className='text-sm py-4 border-0 bg-gray-100' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="country" className='text-sm font-semibold'>Country</Label>
                            <Input type="select" name="country" id="country" className='text-sm py-4 border-0 bg-gray-100'>
                                <option value="" disabled>Select your country</option>
                                <option value="USA">United States</option>
                                <option value="UK">United Kingdom</option>
                                {/* Add more countries as needed */}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" className='text-sm font-semibold'>Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter your password" className='text-sm py-4 border-0 bg-gray-100' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword" className='text-sm font-semibold'>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" className='text-sm py-4 border-0 bg-gray-100' />
                        </FormGroup>
                        <FormGroup check className="mb-2 flex justify-between">
                            <Label check>
                                <Input type="checkbox" /> Keep me signed in
                            </Label>
                            <a href="#" className="mb-3 d-block">Forgot password?</a>
                        </FormGroup>

                        <div className='text-center text-sm py-2 px-12'>
                        By continuing, I agree with your Terms and Conditions and Privacy Policies
                        </div>
                        <Button color="primary" className='w-auto px-8 font-bold rounded-3xl mx-auto' block>
                            Sign Up
                        </Button>
                       
                    </Form>
                </Col>

                {/* Second Column - Image */}
                <Col className='' lg={6}>
                    <img
                        src={img}
                        alt="Welcome Image"
                        className="img-fluid d-none d-lg-block h-auto"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
