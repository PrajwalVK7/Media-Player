import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
function VideoCard() {
    return (
        <>
<Row>
    <Col>
    <Card className='mt-5 mb-5' style={{ width: '15rem', height: '270px' }}>
                <Card.Img variant="top" src="https://timesofindia.indiatimes.com/photo/msid-101203536,imgsize-179864.cms" />
                <Card.Body>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <Card.Text>
                            video caption</Card.Text>
                        <Button variant="danger" className='ms-5'><i class="fa-solid fa-trash"></i></Button>
                    </div>
                </Card.Body>
            </Card>
            </Col>
</Row>
            
        </>
    )
}

export default VideoCard
