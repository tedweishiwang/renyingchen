import { Nav, Container, Navbar, NavDropdown, CardGroup, Card, Button, Row, Col } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';
import webdesign from '../asset/webdesign.png';
import poster from '../asset/poster.png';
import vr from '../asset/cover.png';
import logo from '../asset/logo.png';
import { CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText, CContainer } from '@coreui/react'

const Work = () => {
  // page content
  const pageTitle = 'Work'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <Container>
    <Container>
    <br/>
    <largeText>UIUX</largeText>
    <br/>
    <largeText>VISUAL DESIGNER</largeText>
    </Container>
      <Container style={{marginTop: "30px", marginLeft: "50"}}>
      <p class="text-center">
        <img src={logo} width={120} height={120} />
      </p>
      <p class="text-center"><largeText style={{color: "#E3784C"}}>PORTFOLIO</largeText></p>
      <p class="text-center">
        <text>
        REGONITIONS & ACCOMPLISHMENTS
        </text>
      </p>
      </Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container>

      <Container>
        <Row style={{marginTop: "20px" }} className="justify-content-md-center">
          <Col>
            <Card.Link href="/vr">
              <Card.Img style={{height: "200px", maxWidth: "400px", minWidth: "350px"}} src={vr} />
            </Card.Link>
          </Col>
          <Col>
            <largeText style={{color: "#E3784C"}}>Immediate Rapid Deployment VR training and simulation</largeText>
            <br/>
            <br/>
            <text>IRD VR training and simulation</text>
            <br/>
            <br/>
            <Button style={{color: "#E3784C"}} variant="link"  href="/vr">Read More</Button>
          </Col>
        </Row>
      </Container>

      <Container style={{marginTop: "100px"}}>
        <Row style={{marginTop: "20px" }} className="justify-content-md-center">
        <Col>
          <largeText style={{color: "#E3784C"}}>Book Design</largeText>
          <br/>
          <br/>
          <text>This is an individual book design project for the intermediate typography class in SAIC</text>
          <br/>
          <br/>
          <Button style={{color: "#E3784C"}} variant="link"  href="/bookdesign">Read More</Button>
        </Col>
          <Col align="left">
            <Card.Link href="/bookdesign">
              <Card.Img style={{height: "300px", maxWidth: "300px", minWidth: "250px"}} src={bookdesign} />
            </Card.Link>
          </Col>
        </Row>
      </Container>

      </Container>
    </Container>
  )
}

export default Work
