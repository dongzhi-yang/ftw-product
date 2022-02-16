import React from 'react';
import css from './SectionPartners.module.css';
import PropTypes from 'prop-types';

const SectionPartners = props => {
  return (
    <div className={css.partnerSection}>
      <div className={props.sectionClass}>
        <div className={css.sectionContainer}>
          <h2 className={css.partnerTitle}>Green Partners</h2>
          <div className={css.partnerBlocks}>
            <div className={css.partnerBlock}>
              <h3 className={css.partnerHeading}>ADAREV</h3>
              <p className={css.partnerDescription}>
                E-Motive will employ 20kW solar generators from our partner, Adarev. It will utilize
                custom-designed solar panels from T1 solar firm to power our facilities.
              </p>
            </div>
            <div className={css.partnerBlock}>
              <h3 className={css.partnerHeading}>TIER ONE SOLAR</h3>
              <p className={css.partnerDescription}>
                To run 20kW generators, instead of relying completely on unsustainable fuels. Using
                Tier One Solar, we will procure their custom-created solar panels. We will
                successfully run sustainable and reliable energy for our entire ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionPartners.defaultProps = { sectionClass: null };
const { string } = PropTypes;

SectionPartners.propTypes = {
  sectionClass: string,
};

export default SectionPartners;
