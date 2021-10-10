
import React, { useEffect, useState } from 'react';

import {Form, Button} from 'react-bootstrap';

import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

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
        <Form className="m-auto">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" name="name" value={name} onChange={e=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-left">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" onClick={onSignup}>
                {loading? 'Create user...':'Signup'}
            </Button>
            <Button variant="primary">
                <Link to='/login'>Login</Link>
            </Button>
        </Form>
    )

}
export default Signup;