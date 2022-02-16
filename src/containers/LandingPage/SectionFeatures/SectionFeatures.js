import React from 'react';
import css from './SectionFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SectionFeatures = props => {
  return (
    <div className={css.featuresSection}>
      <div className={props.sectionClass}>
        <p className={css.title}>
          <span className={css.titleBrand}>
            <span className={css.titleBrandInitial}>E</span>-motive
          </span>{' '}
          Delivers...
        </p>
        <div className={css.featureBlocks}>
          <div className={css.featureBlock}>
            <FontAwesomeIcon icon="table-list" />
            <p>Real-time Condition Reports</p>
          </div>
          <div className={css.featureBlock}>
            <FontAwesomeIcon icon="laptop" />
            <p>On-demand Vehicle Marketplace</p>
          </div>
        </div>
        <div className={css.featureBlocks}>
          <div className={css.featureBlock}>
            <FontAwesomeIcon icon="screwdriver-wrench" />
            <p>Professional Inspections</p>
          </div>
          <div className={css.featureBlock}>
            <FontAwesomeIcon icon="truck" />
            <p>Pick Up and Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionFeatures.defaultProps = { sectionClass: null };

const { string } = PropTypes;
SectionFeatures.propTypes = {
  sectionClass: string,
};

export default SectionFeatures;
