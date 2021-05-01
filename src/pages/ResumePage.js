import React from "react";
import styled from "styled-components";

import Skills from "../components/Resume/Skills";
import Resume from "../components/Resume/Resume";
import {MainLayout} from "../styles/Layout";


function ResumePage() {
    return (
        <MainLayout>
            <Skills/>
            <Resume/>
        </MainLayout>
    )
}

export default ResumePage;
