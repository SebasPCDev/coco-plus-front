import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-2xl font-semibold mb-4">{title}</h2>;
};

export default SectionTitle;