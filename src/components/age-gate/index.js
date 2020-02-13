import React, { useState, useLayoutEffect } from 'react';
import trapHOC from '@10up/react-focus-trap-hoc';
import { Select, Option } from 'react-a11y-select';
import { isAgeMoreThanN } from '../../utils/date';
import {
  validateYear,
  validateMonth,
  validateDay,
  validateProvince,
  getRequiredAgeByProvince,
} from '../../utils/age-gate';
import { LogoBar } from '../logo';
import { Footer } from '../footer';
import './index.scss';
import 'react-a11y-select/src/styles.css';

const _AgeGate = ({ onValidate, activateTrap, deactivateTrap }) => {
  const [invalidAge, setInvalidAge] = useState(false);
  const [formError, setFormError] = useState(null);
  const [province, setProvince] = useState('');

  const enter = e => {
    e.preventDefault();

    const year = document.querySelector('input[name=year]').value;
    const month = document.querySelector('input[name=month]').value;
    const day = document.querySelector('input[name=day]').value;

    const error =
      validateMonth(month) || validateDay(day) || validateYear(year) || validateProvince(province);
    if (error) {
      setFormError(error);
      return;
    }

    const requiredAge = getRequiredAgeByProvince(province);

    if (isAgeMoreThanN(year, month, day, requiredAge)) {
      onValidate(province);
    } else {
      setInvalidAge(true);
    }
  };

  useLayoutEffect(() => {
    activateTrap();

    // Get all inputs on the page
    const allInputs = document.querySelectorAll('input[type=text],.ReactA11ySelect__button');

    // TODO: Clean up these event listeners
    allInputs.forEach((input, i) => {
      if (input.tagName === 'INPUT') {
        input.addEventListener('keyup', e => {
          if (
            Number(e.key) >= 0 &&
            Number(e.key) <= 9 &&
            e.target.value.length === e.target.maxLength
          ) {
            allInputs[i + 1].focus();
          }
        });
      }
    });

    return () => {
      deactivateTrap();
    };
  }, []);

  return (
    <dialog className="bg-primary border-0 flex flex-col z-10 absolute top-0 left-0 bottom-0 w-full items-center justify-between p-0 overflow-scroll min-h-screen m-0">
      <LogoBar />
      <section className="text-center flex flex-1 flex-col items-center container px-3 md:px-0">
        <h1 className="text-light font-display text-5xl md:text-6xl leading-none mb-5">
          {!invalidAge ? 'Ready to go bare?' : 'Too soon to go bare.'}
        </h1>
        <h2 className="text-light font-display text-lg md:text-2xl w-full md:w-3/4 lg:w-1/2">
          {!invalidAge
            ? 'First, we just need to verify your age.'
            : 'Unfortunately, you need to be the age of majority in your province to enter this website.'}
        </h2>
        {invalidAge && <div className="block mb-24" />}
        {!invalidAge && (
          <form
            className="w-full age-gate-form flex flex-col mt-5 flex-shrink-0"
            onSubmit={enter}
            autoComplete="off"
            noValidate
          >
            <div className="birthdate-row flex flex-1">
              <input
                className="focus:border-white rounded-none outline-none text-lg min-w-0 p-2 m-2 font-display placeholder-light text-light border-2 text-center border-light bg-primary flex-1 uppercase"
                type="text"
                name="month"
                id="age-gate-month"
                placeholder="MM"
                maxLength="2"
                data-lpignore="true"
                pattern="\d{2}"
                required
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="sr-only" htmlFor="age-gate-month">
                Date of birth: Month (MM)
              </label>
              <input
                className="focus:border-white rounded-none outline-none text-lg min-w-0 p-2 m-2 font-display placeholder-light text-light border-2 text-center border-light bg-primary flex-1 uppercase"
                type="text"
                name="day"
                id="age-gate-day"
                placeholder="DD"
                maxLength="2"
                data-lpignore="true"
                pattern="\d{2}"
                required
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="sr-only" htmlFor="age-gate-day">
                Date of birth: Day (DD)
              </label>
              <input
                className="focus:border-white rounded-none outline-none text-lg min-w-0 p-2 m-2 font-display placeholder-light text-light border-2 text-center border-light bg-primary flex-1 uppercase"
                type="text"
                name="year"
                id="age-gate-year"
                placeholder="YYYY"
                maxLength="4"
                data-lpignore="true"
                pattern="\d{4}"
                required
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="sr-only" htmlFor="age-gate-year">
                Date of birth: Year (YYYY)
              </label>
            </div>
            <Select
              buttonId="age-gate-province"
              placeholderText="Province"
              onChange={setProvince}
              label="Province"
            >
              <Option value="AB">Alberta</Option>
              <Option value="BC">British Columbia</Option>
              <Option value="MB">Manitoba</Option>
              <Option value="NB">New Brunswick</Option>
              <Option value="NL">Newfoundland</Option>
              <Option value="NT">Northwest Territories</Option>
              <Option value="NS">Nova Scotia</Option>
              <Option value="NU">Nunavut</Option>
              <Option value="ON">Ontario</Option>
              <Option value="PE">Prince Edward Island</Option>
              <Option value="QC">Quebec</Option>
              <Option value="SK">Saskatchewan</Option>
              <Option value="YT">Yukon</Option>
            </Select>
            <p className="text-center text-brown">{formError}</p>
            <button
              type="submit"
              className="hover:bg-white focus:bg-white border-none outline-none m-auto w-40 p-3 text-primary font-display bg-light uppercase mt-10"
            >
              Submit
            </button>
            <p className="text-center text-light mt-10 font-display text-sm mb-10">
              By entering SimplyBare.com you confirm you are of legal cannabis consumption age in
              your province of residence and accept our{' '}
              <a
                href="https://www.rubiconorganics.com/privacy-policy/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://www.rubiconorganics.com/terms-of-use/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
              .
            </p>
          </form>
        )}
      </section>
      {invalidAge ? <Footer /> : <div className="flex-1" />}
    </dialog>
  );
};

export const AgeGate = trapHOC()(_AgeGate);
