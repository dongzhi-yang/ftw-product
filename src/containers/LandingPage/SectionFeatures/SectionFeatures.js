import React from 'react';
import css from './SectionFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const SectionFeatures = props => {
  return (
    <div className={css.featuresSection}>
      <div className={props.sectionClass}>
        <Zoom>
          <p className={css.title}>
            <span className={css.titleBrand}>
              <span className={css.titleBrandInitial}>E</span>-motive
            </span>{' '}
            Delivers...
          </p>
        </Zoom>
        <div className={css.featureBlocks}>
          <div className={css.featureBlock}>
            <Fade top>
              <FontAwesomeIcon icon="table-list" />
            </Fade>
            <p>Real-time Condition Reports</p>
          </div>
          <div className={css.featureBlock}>
            <Fade top>
              <FontAwesomeIcon icon="laptop" />
            </Fade>
            <p>On-demand Vehicle Marketplace</p>
          </div>
        </div>
        <div className={css.featureBlocks}>
          <div className={css.featureBlock}>
            <Fade top>
              <FontAwesomeIcon icon="screwdriver-wrench" />
            </Fade>
            <p>Professional Inspections</p>
          </div>
          <div className={css.featureBlock}>
            <Fade top>
              <FontAwesomeIcon icon="truck" />
            </Fade>
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
