import React from 'react';

export const Container = ({ children, className = '', ...props }) => (
  <div className={`container relative m-auto px-3 ${className}`} {...props}>
    {children}
  </div>
);
