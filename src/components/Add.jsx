import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='d-flex align-item-center mt-4 '>
                <button onClick={handleShow} className='btn text-white ' style={{ fontSize: '30px' }} > Uplaod New Video<i class="fa-solid fa-cloud-arrow-up ms-3"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '23px' }}><i class="fa-solid fa-film text-warning"></i> Uplaod Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the following details</p>
                    <Form className='border border-secondary p-3'>
                        <Form.Group className="mb-3" >
                            <Form.Control className='mb-3' type="text" placeholder="Enter Video Id " />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control className='mb-3' type="text" placeholder="Enter Video Image URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control className='mb-3' type="text" placeholder="Enter Youtube Video Link" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add
