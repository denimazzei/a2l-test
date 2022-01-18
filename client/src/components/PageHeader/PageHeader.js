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
          <CardImg
            alt="..."
            src={require("../../assets/img/A2L-Logo.png").default}
          />

          <h3 className="d-none d-sm-block ">
            The nation's #1 educational video streaming platform for teachers.
          </h3>
          <Row>
            <Col>
              <div>
                {Auth.loggedIn() ? (
                  <>
                    <Link className="btn btn-lg btn-info m-2" to="/me">
                      {Auth.getProfile().data.username}'s profile
                    </Link>
                    <button
                      className="btn btn-lg btn-light m-2"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-lg btn-info m-2" to="/login-page">
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
