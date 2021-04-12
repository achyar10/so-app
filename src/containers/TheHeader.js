import React from 'react'
import { Navbar } from 'react-bootstrap'

const TheHeader = () => {


  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Navbar.Brand>
          SO App
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default TheHeader
