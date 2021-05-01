import React from "react";
import styled from "styled-components";
import resume from '../../images/resume.jpg';
import PrimaryButton from "../PrimaryButton";


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="typography">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue.
                    Praesent a faucibus ex, sed mollis nisl. Pellentesque habitant morbi tristique senectus et malesuada
                    fames ac turpis egestas.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 24</p>
                        <p>: Slovak</p>
                        <p>: English, Slovak</p>
                        <p>: Bratislava, Slovakia</p>
                        <p>: Full-Stack Developer</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  .left-content {
    width: 80%;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .typography {
      padding: 1rem 0;
    }
    .about-info {
      padding-bottom: 1.5rem;
      display: flex;
      .info-title, .info {
        p {
          padding: .3rem 0;
        }
      }
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
    }
  }
`;

export default ImageSection;
