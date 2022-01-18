import React from "react";
import SearchMovies from "./Search";

// reactstrap components
import {
  //Button,
  //Card,
  //CardHeader,
  //CardBody,
  //CardFooter,
  //CardTitle,
  //ListGroupItem,
  //ListGroup,
  //Container,
  Row,
  Col,
} from "reactstrap";

// core components

//import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
    
      <div className="wrapper">
        <div className="page-header">
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-black">
                  Search for Quality <br />
                  <span className="text-black">Content</span>
                </h1>
                <p className="text-black mb-3">
                  With over 10,000 vetted educational videos, you can leverage
                  the power of video and kinesthetics to engage today's
                  learners.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Search with a keyword or phrase
                  </p>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <SearchMovies />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

       
      </div>
    </>
  );
}
