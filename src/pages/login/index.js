import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import Fetch from '../../utils/Fetch'
import Endpoint from '../../Endpoint'
import './login.css'

const Login = (props) => {

    const [nik, setNik] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem('authJwt')) props.history.push('/')
    }, [props])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (nik === '') return (alert('NIK tidak boleh kosong!'))
        if (password === '') return alert('Password tidak boleh kosong!')
        const hit = await Fetch.post(Endpoint.login, { nik, password })
        if (!hit.status) return alert(hit.message)
        localStorage.setItem('authJwt', hit.data.token)
        props.history.push('/')
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-center vertical-center">
                    <Col md="4">
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>NIK</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan NIK" onChange={(e) => setNik(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" className="btn-block" type="submit">Login</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Login