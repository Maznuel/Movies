import React from 'react';
import {  motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContacMe = () =>{
    return(
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <h1>ContacMe</h1>
        </motion.div>
    )
}

export default ContacMe;