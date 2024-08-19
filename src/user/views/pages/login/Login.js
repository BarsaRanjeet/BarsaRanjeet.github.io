import React from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupText>
                      <i class="bi bi-person"></i>
                      </InputGroupText>
                      <Form.Control placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupText>
                      <i class="bi bi-key-fill"></i>
                      </InputGroupText>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </InputGroup>
                    <Row>
                      <Col xs={6}>
                        <Button color="primary" className="px-4">
                          Login
                        </Button>
                      </Col>
                      <Col xs={6} className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Welcome!
                      If you're new here, please register to create an account. You can log in once your registration is approved by the admin. For more details or assistance, feel free to contact the admin.
                      Thank you!
                    </p>
                    <Link to="/register">
                      <Button color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
