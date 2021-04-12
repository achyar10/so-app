import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './index.css'

const Dashboard = (props) => {

    const logout = () => {
        localStorage.removeItem('authJwt')
        props.history.push('/login')
    }

    return (
        <>
            <Row className="justify-content-center">
                <Col md="12">
                    <Button variant="success" className="btn-block">Mulai SO</Button>
                </Col>
                <Col md="12" className="mt-3">
                    <Button variant="danger" className="btn-block" onClick={() => logout()}>Keluar</Button>
                </Col>
            </Row>
        </>
    )

}
export default Dashboard