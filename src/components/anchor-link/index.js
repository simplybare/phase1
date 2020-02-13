import React, { useCallback } from 'react';

// Like a regular anchor link, but smoothly scrolls
export const AnchorLink = ({ className = '', ...props }) => {
  // When the link is clicked, scroll down to the anchor
  const handleClick = useCallback(e => {
    e.preventDefault();
    const { href } = props;
    const normalizedAnchorName = href.substr(1);
    const anchorElement = document.querySelector(`a[name=${normalizedAnchorName}]`);
    const offsetTop = anchorElement.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  });

  const { children } = props;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <a className={`${className}`} onClick={handleClick} {...props}>
        {children}
      </a>
    </>
  );
};
