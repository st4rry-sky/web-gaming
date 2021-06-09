import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, We are <span>temanchib gaming</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  Browse through our Video, Classic, and Progressive Slots, and
                  online Baccarats, other casino games at leisure, and find the
                  ones you love. Gaming Club’s premium software is powered by
                  renowned provider Microgaming, which means you can play with
                  total confidence and ease.
                  <br /> <br />
                  Whether you enjoy action set in the future, adventure set in
                  the past, iconic table games, or the simplicity of online
                  Scratch Cards, you are sure to find something to fit the bill.
                  A few of the top titles available for your gaming pleasure
                  include:
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="View Live Streaming" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Founder</h1>

              <AboutInfoItem
                title="Leader"
                items={['CryBaby | Deny Suryo Phanteq']}
              />
              <AboutInfoItem
                title="Member 1"
                items={['Clenzie | Rayhan Fadilah Phanteq']}
              />
              <AboutInfoItem
                title="Member 2"
                items={['Betrayal | Riolando Satria Phanteq']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Supporter</h1>

              <AboutInfoItem
                title="Leader"
                items={['Noteeight | Muffli Mulkifly Phanteq']}
              />
              <AboutInfoItem
                title="Member 1"
                items={['Mayo | Jhon Gilbert Phanteq']}
              />
              <AboutInfoItem
                title="Member 2 "
                items={['Serendity69 | Rakaoel Phanteq']}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Cheerleader</h1>

              <AboutInfoItem
                title="CWK-1"
                items={['babygurl | Nada Phanteq']}
              />
              <AboutInfoItem
                title="CWK-2"
                items={['kotaro | Wina Phanteq']}
              />
              <AboutInfoItem
                title="CWK-3"
                items={['clawy | Sella Phanteq']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
