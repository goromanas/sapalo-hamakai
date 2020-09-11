import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Section from "../Section/section"
import OrderButton from "../OrderButton/orderButton"

import aboutStyles from './about.module.scss';

const About = () => {
  const data = useStaticQuery(graphql`
  {
    allWordpressPage(filter: {title: {eq: "Apie"}}) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
  `);

  return (
    <Section color='about' >
      <div className={aboutStyles.about} dangerouslySetInnerHTML={{ __html: data.allWordpressPage.edges[0].node.content }} />
      <OrderButton style="thin" />
    </Section>
  )
}

export default About