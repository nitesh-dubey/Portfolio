import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../MediaQueries';
import Colors from '../Colors';
import { graphql, useStaticQuery } from 'gatsby';

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto;
  grid-gap: 3rem;
  ${mediaMin.phone`
    grid-template-columns: auto;
  `}
  ${mediaMin.tablet`
    grid-template-columns: auto auto;
  `}
  ${mediaMin.laptop`
    grid-template-columns: auto auto auto auto;
  `}
`;

const Card = styled.div`
  width: 12rem;
  height: 16rem;
  max-width: 250px;
  background-color: ${Colors.darkGrey};
  padding: 1rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border-radius: 1rem;
  z-index: 2;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
`;

const CardTitle = styled.div`
  background-color: ${Colors.lightGrey};
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: #000;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
`;

const CardContent = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 2px;
  justify-content: space-evenly;
  .skill {
    height: ${props => (props.styles ? props.styles.height : '2.5rem')};
    width: ${props => (props.styles ? props.styles.width : '2.5rem')};
    object-fit: contain;
  }
`;

const SkillCard = props => {
  return (
    <Card>
      <CardTitle>{props.title}</CardTitle>
      <CardContent styles={props.styles}>
        {props.images.map(eachImage => {
          return (
            <img
              src={eachImage.imgdata.src}
              title={eachImage.techname}
              alt={eachImage.techname}
              // styles={props.styles}
              key={eachImage.imgdata.name}
              className="skill"
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

const SkillsGrid = props => {
  // console.log(props.data);
  let imagesData = {};

  useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(svg)|(png)/" }, relativeDirectory: { eq: "skills" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `).allFile.edges.forEach(({ node }) => {
    // console.log("Name : ", node.name, ", ", "publicURL : ", node.publicURL);
    const { name, publicURL } = node;
    imagesData[name] = { name : name, src: publicURL };
  });


  return (
    <SkillsWrapper>
      <CardsGrid>
        {props.data.map((eachCard, index) => (
          <SkillCard
            key={index}
            title={eachCard.title}
            // styles={eachCard.styles}
            images={eachCard.technologies.map(skillObj => ({techname : skillObj.name, imgdata : imagesData[skillObj.filename]}))}
          />
        ))}
      </CardsGrid>
    </SkillsWrapper>
  );
};

export default SkillsGrid;
