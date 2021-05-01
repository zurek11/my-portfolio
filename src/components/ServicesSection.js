import React from "react";
import styled from "styled-components";
import {InnerLayout} from "../styles/Layout";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../images/design.svg"
import intelligence from "../images/intelligence.svg"
import gamedev from "../images/game-dev.svg"


function ServicesSection() {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={'Services'} span={'Services'}/>
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'Web Design'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={intelligence}
                            title={'Artificial Intelligence'}
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue.'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Game development'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue.'}
                    />
                </div>
            </ServiceSectionStyled>
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
  .services {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    .mid-card {
      margin: 0 1.2rem;
    }
  }
`;

export default ServicesSection;
