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
      const labelMessage = label => intl.formatMessage({ id: `EditListingDetailsForm.${label}` });
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
        intl.formatMessage({
          id: 'EditListingDetailsForm.required',
          values: { label: label },
        });
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

      const categoryConfig = findConfigForSelectFilter('category', filterConfig);
      const categorySchemaType = categoryConfig.schemaType;
      const categories = categoryConfig.options ? categoryConfig.options : [];
      const categoryLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.categoryLabel',
      });
      const categoryPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.categoryPlaceholder',
      });

      const categoryRequired = required(
        intl.formatMessage({
          id: 'EditListingDetailsForm.categoryRequired',
        })
      );

      const sizeConfig = findConfigForSelectFilter('size', filterConfig);
      const sizeSchemaType = sizeConfig ? sizeConfig.schemaType : null;
      const sizes = sizeConfig && sizeConfig.options ? sizeConfig.options : [];
      const sizeLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.sizeLabel',
      });
      const sizePlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.sizePlaceholder',
      });

      const sizeRequired = required(
        intl.formatMessage({
          id: 'EditListingDetailsForm.sizeRequired',
        })
      );

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
              <p className={css.error}>
                You cannot continue without creating a session. Click the AI button
              </p>
            </>
          )}

          {props.initialValues.title && !props.initialValues.vin ? (
            <p className={css.error}>
              Please refresh the page in a minute if you don't see the filled data
            </p>
          ) : null}
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
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('id')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="vin"
            name="vin"
            className={css.title}
            type="text"
            label={labelMessage('vin')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('vin')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="year"
            name="year"
            className={css.title}
            type="text"
            label={labelMessage('year')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('year')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="make"
            name="make"
            className={css.title}
            type="text"
            label={labelMessage('make')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('make')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="model"
            name="model"
            className={css.title}
            type="text"
            label={labelMessage('model')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('model')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="bodyType"
            name="bodyType"
            className={css.title}
            type="text"
            label={labelMessage('bodyType')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('bodyType')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="trim"
            name="trim"
            className={css.title}
            type="text"
            label={labelMessage('trim')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('trim')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="transmission"
            name="transmission"
            className={css.title}
            type="text"
            label={labelMessage('transmission')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(
              required(requiredMessage('transmission')),
              maxLength60Message
            )}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="engineType"
            name="engineType"
            className={css.title}
            type="text"
            label={labelMessage('engineType')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(
              required(requiredMessage('engineType')),
              maxLength60Message
            )}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="fuelType"
            name="fuelType"
            className={css.title}
            type="text"
            label={labelMessage('fuelType')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('fuelType')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="extCol"
            name="extCol"
            className={css.title}
            type="text"
            label={labelMessage('extCol')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('extCol')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="intCol"
            name="intCol"
            className={css.title}
            type="text"
            label={labelMessage('intCol')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('intCol')), maxLength60Message)}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="odomReading"
            name="odomReading"
            className={css.title}
            type="text"
            label={labelMessage('odomReading')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(
              required(requiredMessage('odomReading')),
              maxLength60Message
            )}
            autoFocus={autoFocus}
            disabled={true}
          />
          <FieldTextInput
            id="odomUnit"
            name="odomUnit"
            className={css.title}
            type="text"
            label={labelMessage('odomUnit')}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(requiredMessage('odomUnit')), maxLength60Message)}
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
