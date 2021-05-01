import React from "react";
import styled from "styled-components";
import {InnerLayout} from "../../styles/Layout";
import Title from "../Titles/Title";
import ReviewItem from "./ReviewItem";


function ReviewsSection() {
    return (
        <InnerLayout>
            <ReviewsStyled>
                <Title title={'Reviews'} span={'Reviews'}/>
                <div className="reviews">
                    <ReviewItem text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue.'} />
                    <ReviewItem text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue. Pellentesque ultricies interdum congue. Pellentesque ultricies interdum congue.'} />
                </div>
            </ReviewsStyled>
        </InnerLayout>
    )
}

const ReviewsStyled = styled.section`
  .reviews {
    display: flex;
    margin-top: 5rem;
  }
`;

export default ReviewsSection;
