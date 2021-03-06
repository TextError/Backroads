import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import StyledHero from "../components/common/styledHero/Styled_Hero";
import Contact from '../components/contact_page/Contact';

const contact = ({ data: { contactImage: { childImageSharp: { fluid } } } }) => {
  return (
    <Layout>
      <StyledHero img={fluid} />
      <Contact />
    </Layout>
  )
}

export default contact;

export const query = graphql`
  query {
    contactImage: file(relativePath:{eq:"connectBcg.jpeg"}) {
      childImageSharp{
        fluid(quality:90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`