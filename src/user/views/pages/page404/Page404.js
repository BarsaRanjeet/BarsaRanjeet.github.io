import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

const Page404 = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="clearfix" style={{color: 'white'}}>
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="float-start">
                The page you are looking for was not found.
              </p>
            </div>
            <InputGroup className="input-prepend">
              <InputGroupText>
              <i className="bi bi-search"></i>
              </InputGroupText>
              <Form.Control type="text" placeholder="What are you looking for?" />
              <Button color="info">Search</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page404
