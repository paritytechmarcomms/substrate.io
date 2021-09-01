import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Icon from '../../../components/default/Icon';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import SecondaryButton from '../../../components/ui/SecondaryButton';

export default function Jobs() {
  return (
    <Layout layout="sidebar">
      <SEO title="Jobs" />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-bold my-4">Jobs</h2>
            <p className="max-w-sm">
              Find job opportunities in the Substrate Ecosystem through DotJobs, an independent staking provider that
              operates validation software for protocols they are actively invested in and involved with.
            </p>
            <SecondaryButton link="https://dotjobs.net/">
              <p className="mb-0 mr-2 inline">Visit DotJobs</p>
              <Icon name="external-link" className="inline mb-1" />
            </SecondaryButton>
          </div>
          <StaticImage
            src="../../../images/photos/ecosystem/jobs/jobs.jpg"
            alt="Man on computer"
            className="rounded-md order-first md:order-last w-full aspect-w-1 aspect-h-1"
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