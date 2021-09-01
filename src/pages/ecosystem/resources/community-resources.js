import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { Link } from '../../../components/default/Link';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function CommunityResources() {
  return (
    <Layout layout="sidebar">
      <SEO title="Community Resources" />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-8">Community Resources</h2>
            <p className="max-w-sm font-medium mb-16">
              An ever-Growing list of Educational resources provided by the Community
            </p>
            <h5 className="text-2xl font-semibold mb-6">List Of Resources</h5>
            <ul className="pl-8">
              <li>
                <p className="mb-0">
                  <Link to="/" className="text-substrateBlue">
                    Industry Connect/Acala
                  </Link>{' '}
                  - Developer portal
                </p>
              </li>
              <li>
                <p>
                  <Link to="/" className="text-substrateBlue">
                    BlockOne+ / Parity Asia
                  </Link>{' '}
                  - Guided exercises to get you started
                </p>
              </li>
            </ul>
          </div>
          <StaticImage
            src="../../../images/photos/ecosystem/community-resources/community-resources.jpg"
            alt="Man on computer"
            className="w-full aspect-w-1 aspect-h-1 rounded-md"
          />
        </div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;