import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './IconSocialMediaInstagram.module.css';

const IconSocialMediaInstagram = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <svg className={classes} viewBox="0 0 24 24" width="24px" height="24px">
      <g id="surface38600408">
        <path
          style={{
            stroke: 'none',
            fillRule: 'nonzero',
            fill: 'rgb(29.019609%,29.019609%,29.019609%)',
            fillOpacity: 1,
          }}
          d="M 8 3 C 5.242188 3 3 5.242188 3 8 L 3 16 C 3 18.757812 5.242188 21 8 21 L 16 21 C 18.757812 21 21 18.757812 21 16 L 21 8 C 21 5.242188 18.757812 3 16 3 Z M 8 5 L 16 5 C 17.652344 5 19 6.347656 19 8 L 19 16 C 19 17.652344 17.652344 19 16 19 L 8 19 C 6.347656 19 5 17.652344 5 16 L 5 8 C 5 6.347656 6.347656 5 8 5 Z M 17 6 C 16.449219 6 16 6.449219 16 7 C 16 7.550781 16.449219 8 17 8 C 17.550781 8 18 7.550781 18 7 C 18 6.449219 17.550781 6 17 6 Z M 12 7 C 9.242188 7 7 9.242188 7 12 C 7 14.757812 9.242188 17 12 17 C 14.757812 17 17 14.757812 17 12 C 17 9.242188 14.757812 7 12 7 Z M 12 9 C 13.652344 9 15 10.347656 15 12 C 15 13.652344 13.652344 15 12 15 C 10.347656 15 9 13.652344 9 12 C 9 10.347656 10.347656 9 12 9 Z M 12 9 "
        />
      </g>
    </svg>
  );
};

IconSocialMediaInstagram.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaInstagram.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaInstagram;
