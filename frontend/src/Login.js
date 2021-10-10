
import React, { useEffect, useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Form, Button, Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Nav from './Nav';


const Login = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
            history.push('/home')
        }
    },[])
    const onLogin=()=>{
        setLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/home')
            })
            .catch((e)=>alert(e.message))
            .finally(() => setLoading(false))
    }
    return(
    <>
    <div style={{ height:"750px", fontSize:"24px"}}>
        <Nav/>
        <br/>
        <Form className="p-4">
            <Form.Group className="mb-3 bg-primary border rounded border-dark"z controlId="formBasicEmail">
                <Form.Label className="text-left">Email address</Form.Label>
                    <Form.Control type="email" className="border border-dark" placeholder="Enter email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>

            </Form.Group>

            <Form.Group className="mb-3 bg-primary border rounded border-dark" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="border border-dark" placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <br/>
            <Button variant="primary" onClick={onLogin} className="bg-primary border-2 border-dark">
                {loading? 'Logging you in...': 'Login'}
            </Button>
            <br/>
            <br/>
            <a href="/" className="btn btn-success border-2 border-dark" role="button" aria-pressed="true">Don't have an account?</a>
        </Form>
        </div>
    </>
    )

}
export default Login;