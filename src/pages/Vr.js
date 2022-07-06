import Header from '../components/Header'
import { Nav, Container, Navbar, NavDropdown, CardGroup, Card, Row, Col, Button, Image } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';
import poster from '../asset/posterlarge.png';

const Vr = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <Container>
      <Row style={{marginTop: "100px"}} className="justify-content-md-center">
        <Col md="auto">
          <contentTitle>
            Immediate Rapid Deployment VR training and simulation
          </contentTitle>
        </Col>
      </Row>

      <Row style={{marginTop: "20px" }} className="justify-content-md-center">
        <Col style={{marginTop: "20px", minWidth: "300px" }}>
        <contentSubtitle >
          Project Overview
        </contentSubtitle>

        <br/>
        <br/>

        <text>
        This project aimed to develop a VR-based simulation of an office under attack from an active shooter. This digital artifact would be used by police recruits and instructors in immediate rapid deployment (IRD) training.
        <br/>
It has a practice scenario to orient police recruits to the parameters of movement in VR, as well as acquainting them with the virtual gun and the mechanics of shooting, aiming, and reloading in the simulation. The office scenario is based on a police academy office building IRD scenario. It has a 3D office building built by the CDM team, with two active shooters causing havoc in that virtual environment that the police recruits have to get to quickly. The police recruits are autonomous once they are in the virtual office building. There are no prompts to guide their movement or tell them where to go, as would be in the real world should they have to respond to an emergency with an active shooter.

        </text>
        </Col>
        <Col style={{marginTop: "20px", minWidth: "300px" }}>
        <contentSubsubsubtitlebold >
          PRODUCT
        </contentSubsubsubtitlebold>
        <br/>
        <text>
        IRD VR training and simulation
        </text>

        <br/>
        <br/>

        <contentSubsubsubtitlebold >
          YEAR
        </contentSubsubsubtitlebold>
        <br/>
        <text>
        2022
        </text>

        <br/>
        <br/>

        <contentSubsubsubtitlebold >
          CLIENT
        </contentSubsubsubtitlebold>
        <br/>
        <a href="https://www.jibc.ca/">
          <text>
            Justice Institute of British Columbia’s Centre for Teaching, Learning, and Innovation. （JIBC-CTLI）
          </text>
        </a>

        <br/>
        <br/>

        <contentSubsubsubtitlebold >
          ROLE
        </contentSubsubsubtitlebold>
        <br/>
        <text>
          Product Designer/ User experience researcher/ User Interface designer
        </text>

        <br/>
        <br/>

        <contentSubsubsubtitlebold >
          PHASE
        </contentSubsubsubtitlebold>
        <br/>
        <text>
        Phrase one: Jan 2022- April 2022 proof of concept prototype
        <br/>
        Phrase two: May 2022- August 2022 published useful final product (current working on)

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
            I worked as a lead user interface designer and product designer.

            <br/>
            <br/>

            <ul>
              <li>
              Collaborated with engineers, project managers, and artists to create a new virtual reality training tool for JIBC recruits to respond to shooting emergencies, "IRD VR training and simulation".
              </li>
              <br/>
              <li>
              Led teams to research and communicate user pain points to understand user motivations, triggers, desires, goals, and competitor analysis.
              </li>
              <br/>
              <li>
              Create and design VR features, product storylines, user flows, wireframes, user interfaces, and interactive prototypes.
              </li>
              <br/>
              <li>
              Lead and design user testing for Police Recruit, Police Mentor, and Justice Institute of British Columbia’s Centre for Teaching, Learning, and Innovation, in-depth interviews with user questionnaires, and validate product usability based on results and obtain recommendations for developable iterations of the product.
              </li>
              <br/>
              <li>
              Assist project managers in planning project milestones, writing final documents and blogs, and communicating product scope and usage guidelines to customers and stakeholders.
              </li>
            </ul>
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Problem Statement
          </contentSubtitle>

          <br/>
          <br/>

          <text>
            Immediate Rapid Deployment (IRD) is the swift and immediate deployment of law enforcement resources to ongoing, life-threatening situations where delayed deployment could otherwise result in death or great bodily harm to innocent persons.

            <br/>
            <br/>

            For the police recruits, it is mandatory for them to train in Immediate Rapid Deployment(IRD). However, In face-to-face IRD training, using actors and simulated ammunition is <b>complex</b> and <b>expensive</b> and is currently reserved for senior recruits who have completed the field training component.

            <br/>
            <br/>

            Because IRD is a low-frequency, high-risk situation, however, it is important that junior recruits have a <b>basic level of knowledge</b> if they are required to respond to an active shooter situation.

            <br/>
            <br/>

            Therefore, Junior recruits still lack an approachable, easy setup, entry-level training opportunity to help them gain an initial understanding of IRD training.
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Purpose of the Solution
          </contentSubtitle>

          <br/>
          <br/>

          <text>
            Deconstructing the need of a police recruit to organize the interactions in a way that provides them with a highly immersive, intuitive, educational, and accessible experience of IRD training.
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Current Pain Point
          </contentSubtitle>

          <br/>
          <br/>

          <text>
          <ul>
            <li>
              In face-to-face Immediate Rapid Deployment (IRD) training, using actors and simulated ammunition is <b>complex</b> and <b>expensive</b> and is currently reserved for senior recruits who have completed the field training component.
            </li>
            <br/>
            <li>
              Because IRD is a low-frequency, high-risk situation, however, it is important that junior recruits have a <b>basic level of knowledge</b> if they are required to respond to an active shooter situation.
            </li>
            <br/>
            <li>
              Targeted users: Police recruits are not familiar with IRD processes.
            </li>
          </ul>
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Emphasized the User Needs and Analyze the Existing Product
          </contentSubtitle>

          <br/>
          <br/>

          <text>
          I conducted background research, technical research, and competitive research to analyze and learn from existing tools and applications for police training. The existing two simulations currently popular in IRD training are

          <br/>
          <br/>

          <ul>
            <li>
            Video training simulation by VirTra.
            </li>
            <br/>
            <li>
            In-person training conducted by the police academy or a police station.
            </li>
          </ul>

          <br/>
          Then I analyze their advantages and disadvantages.
          </text>
        </Col>
      </Row>

      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  )
}

export default Vr
