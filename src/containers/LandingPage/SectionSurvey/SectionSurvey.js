import React from 'react';
import quoteImage from '../../../assets/quote.png';

import { FormattedMessage } from '../../../util/reactIntl';
import css from './SectionSurvey.module.css';
import Fade from 'react-reveal/Fade';

const SectionSurvey = props => {
  return (
    <div className={css.surveySection}>
      <Fade>
        <img
          width="324"
          height="49"
          src="https://i0.wp.com/box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/02/SurveyMonkey-Logo-1.png?resize=400%2C60"
          alt="SurveyMonkey"
          title="SurveyMonkey-Logo"
          srcSet="https://i0.wp.com/box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/02/SurveyMonkey-Logo-1.png?w=400 400w, https://i0.wp.com/box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/02/SurveyMonkey-Logo-1.png?resize=300%2C45 300w"
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </Fade>
      <Fade>
        <p className={css.surveyTitle}>
          <FormattedMessage id="SectionSurvey.title" />
        </p>
      </Fade>
      <ul className={css.surveyQuotes}>
        {[1, 2, 3].map(quote => (
          <Fade key={quote}>
            <li className={css.surveyQuote}>
              <img src={quoteImage} className={css.quoteImage}></img>
              <FormattedMessage id={`SectionSurvey.quote${quote}`} />
            </li>
          </Fade>
        ))}
      </ul>
    </div>
  );
};

SectionSurvey.defaultProps = { rootClassName: null, className: null };

SectionSurvey.propTypes = {};

export default SectionSurvey;
