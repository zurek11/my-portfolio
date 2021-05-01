import React from "react";
import styled from "styled-components";
import {InnerLayout} from "../../styles/Layout";
import Title from "../Titles/Title";
import ProgressBar from "./ProgressBar";


function Skills() {
    return (
        <SkillsStyled>
            <Title title={"My Skills"} span={"My Skills"}/>
            <InnerLayout>
                <div className={"skills"}>
                    <ProgressBar
                        title={"HTML5"}
                        width={"70%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"CSS3"}
                        width={"90%"}
                        text={"90%"}
                    />
                    <ProgressBar
                        title={"HTML5"}
                        width={"70%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"JavaScript"}
                        width={"85%"}
                        text={"85%"}
                    />
                    <ProgressBar
                        title={"Python"}
                        width={"95%"}
                        text={"95%"}
                    />
                    <ProgressBar
                        title={"PostgreSQL"}
                        width={"70%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"Django"}
                        width={"95%"}
                        text={"95%"}
                    />
                    <ProgressBar
                        title={"React JS"}
                        width={"50%"}
                        text={"50%"}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
  .skills {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`;

export default Skills;
