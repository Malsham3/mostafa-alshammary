import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePicture from "../components/ProfilePicture";
import Bio from "../components/Bio";

function MidContent() {
  return (
    // <Container id="mid-content">
    //   <Row>
    //     <Col md={8}>
    //       {/* BIO + SOCIAL MEDIA */}
    //       <Bio />
    //     </Col>
    //     <Col md={4}>{/* <ProfilePicture/> */}</Col>
    //   </Row>
    // </Container>

        <div id="mid-content">
            <Bio/>
        </div>
  );
}

export default MidContent;
