import React from 'react';
import { FvopaLogo, RubiconLogo, InstagramIcon, TwitterIcon } from '../logo';
import { Container } from '../container';
import './index.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-light w-full">
      <Container className="flex flex-col md:flex-row justify-between">
        <div className="footer-section py-6 md:py-12 border-light mx-0">
          <span className="text-2xl">Follow Simply Bare</span>
          <ul className="list-reset mt-3">
            <li className="inline-block">
              <a
                className="hover:text-white"
                href="https://www.instagram.com/simplybareorganic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ width: '22px', height: '22px' }} />
              </a>
            </li>
            <li className="inline-block ml-5">
              <a
                className="hover:text-white"
                href="https://twitter.com/simplybareorgnc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={{ width: '22px', height: '22px' }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section hidden md:block py-6 md:py-12 border-light mx-0">
          <FvopaLogo
            style={{ width: '70px', height: '53px' }}
            className="text-light md:mb-6 md:ml-6"
          />
        </div>
        <div className="footer-section hidden md:block py-6 md:py-12 border-light mx-0">
          <a
            href="https://www.rubiconorganics.com/"
            className="text-light hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RubiconLogo style={{ width: '96px', height: '37px' }} className="mb-6" />
          </a>
        </div>
        <div className="footer-section block md:hidden flex justify-between py-6 md:py-12 border-light mx-0">
          <div className="flex-1">
            <FvopaLogo
              style={{ width: '70px', height: '53px' }}
              className="md:mb-6 md:ml-6 text-light"
            />
          </div>
          <a
            href="https://www.rubiconorganics.com/"
            className="text-light hover:text-white flex-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RubiconLogo style={{ width: '96px', height: '37px' }} className="mb-6" />
          </a>
        </div>
        <ul className="list-reset footer-section py-6 md:py-12 mx-0">
          <li>
            <a
              className="hover:text-white text-xs"
              href="https://www.rubiconorganics.com/terms-of-use/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              className="hover:text-white text-xs"
              href="https://www.rubiconorganics.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="hover:text-white text-xs"
              href="https://www.rubiconorganics.com/job-openings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </a>
          </li>
          <li>
            <span className="text-xs">&copy; Copyright {currentYear}</span>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
