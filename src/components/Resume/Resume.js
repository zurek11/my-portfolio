import React from "react";
import styled from "styled-components";

import {InnerLayout, MainLayout} from "../../styles/Layout";
import Title from "../Titles/Title";
import SubTitle from "../Titles/SubTitle";

import {BusinessCenter} from "@material-ui/icons";
import {School} from "@material-ui/icons";
import ResumeItem from "./ResumeItem";

function Resume() {
    const business_center_icon = <BusinessCenter/>
    const school_icon = <School/>

    return (
        <ResumeStyled>
            <Title title={"Resume"} span={"Resume"}/>
            <InnerLayout className={"resume-section"}>
                <div className={"sub-title"}>
                    <SubTitle icon={business_center_icon} title={"Working Experience"}/>
                </div>
                <div className={"resume-content"}>
                    <ResumeItem
                        year={"2017 - 2018"}
                        title={"Accenture s.r.o."}
                        sub_title={"Java/Scala Back-end API developer"}
                        text={
                            "Worked on a complex project for Carnival Corporation & plc, which is a British-American " +
                            "cruise operator, currently the world's largest travel leisure company, with a combined fleet " +
                            "of over 100 vessels across 10 cruise line brands. "
                        }
                    />
                    <ResumeItem
                        year={"2018 - 2021"}
                        title={"Backbone s.r.o."}
                        sub_title={"Python Back-end developer"}
                        text={
                            "Implemented many projects like API for electronic cashiers (AFS), loyalty system (LoyalMan), " +
                            "catering system (Foodie) for Alto s.r.o. company. darujme.sk for Centrum pre filantropiu, n.o., " +
                            "mojapeticia.sk for VIA URIS o.z., Warehouse system for Axxence Slovakia s.r.o., Crawling and " +
                            "scraping data system for Four Paws, which is animal welfare organisation and much more."
                        }
                    />
                </div>
                <div className={"sub-title"}>
                    <SubTitle icon={school_icon} title={"School"}/>
                </div>
                <div className={"resume-content"}>
                    <ResumeItem
                        year={"2007-2015"}
                        title={"Gymnasium Ladislava Novomestského Senica"}
                        sub_title={"Mathematical - Physical focus"}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac iaculis est. Aenean et " +
                            "mattis enim. Morbi leo sapien, consequat at eros id, tristique rhoncus arcu. Integer et " +
                            "justo velit. Maecenas dignissim mi ut libero venenatis, at egestas nibh tincidunt. Donec " +
                            "auctor massa eu fringilla consectetur. "
                        }
                    />
                    <ResumeItem
                        year={"2015-2019"}
                        title={"STU - Faculty of Informatics and Information Technologies"}
                        sub_title={"Bachelor's degree (Informatics)"}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac iaculis est. Aenean et " +
                            "mattis enim. Morbi leo sapien, consequat at eros id, tristique rhoncus arcu. Integer et " +
                            "justo velit. Maecenas dignissim mi ut libero venenatis, at egestas nibh tincidunt. Donec " +
                            "auctor massa eu fringilla consectetur. "
                        }
                    />
                    <ResumeItem
                        year={"2015-2019"}
                        title={"STU - Faculty of Informatics and Information Technologies"}
                        sub_title={"Engineering degree (Information security)"}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac iaculis est. Aenean et " +
                            "mattis enim. Morbi leo sapien, consequat at eros id, tristique rhoncus arcu. Integer et " +
                            "justo velit. Maecenas dignissim mi ut libero venenatis, at egestas nibh tincidunt. Donec " +
                            "auctor massa eu fringilla consectetur. "
                        }
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
  .resume-section {
    margin-top: 3rem;
    
    .sub-title {
      margin-bottom: 3rem;
    }

    .resume-content {
      &:not(:last-child) {
        margin-bottom: 5rem;
      }
      div:first-child {
        .timeline {
          margin-top: 1rem;
        }
      }
      div:last-child {
        .timeline {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

export default Resume;
