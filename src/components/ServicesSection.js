import React from 'react';
import diaphragm from '../img/diaphragm.svg';
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { About, Description, Image, Hide } from './styles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './UseScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={fade} animate={controls} initial='hidden' ref={element}>
            <Description className="description">
                <h2>Awesome <span>productions</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Fast</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Cheap</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>8k</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="cameraman" />
            </Image>
        </ Services>
    )
}

const Services = styled(About)`
h2{
    padding-bottom:5rem;
}
p{
    width:70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const Cards = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
`;
const Card = styled.div`
flex-basis:15rem;
text-align:center;
.icon{
    display:flex;
    align-items:center;
    h3{
        margin-left:1rem;
    }
}
`;

export default ServicesSection;