import { graphql } from 'gatsby';
import React from 'react';

import HackathonCard from '../../../components/layout/ecosystem/HackathonCard';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import { useHackathons } from '../../../hooks/use-hackathons';

export default function Hackathons() {
  const { hackathons } = useHackathons();

  const upcoming = [];
  const past = [];

  hackathons.forEach(hackathon => {
    if (new Date(hackathon.node.frontmatter.date_end) >= new Date()) {
      upcoming.push(hackathon);
    } else {
      past.push(hackathon);
    }
  });

  return (
    <Layout layout="sidebar">
      <SEO title="Hackathons" />
      <Section>
        <h2 className="text-4xl font-bold mb-4">Hackathons</h2>
        <p>
          Challenge yourself, up your game, and connect with the commmunity. There are great prizes up for grabs, too.
        </p>
        {upcoming.length > 0 && (
          <div className="mb-16">
            <h3 className="font-medium text-2xl mb-8 mt-10">Upcoming events:</h3>
            {upcoming.map((hackathon, idx) => (
              <HackathonCard key={idx} hackathon={hackathon} />
            ))}
          </div>
        )}
        {past.length > 0 && (
          <>
            <h3 className="font-medium text-2xl mb-8 mt-10">Past events:</h3>
            {past.map((hackathon, idx) => (
              <HackathonCard key={idx} hackathon={hackathon} />
            ))}
          </>
        )}
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
