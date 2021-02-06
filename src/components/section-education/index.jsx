import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((school) => (
        <SummaryItem
          key={school.name}
          name={school.name}
          description={school.description}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
