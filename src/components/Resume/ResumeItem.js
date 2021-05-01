import React from "react";
import styled from "styled-components";


function ResumeItem({year, title, sub_title, text}) {
    return (
        <ResumeItemStyled>
            <div className={"timeline"}>
            </div>
            <div className={"left-content"}>
                <p>{year}</p>
            </div>
            <div className={"right-content"}>
                <h5>{title}</h5>
                <h6>{sub_title}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
  display: flex;
  
  .timeline {
    border-left: 2px solid var(--border-color);
  }
  
  .left-content {
    margin-top: 0.8rem;
    width: 10%;
    padding-left: 20px;
    position: relative;
    padding-bottom: 10rem;
    
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 0;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    
    p {
      display: inline-block;
    }
  }
  
  .right-content {
    position: relative;
    width: 90%;
    padding-left: 5rem;
    
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 1.5rem;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    
    h5 {
      color: var(--primary-color);
      font-size: 2.3rem;
      padding-bottom: .4rem;
    }
    h6 {
      padding-bottom: .6rem;
      font-size: 1.5rem;
    }
  }
`;

export default ResumeItem;
