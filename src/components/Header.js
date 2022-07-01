import { Container } from 'react-bootstrap'
import logo from '../asset/logo.png';

const Header = () => {
  return (
    <div>
      <div class="row justify-content-start">
        <div class="col-5">
          <br/>
          <br/>
          <headertitle> Renee Chen </headertitle>
          <br/>
          <br/>
          <headertitlelarge> SAIC/UIUX/VISCOM</headertitlelarge>
          <br/>
          <br/>
          <rectangle/>
        </div>
        <div class="col-5">
          <img src={logo} width={120} height={120} />
        </div>
      </div>
    </div>
  )
}

export default Header
