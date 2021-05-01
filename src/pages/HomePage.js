import React from "react";
import styled from "styled-components";
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import Particle from "../components/Home/Particles";

function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <div className="particle-con">
                    <Particle />
                </div>
                <div className="typography">
                    <h1>Hi I'm <span>Adam Žúrek</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies interdum congue.
                        Praesent a faucibus ex, sed mollis nisl. Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas.
                    </p>
                    <div className="icons">
                        <a href="https://github.com/zurek11" className="icon i-github">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/adam-%C5%BE%C3%BArek-46a6a5156/" className="icon i-linkedin">
                            <LinkedinIcon />
                        </a>
                        <a href="https://www.instagram.com/zurek_28/" className="icon i-instagram">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.facebook.com/adam.zurek.758" className="icon i-facebook">
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 60%;
    
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      
      .icon {
        border: 2px solid var(--border-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        
        svg {
          margin: .5rem;
        }
      }
    }
  }
`;

export default HomePage;
