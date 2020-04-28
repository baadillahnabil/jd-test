import React from 'react'
import { createUseStyles } from 'react-jss'
import { Container, Row, Col, Button } from 'react-bootstrap'

import styles from './styles'
const useStyles = createUseStyles(styles)

const Dashboard = ({ movePage }) => {
  const classes = useStyles()

  const onLogout = () => {
    window.localStorage.clear()
    movePage('login')
  }

  return (
    <Container className={classes.root}>
      <Row className={classes.row}>
        <Col>
          <h5 className={classes.title}>Hi, {window.localStorage.getItem('user_email')}</h5>
          <Button variant='danger' block className={classes.buttonLogout} onClick={onLogout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
