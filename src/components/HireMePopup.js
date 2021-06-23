import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import * as t from '../Typography';
import Colors from '../Colors';
import LN from '../images/ln.png';
import Github from '../images/github_full.png';
import Gmail from '../images/gmail.png';
// import Gitlab from '../images/gitlab.png';
import Close from '../images/close-popup-grey.png';
import { media } from '../MediaQueries';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const HireMePopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Colors.white};
  z-index: 1000;
  display: flex;
  flex-direction: row;
  ${props =>
    props.open === false &&
    `
    display: none;
  `}
  ${media.tablet`
    flex-direction: column;
    overflow-y: auto;
  `};
`;

const Link = styled.a`
  font-size: 18px;
  padding: 16px 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    display: block;
    padding: 0;
    margin: 0 30px;
  `};
`;

const Burger = styled.div`
  width: 22px;
  height: 22px;
  align-self: center;
  position: absolute;
  right: 25px;
  top: 25px;
  color: ${Colors.closeIcon};
  z-index: 2;
  color: ${props => props.scrolled && Colors.darkest};
  &:hover {
    ${props => (props.scrolled || props.theme === 'white' ? lighten(0.3, Colors.darkest) : darken(0.1, Colors.white))};
    cursor: pointer;
    opacity: 0.9;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

class HireMePopup extends React.Component {
  closePopup = e => {
    this.props.handleClose(false);
  };

  render() {
    const { open } = this.props;
    const overflow = open ? 'hidden' : 'auto';

    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                links {
                  personal {
                    github
                    gmail
                    linkedin
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <HireMePopupWrapper open={open}>
            <Helmet>
              <body style={{ overflow: overflow }} />
            </Helmet>
            <ContentWrapper>
              <Burger onClick={this.closePopup}>
                <img alt="Close popup" src={Close} />
              </Burger>
              <t.H3 style={{ color: Colors.purple }}>Contact me on</t.H3>
              <Link primary bold target="_blank" href={data.site.siteMetadata.links.personal.gmail} rel="noreferrer">
                <img src={Gmail} alt="My gmail" height="32em" />
              </Link>
              <Link primary bold target="_blank" href={data.site.siteMetadata.links.personal.linkedin} rel="noreferrer">
                <img src={LN} alt="My Linkedin profile" height="35em" />
              </Link>
              <Link primary bold target="_blank" href={data.site.siteMetadata.links.personal.github} rel="noreferrer">
                <img src={Github} alt="My Github profile" height="60em" />
              </Link>
            </ContentWrapper>
          </HireMePopupWrapper>
        )}
      />
    );
  }
}

export default HireMePopup;
