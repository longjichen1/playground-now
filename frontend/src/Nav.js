import React, {Component} from 'react';
import {Container, Navbar, Button} from 'react-bootstrap';

function Nav (){
    return(
        <Navbar className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand  className="align-center">
                <img alt="text" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78587/sandbox-clipart-md.png" width="80" height="50" className="d-inline-block align-center text-align-center"/>{' '}
                    <span className="p-4 display-6 ">Playground</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Nav;