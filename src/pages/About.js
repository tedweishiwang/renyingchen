import Header from '../components/Header'
import Meta from '../components/Meta'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
import { Carousel } from "react-bootstrap";

import userreport1 from '../asset/vr/userreport1/1.png'
import userreport2 from '../asset/vr/userreport1/2.jpeg'
import userreport3 from '../asset/vr/userreport1/3.jpeg'
import userreport4 from '../asset/vr/userreport1/4.jpeg'
import userreport5 from '../asset/vr/userreport1/5.jpeg'
import userreport6 from '../asset/vr/userreport1/6.jpeg'
import userreport7 from '../asset/vr/userreport1/7.jpeg'
import userreport8 from '../asset/vr/userreport1/8.jpeg'
import userreport9 from '../asset/vr/userreport1/9.jpeg'
import userreport10 from '../asset/vr/userreport1/10.jpeg'
import userreport11 from '../asset/vr/userreport1/11.jpeg'
import userreport12 from '../asset/vr/userreport1/12.jpeg'
import userreport13 from '../asset/vr/userreport1/13.jpeg'
import userreport14 from '../asset/vr/userreport1/14.jpeg'
import userreport15 from '../asset/vr/userreport1/15.jpeg'
import userreport16 from '../asset/vr/userreport1/16.jpeg'
import userreport17 from '../asset/vr/userreport1/17.jpeg'
import userreport18 from '../asset/vr/userreport1/18.jpeg'
import userreport19 from '../asset/vr/userreport1/19.jpeg'
import userreport20 from '../asset/vr/userreport1/20.jpeg'
import userreport21 from '../asset/vr/userreport1/21.jpeg'

const About = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
    <CCarousel controls dark indicators>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxWidth: "400px"}} className="d-block w-50" src={userreport1} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport2} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport3} alt="slide 3" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport4} alt="slide 4" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport5} alt="slide 5" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport6} alt="slide 6" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport7} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport8} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport9} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport9} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport10} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport11} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport12} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport13} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport14} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport15} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport16} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport17} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport18} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport19} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport20} alt="slide 7" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage style={{marginLeft:"25%", maxHeight: "400px"}} className="d-block w-50" src={userreport21} alt="slide 7" />
      </CCarouselItem>
    </CCarousel>
    </div>
  )
}

export default About
