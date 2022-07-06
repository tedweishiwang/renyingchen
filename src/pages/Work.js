import { Nav, Container, Navbar, NavDropdown, CardGroup, Card } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';
import webdesign from '../asset/webdesign.png';
import poster from '../asset/poster.png';

const Work = () => {
  // page content
  const pageTitle = 'Work'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <Container>
      <Container style={{maxWidth:"50%", marginTop: "10%", marginLeft: "10%"}}>
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
          <Card border="white" style={{margin: "50px"}}>
            <Card.Link href="/bookdesign">
              <Card.Img style={{height: "250px"}} variant="top" src={bookdesign} />
            </Card.Link>
            <Card.Body>
              <Card.Title>Book Design</Card.Title>
              <Card.Text>
                <text>This is an individual book design project for the intermediate typography class in SAIC.</text>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white" style={{margin: "50px"}}>
            <Card.Img style={{height: "250px"}} variant="top" src={webdesign} />
            <Card.Body>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white" style={{margin: "50px"}}>
            <Card.Img variant="top" src={bookdesign} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </Container>
  )
}

export default Work
