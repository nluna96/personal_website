import React from 'react';
import style from 'styled-components';

const Section = style.section`
    background: url(${({ image }) => image && image}) center;
    height: 100vh;
    display: flex;
    position: center;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
    `;


const FooterBottom = style.footer`
    background: transparent;
    width: 100%;
    display: flex;
    justify-content: right;
    align-content: right;
    text-align: right;
    padding: 0rem calc((100vw - 1300px) / 2);

    img {
        height: 50px;
        width: 50px;
        cursor: pointer;
        padding: 10px 15px;
        
    }
    `;

export const Hero = ({ image }) => {
 
    return (
        <>
            <Section image={image}>
                <FooterBottom>
                    <a href="https://www.linkedin.com/in/noelamadorluna/"><img src={require("../logos/linkedin.png")} alt="linked in logo"/></a>
                    <a href="https://github.com/nluna96"><img src={require("../logos/github.png")} alt="github in logo"/></a>
                </FooterBottom>
            </Section>
        </>
    );
};

export default Hero;