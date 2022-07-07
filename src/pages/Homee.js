import Header from '../components/Header'
import { Nav, Container, Navbar, NavDropdown, CardGroup, Card, Row, Col, Button, Image } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';
import poster from '../asset/posterlarge.png';


const Homee = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <Container>
    <Row style={{marginTop: "100px"}} className="justify-content-md-center">
      <Col md="auto">
        <contentTitle>
          Home E
        </contentTitle>
      </Col>

      <Row style={{marginTop: "20px" }} className="justify-content-md-center">
        <Col style={{marginTop: "20px", minWidth: "300px" }}>
        <contentSubtitle >
          Prduct
        </contentSubtitle>

        <br/>
        <br/>

        <text>
        HomeE is an interface designed for smart home displays that intuitively show the users' current utilities usage through engaging metrics, the cost. It drives sustainable actions through budget setting and recommendations all while functioning as an interactive home interface.

        </text>
        </Col>
        <Col style={{marginTop: "20px", minWidth: "300px" }}>
        <contentSubsubsubtitlebold >
          YEAR
        </contentSubsubsubtitlebold>
        <br/>
        <text>
        2021
        </text>

        <br/>
        <br/>

        <contentSubsubsubtitlebold >
          ROLE
        </contentSubsubsubtitlebold>
        <br/>
        <text>
            User experience designer/ User Interface designer
        </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Responsibilities
          </contentSubtitle>

          <br/>
          <br/>

          <text>
          I worked as a user interface designer and user experience designer.


            <br/>
            <br/>

            <ul>
              <li>
              Collaborated with the engineer, project managers, and UX researcher to create a prototype for homeE.
              </li>
              <br/>
              <li>
              Work with teams to research and communicate user pain points to understand user motivations, triggers, desires, goals, and competitor analysis.
              </li>
              <br/>
              <li>
              Create and design user flows, wireframes, user interfaces, and interactive prototypes, etc.              </li>
              <br/>
              <li>
              Lead and design user Interface.
              </li>
              <br/>
              <li>
              Develop user experience in line with project goals, and test with users.
              </li>
              <br/>
              <li>
              Create illustrations for prototypes.
              </li>
              <li>
              Assist project managers in planning project milestones and writing final documents.
              </li>
            </ul>
          </text>
        </Col>
      </Row>
    </Row>


    </Container>
  )
}

export default Homee
