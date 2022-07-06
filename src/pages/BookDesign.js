import Header from '../components/Header'
import { Nav, Container, Navbar, NavDropdown, CardGroup, Card, Row, Col, Button, Image } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';

const BookDesign = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <Container style={{width: "80%"}}>
      <Row style={{marginTop: "100px"}} className="justify-content-md-center">
        <Col md="auto">
          <contentTitle>
            Typography Designs
          </contentTitle>
        </Col>
      </Row>

      <Row style={{marginTop: "20px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
        <Image src={bookdesign} style={{minWidth: "300px", width: "80%"}}/>
        </Col>
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle >
            Book Design
          </contentSubtitle>

          <br/>
          <br/>

          <text>
           &lt; MOHOLY NAGY &gt;
          </text>

          <br/>
          <br/>

          <text>
          This is an individual book design project for the intermediate typography class in SAIC.
          </text>

          <br/>
          <br/>

          <quoteText>
          I got inspiration from geometric shapes. I want to emphasize these shapes in my design. Circle and triangular shapes occupied the whole image. Small circles could be dots and imply the page numbers; bigger dots could be decoration elements.  Some image frames are also circles, which is not very common in designs. I want to enhance the feeling of shapes. Moreover, some triangular image frames enhance the geometric feeling too.

The secondary element in my design is the typical Bauhaus colors. I combine those colors with decorative geometric shapes to enhance the feeling of Bauhaus.
          </quoteText>

          <br/>
          <br/>
          <text>
            Created by Photoshop, InDesign, Illustrator
          </text>

          <br/>
          <br/>

          <Button variant="outline-warning"  href="https://issuu.com/renyingchen/docs/moholy-nagy____">Read the book</Button>
        </Col>
      </Row>

    </Container>
  )
}

export default BookDesign
