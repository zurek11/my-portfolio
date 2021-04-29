import React from "react";
import styled from "styled-components";


function ReviewItem({text}) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    )
}

const ReviewItemStyled = styled.section`
  padding: 2rem 1rem;
  border-left: 8px solid var(--border-color);
  background-color: var(--background-dark-color-2);
  position: relative;
  width: 50%;
  transition: all .3s ease-in-out;
  
  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:hover {
    border-left: 8px solid var(--primary-color);
    transform: translateX(5px);
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 1.5rem;
    border-width: .8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-color-2) transparent transparent var(--background-dark-color-2);
  }
  
  p {
    padding: 1rem 0;
  }
`;

export default ReviewItem;
