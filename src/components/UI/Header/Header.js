import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <div className="d-flex justify-content-center align-items-center w-100">
            <Navbar.Brand href="#home">
              <img
                src="rb.jpg"
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}