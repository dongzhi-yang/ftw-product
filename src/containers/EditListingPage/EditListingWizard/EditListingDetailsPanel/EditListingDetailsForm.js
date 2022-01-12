import React, { useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

// Import configs and util modules
import config from '../../../../config';
import { intlShape, injectIntl, FormattedMessage } from '../../../../util/reactIntl';
import { propTypes } from '../../../../util/types';
import { maxLength, required, composeValidators } from '../../../../util/validators';
import { findConfigForSelectFilter } from '../../../../util/search';
import { createSession } from '../../../../util/api';

// Import shared components
import { Form, Button, FieldTextInput, SecondaryButton } from '../../../../components';
// Import modules from this directory
import CustomFieldEnum from '../CustomFieldEnum';
import css from './EditListingDetailsForm.module.css';
import { camelCase } from 'lodash';

const TITLE_MAX_LENGTH = 60;

const EditListingDetailsFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        autoFocus,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
      } = formRenderProps;
      const [sessionCreating, setSessionCreating] = useState(false);
      const titleMessage = intl.formatMessage({ id: 'EditListingDetailsForm.title' });
      const labelMessage = label =>
        intl.formatMessage({ id: `EditListingDetailsForm.${camelCase(label)}` });

      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.titlePlaceholder',
      });
      const labelPlaceholderMessage = label =>
        intl.formatMessage({
          id: 'EditListingDetailsForm.placeholder',
          values: { label: label },
        });

      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.titleRequired',
      });
      const requiredMessage = label =>
        intl.formatMessage({ id: 'EditListingDetailsForm.required' }, { label: label });

      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDetailsForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.descriptionRequired',
      });

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDetailsForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDetailsForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDetailsForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      const brandConfig = findConfigForSelectFilter('brand', filterConfig);
      const brandSchemaType = brandConfig ? brandConfig.schemaType : null;
      const brands = brandConfig && brandConfig.options ? brandConfig.options : [];
      const brandLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.brandLabel',
      });
      const brandPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.brandPlaceholder',
      });

      const brandRequired = required(
        intl.formatMessage({
          id: 'EditListingDetailsForm.brandRequired',
        })
      );

      const history = useHistory();
      const onClickContinueSession = () => {
        window.open(
          `https://api.paveapi.com/v1/launch/${title || props.initialValues.title}`,
          '_blank'
        );
      };

      const onClickCreateSession = () => {
        setSessionCreating(true);
        createSession().then(apiResponse => {
          setSessionCreating(false);
          window.open(`https://api.paveapi.com/v1/launch/${apiResponse.session_key}`, '_blank');
          history.replace(
            `/l/${apiResponse.session_key.toLowerCase()}/${
              apiResponse.listingData.id.uuid
            }/draft/details`
          );
        });
      };

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}

          <div className={css.session}>
            {props.initialValues.title ? (
              <a onClick={onClickContinueSession}>Session has been created. Continue Here</a>
            ) : (
              <>
                <SecondaryButton
                  inProgress={sessionCreating}
                  className={css.aiButton}
                  onClick={onClickCreateSession}
                >
                  <FormattedMessage id="EditListingDetailsPanel.capture" />
                </SecondaryButton>
              </>
            )}

            {props.initialValues.title && !props.initialValues.vin ? (
              <p className={css.error}>
                Please refresh the page in a minute if you don't see the filled data
              </p>
            ) : null}
          </div>

          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
            disabled={true}
          />
          <FieldTextInput
            id="id"
            name="id"
            className={css.title}
            type="text"
            label={labelMessage('id')}
            disabled={true}
          />
          <FieldTextInput
            id="vin"
            name="vin"
            className={css.title}
            type="text"
            label={labelMessage('vin')}
            disabled={true}
          />
          <FieldTextInput
            id="year"
            name="year"
            className={css.title}
            type="text"
            label={labelMessage('year')}
            disabled={true}
          />
          <FieldTextInput
            id="make"
            name="make"
            className={css.title}
            type="text"
            label={labelMessage('make')}
            disabled={true}
          />
          <FieldTextInput
            id="model"
            name="model"
            className={css.title}
            type="text"
            label={labelMessage('model')}
            validate={composeValidators(required(requiredMessage('model')), maxLength60Message)}
            disabled={true}
          />
          <FieldTextInput
            id="body_type"
            name="body_type"
            className={css.title}
            type="text"
            label={labelMessage('body_type')}
            disabled={true}
          />
          <FieldTextInput
            id="trim"
            name="trim"
            className={css.title}
            type="text"
            label={labelMessage('trim')}
            disabled={true}
          />
          <FieldTextInput
            id="transmission"
            name="transmission"
            className={css.title}
            type="text"
            label={labelMessage('transmission')}
            disabled={true}
          />
          <FieldTextInput
            id="engine_type"
            name="engine_type"
            className={css.title}
            type="text"
            label={labelMessage('engine_type')}
            disabled={true}
          />
          <FieldTextInput
            id="fuel_type"
            name="fuel_type"
            className={css.title}
            type="text"
            label={labelMessage('fuel_type')}
            disabled={true}
          />
          <FieldTextInput
            id="ext_col"
            name="ext_col"
            className={css.title}
            type="text"
            label={labelMessage('ext_col')}
            disabled={true}
          />
          <FieldTextInput
            id="int_col"
            name="int_col"
            className={css.title}
            type="text"
            label={labelMessage('int_col')}
            disabled={true}
          />
          <FieldTextInput
            id="odom_reading"
            name="odom_reading"
            className={css.title}
            type="text"
            label={labelMessage('odom_reading')}
            disabled={true}
          />
          <FieldTextInput
            id="odom_unit"
            name="odom_unit"
            className={css.title}
            type="text"
            label={labelMessage('odom_unit')}
            maxLength={TITLE_MAX_LENGTH}
            autoFocus={autoFocus}
            disabled={true}
          />
          <CustomFieldEnum
            id="brand"
            name="brand"
            options={brands}
            label={brandLabel}
            placeholder={brandPlaceholder}
            validate={brandRequired}
            schemaType={brandSchemaType}
            disabled={true}
          />
          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDetailsFormComponent.defaultProps = {
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingDetailsFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
};

export default compose(injectIntl)(EditListingDetailsFormComponent);
