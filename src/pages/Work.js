import { Nav, Container, Navbar, NavDropdown, CardGroup, Card } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';
import webdesign from '../asset/webdesign.png';
import poster from '../asset/poster.png';
import vr from '../asset/vr.png';

const Portfolio = () => {
  // page content
  const pageTitle = 'Portfolio'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <Container>
      <Container style={{marginTop: "30px", marginLeft: "30px"}}>
        <largeText>PORTFOLIO</largeText>
        <br/>
        <text>
        Features and genuine cases that I work as a product manager and designer to drive user-centric strategies and solutions for real-world problems. Including Ecommerce, productivity tool and interactive media.
        </text>
      </Container>
      <br/>
      <line/>
      <Container>
        <CardGroup>

        <Card border="white" style={{margin: "50px", maxWidth: "300px"}}>
          <Card.Link href="/vr">
            <Card.Img style={{height: "350px", maxWidth: "300px"}} variant="top" src={vr} />
          </Card.Link>
          <Card.Body>
            <Card.Title>Immediate Rapid Deployment VR training and simulation</Card.Title>
            <Card.Text>
              IRD VR training and simulation
            </Card.Text>
          </Card.Body>
        </Card>

          <Card border="white" style={{margin: "50px", maxWidth: "300px"}}>
            <Card.Link href="/bookdesign">
              <Card.Img style={{height: "350px", maxWidth: "300px"}} variant="top" src={bookdesign} />
            </Card.Link>
            <Card.Body>
              <Card.Title>Book Design</Card.Title>
              <Card.Text>
                <text>This is an individual book design project for the intermediate typography class in SAIC.</text>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="white" style={{margin: "50px", maxWidth: "300px"}}>
            <Card.Img style={{height: "350px", maxWidth: "300px"}} variant="top" src={webdesign} />
            <Card.Body>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>

        </CardGroup>
      </Container>
    </Container>
  )
}

export default Portfolio
