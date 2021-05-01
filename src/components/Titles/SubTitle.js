import React from "react";
import styled from "styled-components";


function SubTitle({icon, title}) {
    return (
        <SubTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SubTitleStyled>
    )
}

const SubTitleStyled = styled.div`
  display: flex;
  align-items: center;
  
  p {
    padding-right: 1rem;
    svg {
      font-size: 2.6rem; 
    }
  }
  
  h3 {
    color: var(--white-color);
    font-size: 1.8rem;
  }
`;

export default SubTitle;
