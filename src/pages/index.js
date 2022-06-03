import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Placeholder from '../images/placeholder.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken, padding } from 'polished';
import Resume from '../pdf/Nitesh_Resume.pdf';
import SkillGrid from '../components/SkillGrid';

import Intown from '../images/intown.jpg';
import Vient from '../images/vient.jpg';
import PropertyManagement from '../images/property.jpg';
import MazeGame from '../images/mazeGame.jpg';
import ImageCaptioning from '../images/imageCaptioning.jpg';
import TextSummarization from '../images/textSummarization.jpg';
import FitnessBook from '../images/fitnessbook.jpg';
import Splash from '../images/splash.png';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: none;
    background-color: ${Colors.white};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: ${props => (props.type === 'mobile' ? '80%' : '200%')};
  height: ${props => (props.type === 'mobile' ? '80%' : '200%')};
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

const EmptySpace = ({ emptyspace }) => {
  return (
    <div
      style={{
        marginTop: emptyspace ? emptyspace : '5rem'
      }}
    />
  );
};

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    const { links, skills } = data.Site.siteMetadata;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Nitesh Dubey" className="avatar" />
            <t.H1 primary align="center">
              Nitesh Dubey
            </t.H1>
            <t.LargeP align="center" max45>
              <b>Hi, I'm Nitesh</b>, welcome to my website. I'm working as a <strong>Member of Technical Staff</strong>{' '}
              at <strong>DevRev Inc. </strong>
              I'm an avid learner and have worked with Fullstack Development, Mobile Development and Machine Learning.
              I'm a <strong>2022</strong> Computer Science grad From{' '}
              <strong>Indian Institute of Information Technology Guwahati</strong>.
            </t.LargeP>
            {/* <HireMe large onClick={this.openContactPopup} book>
              <a href={Resume} download>Download Resume</a>
            </HireMe> */}
            <a href={Resume} target="_blank">
              <HireMe large book>
                My Resume
              </HireMe>
            </a>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Experience
            </t.H2>

            {/* First Job */}

            <div>
              <t.LargeP bold style={{ color: Colors.darkest, marginBottom: 0, fontSize: '1.5em' }}>
                Member of Technical Staff
              </t.LargeP>

              <t.P style={{ color: Colors.lightWhite }}>
                <LinkButton
                  primary
                  className="link"
                  as="a"
                  target="_blank"
                  href={links.legato.url}
                  space
                  rel="noreferrer"
                >
                  <strong style={{ fontSize: '1.3em' }}>DevRev Inc.</strong>
                </LinkButton>
                - <em style={{ color: 'grey' }}>Dec'21 to present</em>
              </t.P>

              <t.P style={{ color: Colors.lightWhite, fontSize: '1.2em' }}>
                <ul>
                  <li>Developed UI of Issue and Ticket Management Quadrant of DevRev, in a team of 8 people.</li>
                  <li>Fix and improve End to End test and unit test coverage in DevRev web app</li>
                  <li>
                    Implemented Product Analytics inside DevRev, with Segment and Heap Analytics to facilitate product
                    decisions, and usage analysis
                  </li>
                  <li>
                    Collaborated with UX and Backend team, in the development of various new feature and bug fixes in
                    the webapp
                  </li>
                </ul>
              </t.P>
            </div>

            <EmptySpace />

            {/* Second Interns */}
            <div>
              <t.LargeP bold style={{ color: Colors.darkest, marginBottom: 0, fontSize: '1.5em' }}>
                Software Engineer Intern
              </t.LargeP>

              <t.P style={{ color: Colors.lightWhite }}>
                <LinkButton
                  primary
                  className="link"
                  as="a"
                  target="_blank"
                  href={links.legato.url}
                  space
                  rel="noreferrer"
                >
                  <strong style={{ fontSize: '1.3em' }}>Legato Health Technologies ( Anthem Inc. )</strong>
                </LinkButton>
                - <em style={{ color: 'grey' }}>May'21 to July'21</em>
              </t.P>

              <t.P style={{ color: Colors.lightWhite, fontSize: '1.2em' }}>
                <ul>
                  <li>
                    Anthem sends important emails to a large number of their customers, but some of those emails don't
                    get delivered, so they ring the call centres, and increase load.
                  </li>
                  <li>
                    So, I was tasked to make a System which can track and store the emails in a database, which bounce
                    back and don't get delivered to the recipients.
                  </li>
                  <li>I developed the backend of the system using AWS SES, AWS SNS, AWS SQS, AWS Lambda and MongoDB</li>
                  <li>
                    I also developed an Email client GUI for sending email, and receiving bounce emails using Nodejs,
                    Reactjs and MaterialUI
                  </li>
                </ul>
              </t.P>
            </div>

            <EmptySpace />

            {/* First Intern */}
            <div>
              <t.LargeP bold style={{ color: Colors.darkest, marginBottom: 0, fontSize: '1.5em' }}>
                Software Engineer Intern
              </t.LargeP>

              <t.P style={{ color: Colors.lightWhite }}>
                <LinkButton
                  primary
                  className="link"
                  as="a"
                  target="_blank"
                  // href={links.legato.url}
                  space
                  rel="noreferrer"
                >
                  <strong style={{ fontSize: '1.3em' }}>Wonderquill Business Solutions</strong>
                </LinkButton>
                - <em style={{ color: 'grey' }}>May'20 to July'20</em>
              </t.P>

              <t.P style={{ color: Colors.lightWhite, fontSize: '1.2em' }}>
                <ul>
                  <li>
                    Worked on Developing the Frontend of a web platform where users can write and share their stories,
                    tales and poems.
                  </li>
                  <li>
                    Added a Markdown editor functionality to the website, where the users can write text, and
                    implemented autosave feature using HTML5 localstorage
                  </li>
                  <li>Used GraphQL APIs to sync the user data to the server.</li>
                </ul>
              </t.P>
            </div>

            <EmptySpace emptyspace="2rem" />
            <Content>
              <DivWrapper>
                <t.H2 primary align="center" bold>
                  SKILLS
                </t.H2>
                <EmptySpace emptyspace="3rem" />
                <SkillGrid data={skills} />
                {/* {console.log(skills)} */}
              </DivWrapper>
            </Content>

            <t.H2 primary align="center" bold className="portfolio">
              Projects
            </t.H2>
          </Content>

          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Splash - Image Search</t.H2>
                <t.LargeP>
                  Splash is a fully responsive Image Search Website, where users can search for images by entering
                  related tags in the search bar. They can log into the website and can also upload their own images to
                  the website, which will automatically be tagged. The Image Autotagging will be handled by my ML model.
                  <EmptySpace emptyspace="1rem" />
                  If the user uploads images to the website, it will run this model on the image. The model will predict
                  and rank both seen and unseen tags (not limited to training set) on the image. It’ll keep increasing
                  its tags vocabulary with the user suggested tags. I built this model by implementing Fast Zero shot
                  Image Tagging research paper.
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong>{' '}
                  <span color="gray">Nextjs, Nodejs, Chakra-ui, MongoDB, Keras, Tensorflow, Python</span>
                </t.LargeP>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  style={{ paddingRight: 8 }}
                  href={links.projects.splash.github}
                >
                  Code
                </LinkButton>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  style={{ paddingLeft: 8 }}
                  href={links.projects.splash.website}
                >
                  Website
                </LinkButton>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  style={{ paddingLeft: 8 }}
                  href={links.projects.splash.ml_model}
                >
                  Machine Learning Model
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Splash} type="mobile" alt="Vient" />
              </DivWrapper>
            </BlockContent>
          </Block>

          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Intown} type="mobile" alt="Intown" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Intown - Events Near You</t.H2>
                <t.LargeP>
                  It is a mobile app made using react native, which shows local events happening around user's location.
                  The users can become event hosts and create new events or can register, like and attend the events
                  around them.
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong>{' '}
                  <span color="gray">
                    React Native, React Navigation, React Native Elements, Firestore, Firebase Auth, Geolocation
                    Service.
                  </span>
                </t.LargeP>
                <LinkButton primary bold className="link" as="a" target="_blank" href={links.projects.intown.github}>
                  Code and Demo
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>

          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Vient - Tiktok UI</t.H2>
                <t.LargeP>
                  It is the frontend of a social media app (like tiktok) built with React Native, where users have their
                  own profiles, they can record and share short videos with the community, follow people, chat with
                  them, search the app for more videos and much more
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong>{' '}
                  <span color="gray">React Native, React Native Element, React Navigation, Expo.</span>
                </t.LargeP>
                <LinkButton primary bold className="link" as="a" target="_blank" href={links.projects.vient.github}>
                  Code and Demo
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Vient} type="mobile" alt="Vient" />
              </DivWrapper>
            </BlockContent>
          </Block>

          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={PropertyManagement} type="web" alt="Property Management" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Property Management</t.H2>
                <t.LargeP>
                  It is the university DBMS group Project in which a website was made for a real estate company to sell
                  / rent properties, with interfaces for both agents and their manager. I worked on making the interface
                  of the agent, where he can sell or rent the property to the customer.
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong>{' '}
                  <span color="gray">MYSQL, Nodejs, HTML, CSS, Javascript, Python.</span>
                </t.LargeP>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href={links.projects.propertyManagement.github}
                >
                  Code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>

          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Maze Game</t.H2>
                <t.LargeP>
                  It is a game I built, using Reactjs and{' '}
                  <i>
                    <strong>Hunt and Kill</strong>
                  </i>{' '}
                  Maze Generation Algorithm. In the game, the player has to collect all the points in the{' '}
                  <i>
                    <strong>n x n</strong>
                  </i>{' '}
                  Maze in shortest time possible.
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong> <span color="gray">Javascript, Reactjs.</span>
                </t.LargeP>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  style={{ paddingRight: 8 }}
                  href={links.projects.mazeGame.github}
                >
                  Code
                </LinkButton>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  style={{ paddingLeft: 8 }}
                  href={links.projects.mazeGame.demo}
                >
                  Demo
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={MazeGame} type="web" alt="Maze Game" />
              </DivWrapper>
            </BlockContent>
          </Block>

          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={ImageCaptioning} type="web" alt="Image Captioning" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Image Captioning</t.H2>
                <t.LargeP>
                  Its a Deep Learning network, trained on{' '}
                  <i>
                    <strong>Flickr 8k</strong>
                  </i>{' '}
                  dataset to predict suitable image captions for an input image. Merge architecture was used for
                  training image captioning network and beam search decoder was used for inference. I had used
                  Pre-trained weights of Inception model and Glove 200d word embedding to extract image features from
                  the input image and word relations from the text captions respectively.
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong> <span color="gray">Python, Keras, Deep Learning</span>
                </t.LargeP>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href={links.projects.imageCaptioning.github}
                >
                  Code and Demo
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>

          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Text Summarization</t.H2>
                <t.LargeP>
                  It is a Text Summarization network trained on{' '}
                  <i>
                    <strong>Amazon Fine Food Reviews</strong>
                  </i>{' '}
                  Dataset, which predicts suitable summary for the reviews of customers on food products. The network
                  was trained using seq2seq architecture, with BI-LSTM encoder and LSTM decoder along with Attention
                  Mechanism..
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong> <span color="gray">Python, Keras, Deep Learning</span>
                </t.LargeP>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href={links.projects.textSummarization.github}
                >
                  Code and Demo
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={TextSummarization} type="web" alt="Text Summarization" />
              </DivWrapper>
            </BlockContent>
          </Block>

          {/* <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={TextSummarization} type="web" alt="Text Summarization" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Text Summarization</t.H2>
                <t.P>Lorem ipsum</t.P>
                <t.P>Dolor sit amet</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="#">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block> */}
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={FitnessBook} type="mobile" alt="Fitnessbook" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Fitnessbook</t.H2>
                <t.LargeP>
                  Its a simple fitness app, made in a Hackathon, which contains step detector/Pedometer, keeps record of
                  distance run by the user, and provides health related articles.
                </t.LargeP>
                <t.LargeP>
                  <strong>Tech stack used :</strong> <span color="gray">Java, Android Studio</span>
                </t.LargeP>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href={links.projects.fitnessbook.github}
                >
                  Code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Fancy working with me? Contact me for more info! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
    Site: site {
      siteMetadata {
        links {
          legato {
            url
          }
          projects {
            splash {
              github
              website
              ml_model
            }
            intown {
              github
            }
            vient {
              github
            }
            propertyManagement {
              github
            }
            mazeGame {
              github
              demo
            }
            imageCaptioning {
              github
            }
            textSummarization {
              github
            }
            fitnessbook {
              github
            }
          }
        }
        skills {
          title
          technologies {
            name
            filename
          }
        }
      }
    }
  }
`;
