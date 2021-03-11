import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import ProfilePicture from "../components/ProfilePicture";
import Bio from "../components/Bio"

function MidContent() {
    return (
        <Container id="mid-content">
            <Row>
                <Col sm={4}>
                    {/* <ProfilePicture/> */}
                </Col>
                <Col sm={8}>
                    {/* BIO + SOCIAL MEDIA */}
                    <Bio/>
                </Col>
            </Row>
        </Container>
    )
}

export default MidContent
