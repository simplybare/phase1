import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.scss';

export const Markdown = ({ source, className = '' }) => (
  <ReactMarkdown className={`markdown ${className}`} source={source} />
);
