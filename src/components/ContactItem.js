import styled from "styled-components";


function ContactItem({icon, title, contact_items}) {
    const formatted_items = []

    for (const [index, value] of contact_items.entries()) {
        formatted_items.push(<p key={index}>{value}</p>)
    }

    return (
        <ContactItemStyled>
            <div className={"item-left-content"}>
                {icon}
            </div>
            <div className={"item-right-content"}>
                <h6>{title}</h6>
                {formatted_items}
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-color-2);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  
  .item-left-content {
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }
  
  .item-right-content {
    margin-top: 0;
    
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: .6rem;
    }
    p {
      padding: .1rem 0;
    }
  }
`;

export default ContactItem;
