import React from 'react';
import './index.scss';

export const PageSection = ({ children, className = '', ...props }) => (
  <section className={`page-section flex ${className}`} {...props}>
    {children}
  </section>
);

export const SectionHeader = ({
  children,
  anchor,
  anchorPosition = 'bottom',
  className = '',
  subtitle,
  ...props
}) => {
  return (
    <>
      {subtitle && <h2 className="subtitle font-body font-semibold uppercase">{subtitle}</h2>}
      <h3
        className={`section-header leading-none md:text-6xl text-left mb-5 ${className}`}
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
        {anchor && anchorPosition === 'top' && <a name={anchor} />}
        {children}
      </h3>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
      {anchor && anchorPosition === 'bottom' && <a name={anchor} />}
    </>
  );
};
