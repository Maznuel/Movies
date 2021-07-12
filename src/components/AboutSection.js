import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from './styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation'
import Wave from './Waves';


const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Team MAG</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>profesional <span>Movies</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>at your fingertips</motion.h2>
                    </Hide>
                </motion.div >
                <motion.p variants={fade}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem possimus soluta ad harum consequatur? <span>aaaaa</span> dasd.
                </motion.p>
                <motion.button variants={fade}>Check Out</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} initial='hidden' animate='show' src={home1} alt="camera" />
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection;