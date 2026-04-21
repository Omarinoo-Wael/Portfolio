import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/bg.avif';
import ProgressBar from 'react-bootstrap/ProgressBar';
import RoundProgressBar from '../roundProgressBar/roundpb';
import './style.css';



function carousel() {
  return (
    <section className='bg' >
        <div className='skills-container' id='skills'>
            <h1>
                Skills
            </h1>
            <h3>
                Some basic skills I have acquired over the years: 
            </h3>
            <Carousel className='custom-carousel'>
                <Carousel.Item>
                    <div className='pos'>
                        <RoundProgressBar percentage={80} skill={'Web Development'}/>
                        <RoundProgressBar percentage={85} skill={'Skill 2'}/>
                        <RoundProgressBar percentage={90} skill={'Skill 3'}/>
                    </div>
                </Carousel.Item>
                
                <Carousel.Item>
                        <div className='pos'>
                            <RoundProgressBar percentage={100} skill={'Skill 4'}/>
                            <RoundProgressBar percentage={60} skill={'Skill 5'}/>
                            <RoundProgressBar percentage={98} skill={'Skill 6'}/>
                        </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                        <div className='pos'>
                            <RoundProgressBar percentage={95} skill={'Skill 7'}/>
                            <RoundProgressBar percentage={78} skill={'Skill 8'}/>
                            <RoundProgressBar percentage={87} skill={'Skill 9'}/>
                        </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>  
  );
}

export default carousel;