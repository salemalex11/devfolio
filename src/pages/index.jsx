import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionEducation from '../components/section-education';
import SectionSkills from '../components/section-skills';
import SectionProjects from '../components/section-projects';

import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const skills = get(data, 'site.siteMetadata.skills', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {education && education.length && <SectionEducation education={education} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      
      
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        experience {
          name
          description
          link
        }
        education {
          name
          description
        }
        skills {
          name
          description
        }
        projects {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
