import React, { Component , useEffect} from "react";
import "./App.css";
import DraggableShape from "./components/draggableShape";
import background from "./assets/background.jpeg";
import Dashboard from './Dashboard';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import { getAuth, signOut } from '@firebase/auth';

class Home extends Component {
    constructor({history}) {
        const logout = () => {
            signOut(auth)
                .then(() => {
                    localStorage.removeItem('token')
                    history.push('/')
                })
                .catch((e) => alert(e.message))
        }
    
        useEffect(() => {
            const token = localStorage.getItem('token');
    
            if (!token) {
                history.push('/')
            }
        },[])
        super();
    }
    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: document.body.scrollHeight * 1.35,
                }}
            >
                <Dashboard/>
                <DraggableShape />
            </div>
        );
    }
}
export default Home;