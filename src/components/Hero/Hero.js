import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Section from "../Section/section"
import ArrowDown from "../ArrowDown/arrowDown";

import heroStyles from './hero.module.scss';

const Hero = () => {
  const data = useStaticQuery(graphql`
  {
    allWordpressPage(filter: {title: {eq: "Pradinis"}}) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`);
  console.log(data);
  return (
    <>
      <Section color='hero'>
        <div dangerouslySetInnerHTML={{ __html: data.allWordpressPage.edges[0].node.content }} />
      </Section>
      <ArrowDown className={heroStyles.heroArrow} />
    </>
  )

}

export default Hero