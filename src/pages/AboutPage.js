import React from "react";
import styled from "styled-components";
import {MainLayout} from "../styles/Layout";
import Title from "../components/Titles/Title";
import ImageSection from "../components/About/ImageSection";
import ServicesSection from "../components/About/ServicesSection";
import ReviewsSection from "../components/About/ReviewsSection";


function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}/>
                <ImageSection/>
                <ServicesSection/>
                <ReviewsSection/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;

export default AboutPage;
