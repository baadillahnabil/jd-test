import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Container, Row, Col, Form, Button, Card, Toast } from 'react-bootstrap'

import styles from './styles'
const useStyles = createUseStyles(styles)

const Login = ({ movePage }) => {
  const classes = useStyles()

  const [email, setEmail] = useState('support@joinprint.com.hk')
  const [password, setPassword] = useState('support@joinprint.com.hk')
  const [errorPopup, setErrorPopup] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (email !== 'support@joinprint.com.hk' || password !== 'support@joinprint.com.hk') {
      setErrorPopup(true)
    } else {
      window.localStorage.setItem('auth_key', 'this is supposed to be an actual authKey')
      window.localStorage.setItem('user_email', email)
      movePage('dashboard')
    }
  }

  return (
    <Container className={classes.root}>
      <Toast
        show={errorPopup}
        onClose={() => setErrorPopup(false)}
        autohide
        delay={2000}
        className={classes.popup}
      >
        <Toast.Body>Sorry, your email and password is wrong</Toast.Body>
      </Toast>

      <Row className={classes.row}>
        <Col>
          <h3 className={classes.title}>Login</h3>
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant='primary' type='submit' block className={classes.buttonSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
