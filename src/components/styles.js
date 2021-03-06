import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
margin-top:0;
min-height:90vh;
display:flex;
align-items:center;
justify-content:space-between;
padding: 5rem 10rem;
color:white;
overflow:hidden;
`;
export const Description = styled.div`
flex:1;
padding-right: 5rem;
z-index:2;
h2{
    font-weight:lighter;
}
`;
export const Image = styled.div`
flex:1;
z-index:2;
overflow:hidden;
img{
    width:100%;
    height:80vh;
    object-fit:cover;
}
`;
export const Hide = styled.div`
overflow:hidden;
`;