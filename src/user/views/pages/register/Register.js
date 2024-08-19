import React from 'react'
import { Button, Card, CardBody, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

const Register = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <i class="bi bi-person"></i>
                    </InputGroupText>
                    <Form.Control placeholder="Username" autoComplete="username" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <i class="bi bi-envelope-at"></i>
                    </InputGroupText>
                    <Form.Control placeholder="Email" autoComplete="email" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <i class="bi bi-key-fill"></i>
                    </InputGroupText>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupText>
                      <i class="bi bi-key-fill"></i>
                    </InputGroupText>
                    <Form.Control
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <div className="d-grid">
                    <Button color="success">Create Account</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
