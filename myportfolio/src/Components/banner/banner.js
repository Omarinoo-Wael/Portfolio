import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import myCV from '../../assets/CV.pdf';
import downloadImg from '../../assets/download.png';
import './style.css'
function banner(){
    return(
        <section className='banner' id='home'>
            <Container>
                <Row>
                    <Col> 
                        <span>
                            <h1>
                                OMAR WAEL
                            </h1>
                        </span>
                        <p>
                            Full-stack developer with a Backend heart and a Game Dev soul.
                            <br/>
                            I focus on building high-performance systems and immersive digital environments from the ground up.
                        </p>
                        <button className="cv-btn" onClick={() => window.open(myCV)}>
                            Download CV
                            <img src={downloadImg} alt=''/>
                        </button>
                    
                
                    </Col>
                    <Col>
                        <div className='profile-card'>
                            <div className='guy'>
                                <img src={require('../../assets/guy.png')} alt='Guy'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default banner;