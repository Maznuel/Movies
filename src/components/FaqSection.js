import React,{useState} from 'react';
import styled from 'styled-components';
import {About} from './styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import {useScroll} from './UseScroll';
import {fade} from '../animation'

const FaqSection = () =>{
    const[element, controls] = useScroll();
    return(
        <Faq variants={fade} initial='hidden' ref={element} animate={controls}>
            <AnimateSharedLayout>
            <h2>Any question? <span>FAQ</span></h2>
            <Toggle title="How do I start">
            <div  className="question">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et autem </p>
                </div> 
            </div>
            </Toggle>
            <Toggle title="Daily Schedule">
            <div className="question">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et autem </p>
            </div>
            </div>
            </Toggle>
            <Toggle title="Diferent Payment Methods">
            <div className="question">
                <h4>I want a girlfriend</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et autem </p>
            </div>
            </div>
            </Toggle>
            <Toggle title="What Products do We Offer">
            <div className="question">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et autem </p>
            </div>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}
const Faq = styled(About)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom:2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100%;
}
.question{
    padding: 3rem 0rem;
}
.answer{
    padding:2rem 0rem; 
    p{
        padding:1rem 0rem;
    }
}
`;

export default FaqSection;