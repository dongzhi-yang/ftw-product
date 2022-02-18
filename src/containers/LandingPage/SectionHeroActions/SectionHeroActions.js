import React from 'react';
import css from './SectionHeroActions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionHeroActions = props => {
  return (
    <div className={css.heroActionsSection}>
      <div className={css.heroActionsContainer}>
        <div className={css.actions}>
          <div className={css.action}>
            <button type="button" className={css.actionButton}>
              SELL
            </button>
            <FontAwesomeIcon className={css.actionIcon} icon="tags" />
            <h3 className={css.actionHeading}>SELL WITH 100% TRUST</h3>
            <p className={css.actionDescription}>
              Shop your vehicle in our auto marketplace and receive an instant offer.
            </p>
          </div>
          <div className={css.action}>
            <button type="button" className={css.actionButton}>
              BUY
            </button>
            <FontAwesomeIcon className={css.actionIcon} icon="money-check-dollar" />
            <h3 className={css.actionHeading}>BUY WITH TOTAL CONFIDENCE</h3>
            <p className={css.actionDescription}>
              Explore our auto marketplace and find the right vehicle for you today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHeroActions.defaultProps = {};

SectionHeroActions.propTypes = {};

export default SectionHeroActions;
