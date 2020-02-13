import React, { useState, useEffect } from 'react';
import { Select, Option } from 'react-a11y-select';
import { AnchorLink } from '../anchor-link';
import { Logo } from '../logo';
import { Container } from '../container';
import { setProvinceSelection, getProvinceSelection } from '../../utils';
import './index.scss';

export const NavBar = ({ className = '', onProvinceUpdated }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleFlyout = () => setMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.classList[isMenuOpen ? 'add' : 'remove']('overflow-hidden');
  }, [isMenuOpen]);

  const menuItems = [
    {
      href: '#what-we-believe',
      text: 'What We Believe',
    },
    {
      href: '#how-we-grow',
      text: 'How We Grow',
    },
    {
      href: '#latest-harvest',
      text: 'Latest Harvest',
    },
    {
      href: '#learn-more',
      text: 'Learn More',
    },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="hamburger-flyout bg-primary"
          style={{
            height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 12,
            paddingTop: 140,
          }}
        >
          <ul className="flex flex-col text-center h-full">
            {menuItems.map(({ href, text }) => (
              <li key={href} className="hamburger-flyout__li inline-block">
                <AnchorLink
                  href={href}
                  className="text-light hover:text-white"
                  onClick={() => toggleFlyout()}
                >
                  {text}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <header
        className={`navbar bg-primary w-full ${className} sticky top-0 left-0 z-20 flex align-center`}
        style={{ height: '70px', zIndex: 13 }}
      >
        <Container className="flex justify-between">
          <a
            href="/"
            className="simply-bare-logo text-light hover:text-white w-16 flex flex-col justify-center"
          >
            <Logo style={{ width: '61px', height: '42px' }} />
          </a>
          <div className="flex">
            <ul className="items-center hidden md:flex">
              {menuItems.map(({ href, text }) => (
                <li key={href} className="navbar__li inline-block">
                  <AnchorLink href={href} className="navbar__link text-light hover:text-white">
                    {text}
                  </AnchorLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              {!isMenuOpen && (
                <div className="inline-flex items-center">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="text-light" htmlFor="navbar-province">
                    Province:
                  </label>
                  <Select
                    buttonId="navbar-province"
                    placeholderText=""
                    onChange={province => {
                      setProvinceSelection(province);
                      onProvinceUpdated(province);
                    }}
                    label="Province"
                    initialValue={getProvinceSelection()}
                  >
                    <Option value="AB">AB</Option>
                    <Option value="BC">BC</Option>
                    <Option value="MB">MB</Option>
                    <Option value="NB">NB</Option>
                    <Option value="NL">NL</Option>
                    <Option value="NT">NT</Option>
                    <Option value="NS">NS</Option>
                    <Option value="NU">NU</Option>
                    <Option value="ON">ON</Option>
                    <Option value="PE">PE</Option>
                    <Option value="QC">QC</Option>
                    <Option value="SK">SK</Option>
                    <Option value="YT">YT</Option>
                  </Select>
                </div>
              )}
              <button
                onClick={() => toggleFlyout()}
                className="hamburger block md:hidden inline"
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
              >
                <span
                  className={`hamburger-box hamburger--spring ${isMenuOpen ? 'is-active' : ''}`}
                >
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
