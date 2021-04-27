import React from "react";
import avatar from '../media/avatar.jpg'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="avatar"/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active-class" exact>
                        About
                    </NavLink>
                    <NavLink to="/resume" activeClassName="active-class" exact>
                        Resume
                    </NavLink>
                    <NavLink to="/portfolio" activeClassName="active-class" exact>
                        Portfolio
                    </NavLink>
                    <NavLink to="/blog" activeClassName="active-class" exact>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active-class" exact>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>
                    @2021 Adam Žúrek
                </p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--primary-color);
        }
        &:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, .25, .95);
          opacity: 0.21;
        }
      }
      
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  
  footer {
    width: 100%;
    border-top: 1px solid var(--border-color);
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
