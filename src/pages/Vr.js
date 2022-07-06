import Header from '../components/Header'
import { Nav, Container, Navbar, NavDropdown, CardGroup, Card, Row, Col, Button, Image, Carousel } from "react-bootstrap";
import bookdesign from '../asset/bookdesign.png';
import poster from '../asset/posterlarge.png';
import persona from '../asset/vr/persona.png';
import scenarioresearch1 from '../asset/vr/scenarioresearch1.png';
import scenarioresearch2 from '../asset/vr/scenarioresearch2.png';

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

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Competitor Analyze
          </contentSubtitle>

          <br/>
          <br/>

          <a href="https://youtu.be/fXwwHNLp260">
            <contentSubsubtitle>
            Video Training Tool
            </contentSubsubtitle>
          </a>

          <br/>

          <contentSubsubsubtitlebold>
            Pros
          </contentSubsubsubtitlebold>

          <br/>

          <text>
          Low cost of the training
          <br/>
          Repeatable for practice
          <br/>
          Variety of scenarios
          <br/>
          Easy to access the individual training detailed data and recall the experience
          <br/>
          </text>

          <br/>
          <br/>

          <contentSubsubsubtitlebold>
            Cons
          </contentSubsubsubtitlebold>

          <br/>

          <text>
          No in-person interaction
          <br/>
          Not enough realistic feeling with a 2D screen
          <br/>
          Everything is pre-recorded, with no variation of NPCs’ reactions
          <br/>
          High cost for the training equipment and video recording
          <br/>
          Hard to evaluate the teamwork result

          </text>

          <br/>
          <br/>

          <a href="https://youtu.be/eBb1385m_gQ">
            <contentSubsubtitle>
            Real-life Actor Session
            </contentSubsubtitle>
          </a>

          <br/>

          <contentSubsubsubtitlebold>
            Pros
          </contentSubsubsubtitlebold>

          <br/>

          <text>
          Most realistic in the actual environment
          <br/>
          Able to evaluate the teamwork result
          <br/>
          Easy to get recruited in the stress management mindset
          <br/>
          </text>

          <br/>
          <br/>

          <contentSubsubsubtitlebold>
            Cons
          </contentSubsubsubtitlebold>

          <br/>

          <text>
          High cost of the actor hiring and training
          <br/>
          Hard to Arrange and coordinate everyone
          <br/>
          Hard to repeat the training at a low cost
          <br/>
          Hard to calculate the time usage and everything else in the action
          <br/>
          Hard to record the individual action
          <br/>
          </text>

          <br/>
          <br/>

          <text>
          Our team then decided to use VR as a training tool because it is low-cost (399 CAD), and reusable. It can be used as a learning tool to observe police recruit behavior and performance, is easy to use after onboarding, and is most likely to create an immersive feeling with the sound, 3D environment, and interactive NPCs.

          <br/>
          <br/>
          To better understand how VR products can focus more on solving the current specific problems of IRD training, I analyzed and tested the existing VR shooting application: Gun Club VR, we found that the user experience of the existing VR shooting game was not suitable for police officers as a training tool.

          <br/>
          <br/>

          The Gun Club VR is exciting and it allows the player to try different guns and experience the shooting target. However,

          <br/>
          <br/>
          <ul>
            <li>
              The target user is not police recruits
            </li>
            <li>
              Severe motion sickness caused by moving with an analog joystick
            </li>
            <li>
              Users cannot move with both feet in the 3D scene
            </li>
            <li>
              No real NPCs, only cardboard character targets, unable to interact with characters
            </li>
            <li>
              No ambient noise and injured victim to simulate the real scenario
            </li>
            <li>
              No ambient noise and injured victim to simulate the real scenario
            </li>
            <li>
              No tense and stressful atmosphere
            </li>
            <li>
              No decision-making or strategy to learn during the game
            </li>
            <li>
              The game requires a complex operation in VR which is very difficult for VR novice
            </li>
          </ul>
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Key Features
          </contentSubtitle>

          <br/>
          <br/>

          <text>
            Based on research and analysis of competing products, bringing the most realistic feeling to the user can help exercise the police recruits' ability to resist stress and decision making. In addition, considering the possibility that police recruits are unfamiliar with new VR products, we believe that onboarding is essential.

            <br/>
            <br/>

            We empathize with the key features of our VR simulation

            <br/>
            <br/>

            <ul>
              <li>
                Learning tool
              </li>
              <li>
                Friendly to VR new hand
              </li>
              <li>
                Immersive environment (sound effect/ 3D environment/ Interactable NPCs) to adapt with the real IRD scenario
              </li>
              <li>
                Exercise stress management and decision-making skills
              </li>
              <li>
                Locomotion and walking by feet simulate the real environment and reduce the game feeling.
              </li>
            </ul>

          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            User Research
          </contentSubtitle>

          <br/>
          <br/>

          <contentSubsubsubtitlebold>
          Persona
          </contentSubsubsubtitlebold>

          <br/>
          <br/>

          <Image src={persona} style={{width: "100%"}}/>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Expert Interview
          </contentSubtitle>

          <br/>
          <br/>

          <text>
          Before putting it into production, in coordination with our client JIBC, we interviewed a Delta police officer who has a lot of experience in IRD simulation, and as an instructor of existing IRD simulation, he gave us a lot of insight and considerations for designing IRD training tool:

          <br/>
          <br/>

          <ul>
            <li>
              Stop the threat as soon as possible
            </li>
            <li>
              Stress management during the high-pressure IRD training
            </li>
            <li>
              Use strategy to interact with the active shooter and victims
            </li>
            <li>
              Find the cover to keep safe
            </li>
            <li>
              Give feedback when the recruit gets shot but don’t provide a “dead” option to bring them negative feelings
            </li>
            <li>
              Environment sound and noise to bring a sense of intense
            </li>
            <li>
              Recruits need to search every corner to make sure the threat stops
            </li>
          </ul>
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Scenario Research
          </contentSubtitle>

          <br/>
          <br/>

          <text>
          Based on the research and internal consultation with JIBC Police Academy SMEs, <b>the office scenario</b> was selected as the environment to be built for the IRD VR simulation. Later, we used this research to inform the phenotype of the active shooter.
          <br/>
          <br/>

          “According to the research from Mother Jones, a publication from the United States, for the last 10 years, <b>more than half of the cases involved school or workplace shootings (12 and 20, respectively);</b>”

          <br/>
          <br/>

          “According to research from the Washington Post, from 1966 to 2021, shootings in schools and houses of worship tend to stand out in our minds, but they make up a relatively small portion of public mass shootings. <b>More common are those in offices</b> and retail establishments such as restaurants and stores. ”
          </text>
        </Col>
      </Row>

      <Row style={{marginTop: "20px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <Image src={scenarioresearch1} style={{minWidth: "300px", width: "90%"}}/>
        </Col>
        <Col style={{marginTop: "50px" }}>
          <Image src={scenarioresearch2} style={{minWidth: "300px", width: "90%"}}/>
        </Col>
      </Row>

      <Row style={{marginTop: "50px" }} className="justify-content-md-center">
        <Col style={{marginTop: "50px" }}>
          <contentSubtitle>
            Non-Linear Narrative / Plot Design
          </contentSubtitle>

          <br/>
          <br/>

          <text>
            Based on the study results, we designed as police recruits in the office scenario will encounter various dangerous situations and the consequences of their different decisions to create a possible scenario, which will help the team better simulate the IRD experience.
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
