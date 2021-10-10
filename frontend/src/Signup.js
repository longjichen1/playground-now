
import React, { useEffect, useState } from 'react';

import {Form, Button, Navbar, Container} from 'react-bootstrap';
import background from "./assets/topo.jpg";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import Nav from './Nav';
import {Link} from 'react-router-dom';

const Signup = ({history}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
            history.push('/home')
        }
    },[])

    const onSignup=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(()=>{
                updateProfile(auth.currentUser, {displayName: name})
                    .then(() =>history.push('/'))
                    .catch((e) => alert(e.message))
            }).catch((e) => alert(e.message))
            .finally(() => setLoading(false))
    }
    return(
        
        <>
        <div style={{ height:"750px", fontSize:"24px"}}>

        
        <Nav/>
        <br/>
        <Form className="p-4">
            <Form.Group className="mb-3 bg-primary border rounded border-dark" controlId="formBasicPassword">
                <Form.Label className="">Name</Form.Label>
                <Form.Control type="name" className="border border-dark" placeholder="Name" name="name" value={name} onChange={e=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 bg-primary border rounded border-dark" controlId="formBasicEmail">
                <Form.Label className="text-left">Email Address</Form.Label>
                    <Form.Control type="email" className="border border-dark" placeholder="Enter email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 bg-primary border rounded border-dark" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="border border-dark" placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <br/>
            <Button variant="primary" onClick={onSignup} className="border-2 border-dark">
                {loading? 'Create user...':'Sign up for an account'}
            </Button>
            <br/>
            <br/>
            <a href="/login" className="btn btn-success border-2 border-dark" role="button" aria-pressed="true">Already have an account?</a>
            
        </Form>
        </div>
        </>
    )

}
export default Signup;