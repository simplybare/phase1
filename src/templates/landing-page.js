import React, { useState, useLayoutEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useScript } from 'use-script';
import {
  PageSection,
  NavBar,
  SectionHeader,
  LivingSoilIcon,
  OrganicNutrientsIcon,
  SlowCuredIcon,
  FullFlavourIcon,
  Container,
} from '../components';
import Layout from '../components/layout';

import './landing-page.scss';
import { ProductCarousel } from '../components/product-carousel';
import { PROVINCES_AVAILABLE, getProvinceSelection } from '../utils';

const EmailCapture = () => {
  const [loading, error] = useScript({
    src: '//js.hsforms.net/forms/shell.js',
  });

  useLayoutEffect(() => {
    // Return if not loaded yet
    if (loading || error) {
      return;
    }
    // Return if email capture form already loaded
    if (document.querySelector('#email-capture-form').children.length > 0) {
      return;
    }

    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: '5419881',
        formId: '49703274-a05d-48d8-8316-34341faafaf8',
        target: '#email-capture-form',
      });
    }
  });

  return (
    <>
      <h2 className="text-center text-xl md:text-2xl mb-5">
        Be the first to know all the essential news.
      </h2>
      <div id="email-capture-form" className="w-full" />
    </>
  );
};

export const LandingPageTemplate = ({ image, emailCapture, products }) => {
  const [province, setProvince] = useState(getProvinceSelection());

  const isPurchasable = PROVINCES_AVAILABLE.includes(province);

  return (
    <div className="landing-page">
      <NavBar className="z-10" onProvinceUpdated={setProvince} />
      <section className="hero overflow-hidden relative bg-primary z-10">
        <div className="header-background absolute w-full top-0 left-0 bg-transparent z-10">
          <Container>
            <h1 className="md:text-light text-light font-bold">Nature's true cannabis.</h1>
          </Container>
          {/* <div className="container relative m-auto px-3 sm:px-0">
          </div> */}
        </div>
        <Img
          className="bg-image h-full w-full"
          fluid={{
            ...image.image.childImageSharp.fluid,
            ...{ sizes: '(max-width: 512px) 512px, (max-width: 1024px) 1024px, 1920px' },
          }}
          alt={image.alt}
          fadeIn
        />
      </section>
      <PageSection>
        <Container className="m-auto flex flex-col sm:flex-row">
          <div className="flex-1">
            <SectionHeader>All that we need, nature provides.</SectionHeader>
          </div>
          <div className="flex-1" style={{ lineHeight: 1.25 }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
            <a name="what-we-believe" className="header-offset" />
            <p>
              Going back to basics doesn't mean starting over, it means rediscovering why you got
              started in the first place.
              <br />
              <br />
              We wanted to create a purer, simpler, more sustainable cannabis because in the midst
              of uncertainty and chaos, don't we all crave simplicity?
              <br />
              <br />
              And so we decided.
              <br />
              <br />
              Enough is enough.
              <br />
              <br />
              Enough with the excess, the artificial, the built-in obsolescence.
              <br />
              <br />
              Enough additives, preservatives, environmental depletives.
              <br />
              <br />
              Just lay it all bare—add nothing, change nothing, strip away nothing—and what remains
              is all that we ever really wanted from the start: something whole, something real,
              something true.
              <br />
              <br />
              <br />
              Simply Bare.
              <br />
              Nature’s true cannabis.
            </p>
          </div>
        </Container>
      </PageSection>
      <PageSection>
        <Container className="flex flex-col">
          <SectionHeader subtitle="How we grow" anchor="how-we-grow">
            Fully organic and full of flavour.
          </SectionHeader>
          <ul className="flex flex-col lg:flex-row">
            <li className="feature-section text-center lg:text-left mb-5 lg:mb-0">
              <LivingSoilIcon style={{ height: '49px' }} className="m-auto lg:m-2 lg:mb-5" />
              <div className="feature-title font-bold text-primary">Living Soil</div>
              <div>
                We work hand in-hand with nature every step of the process, starting with our living
                soil. It's made with 100% organic inputs including Douglas Fir bark, kelp and fish
                meal found right here on the BC Coast
              </div>
            </li>
            <li className="feature-section text-center lg:text-left mb-5 lg:mb-0">
              <OrganicNutrientsIcon style={{ height: '49px' }} className="m-auto lg:m-2 lg:mb-5" />
              <div className="feature-title font-bold text-primary">Organic Nutrients</div>
              <div>
                We're proud to be certified organic by FVOPA. Our plants are nourished with fresh
                water, drenched in plenty of BC sunlight, and grown without the use of anything
                harmful or artificial.
              </div>
            </li>
            <li className="feature-section text-center lg:text-left mb-5 lg:mb-0">
              <SlowCuredIcon style={{ height: '49px' }} className="m-auto lg:m-2 lg:mb-5" />
              <div className="feature-title font-bold text-primary">Slow Cured</div>
              <div>
                After harvest, our plants are cold cured for 14 days. It's a long and slow process
                but it produces superior cannabis with high levels of terpene retention, cannabinoid
                potency and just the right amount of moisture.
              </div>
            </li>
            <li className="feature-section text-center lg:text-left mb-5 lg:mb-0">
              <FullFlavourIcon style={{ height: '49px' }} className="m-auto lg:m-2 lg:mb-5" />
              <div className="feature-title font-bold text-primary">Full Flavour</div>
              <div>
                By adding nothing and taking nothing away, our plants have the chance to fully
                express themselves. That means cannabis with plenty of aroma all sealed in a
                recyclable glass jar to preserve freshness and flavour.
              </div>
            </li>
          </ul>
        </Container>
      </PageSection>
      <PageSection>
        <Container className="flex flex-col">
          <SectionHeader subtitle="Latest Harvest" anchor="latest-harvest">
            Fresh from our organic greenhouse.
          </SectionHeader>
          <ProductCarousel
            products={products.map(product => ({
              ...product,
            }))}
            province={province}
          />
        </Container>
      </PageSection>
      <PageSection>
        <Container className="flex flex-col justify-center pb-24 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 px-3 md:px-0">
          <SectionHeader anchor="learn-more" className="text-center">
            {isPurchasable
              ? "Nature's true cannabis is here."
              : "Nature's true cannabis is coming soon."}
          </SectionHeader>
          <EmailCapture {...emailCapture} province={province} />
        </Container>
      </PageSection>
    </div>
  );
};
const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LandingPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        emailCapture={frontmatter.emailCapture}
        description={frontmatter.description}
        products={frontmatter.products}
      />
    </Layout>
  );
};

export default LandingPage;

export const pageQuery = graphql`
  query LandingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        title
        image {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 55) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
        emailCapture {
          heading
        }
        products {
          cbd
          description
          footnote
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            alt
          }
          key
          profile
          subtitle
          terpenes
          thc
          title
        }
      }
    }
  }
`;
