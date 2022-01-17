import React from "react";

// reactstrap components
import { Container, Row, Col, Button, CardImg } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <CardImg
            alt="..."
            src={require("../../assets/img/A2L-Logo.png").default}
          />
          <h1 className="h1-seo">A2L</h1>
          <h3 className="d-none d-sm-block">
            The nation's #1 educational video streaming platform for teachers.
          </h3>
          <Row>
            <Col>
              <Button color="success" href="/register-page">
                Register
              </Button>
              <Button color="warning" href="/login-page">
                Login
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
