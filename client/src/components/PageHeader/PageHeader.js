import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col, CardImg } from "reactstrap";
import Auth from "../../utils/auth";

const PageHeader = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="page-header header-filter content-center brand">
      
      <Container>
        <div className="content-center brand">
          <CardImg className="img-responsive flex-row align-center"
            alt="..."
            src={require("../../assets/img/A2L-Logo.png").default}
            width="500" height="500"
          />

          <h3 className="d-none d-sm-block ">
            The nation's #1 educational video streaming platform for teachers.
          </h3>
          <Row className="flex-row justify-center mb-4">
            <Col>
              <div className="flex-row align-center">
                {Auth.loggedIn() ? (
                  <>
                    <Link className="btn btn-lg btn-info m-2 center" to="/landing-page">
                      {Auth.getProfile().data.name}'s profile
                    </Link>
                    <button
                      className="btn btn-lg btn-light m-2 center" to="/"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-lg btn-info m-2  " to="/login-page">
                      Login
                    </Link>
                    <Link
                      className="btn btn-lg btn-danger m-2"
                      to="/register-page"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
