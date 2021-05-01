import React from "react";
import styled from "styled-components";

import {MainLayout, InnerLayout} from "../styles/Layout";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationIcon from '@material-ui/icons/LocationOn'
import ContactItem from "../components/ContactItem";


function ContactPage() {
    const phone = <PhoneIcon/>
    const email = <EmailIcon/>
    const location = <LocationIcon/>

    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactStyledPage>
                <InnerLayout className={"contact-section"}>
                    <div className={"left-content"}>
                        <div className={"contact-title"}>
                            <h4>Get In Touch</h4>
                        </div>
                        <form className={"form"}>
                            <div className={"form-field"}>
                                <label htmlFor={"name"}>Enter your name*</label>
                                <input type={"text"} id={"name"}/>
                            </div>
                            <div className={"form-field"}>
                                <label htmlFor={"email"}>Enter your email*</label>
                                <input type={"text"} id={"email"}/>
                            </div>
                            <div className={"form-field"}>
                                <label htmlFor={"subject"}>Enter email subject*</label>
                                <input type={"text"} id={"subject"}/>
                            </div>
                            <div className={"form-field"}>
                                <label htmlFor={"text-area"}>Enter email message*</label>
                                <textarea name={"textarea"} id={"textarea"} cols="30" rows="10"/>
                            </div>
                            <div className={"form-field"}>
                                <PrimaryButton title={"Send email"}/>
                            </div>
                        </form>
                    </div>
                    <div className={"right-content"}>
                        <ContactItem
                            icon={phone}
                            title={"Phone"}
                            contact_items={["+421 915 485 478"]}
                        />
                        <ContactItem
                            icon={email}
                            title={"Email"}
                            contact_items={["adamzurek14@gmail.com"]}
                        />
                        <ContactItem
                            icon={location}
                            title={"Address"}
                            contact_items={["Kruhy 5005/5", "90501 Senica", "Slovakia"]}
                        />
                    </div>
                </InnerLayout>
            </ContactStyledPage>
        </MainLayout>
    )
}

const ContactStyledPage = styled.section`
  margin-top: 3rem;
  
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    
    .right-content {
      margin-top: 6.5rem;
      display: flex;
      flex-direction: column;
    }
    
    .left-content {
      .contact-title {
        h4 {
          color: var(--white-color);
          padding: 1rem 0;
          font-size: 1.8rem;
        }
      }

      .form {
        width: 100%;

        .form-field {
          width: 100%;
          margin-top: 2rem;
          position: relative;

          label {
            position: absolute;
            left: 20px;
            top: -13px;
            display: inline-block;
            background-color: var(--background-dark-color);
            padding: 0 .5rem;
            color: inherit;
          }

          input {
            width: 100%;
            border: 1px solid var(--border-color);
            outline: none;
            background: transparent;
            height: 50px;
            padding: 0 15px;
            color: inherit;
          }

          textarea {
            width: 100%;
            background-color: transparent;
            border: 1px solid var(--border-color);
            outline: none;
            color: inherit;
            padding: .8rem 1rem;
          }
        }
      }
    }
  }
`;

export default ContactPage;
