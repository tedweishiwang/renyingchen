import Header from '../components/Header'
import Meta from '../components/Meta'
import bookdesign from '../asset/bookdesign.png';
import poster from '../asset/poster.png';

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Header/>
      <column>
        <div style={{marginTop: "15%"}}>
          <a href="/typography">
            <img src={bookdesign} width={300} height={400}/>
          </a>
          <br/>
          <br/>
          <headertitlelarge> BOOK DESIGN </headertitlelarge>
          <br/>
          <bookdesigntext> &lt; Moholy Nagy &gt;</bookdesigntext>
        </div>
        <pinkRectangle>
          <column>
            <div style={{width: '25%', marginLeft: '10%', marginTop: '20%'}}>
              <largeText>
                Art and Design is part of my life.
              </largeText>
              <br/>
              <br/>
              <br/>
              <largeTextLight>
                I CREATE, PRESENT, EXPERIENCE
              </largeTextLight>
              <br/>
              <br/>

              <boldText> <a href="/about">LEARN MORE &gt;</a> </boldText>

            </div>
            <a href="/typography" style={{marginTop: '15%', marginRight: '20%' }}>
              <img src={poster} width={300} height={450}/>
            </a>
          </column>
        </pinkRectangle>
      </column>

    </div>
  )
}

export default Home
