import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import config from '../../config';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';

import {
  Page,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import facebookImage from '../../assets/sneakertimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/sneakertimeTwitter-600x314.jpg';

import SectionHero from './SectionHero/SectionHero';
import SectionHowItWorks from './SectionHowItWorks/SectionHowItWorks';
import SectionFilteredSearches from './SectionFilteredSearches/SectionFilteredSearches';
import css from './LandingPage.module.css';

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <>
      <div id="page-container">
        <header id="main-header" data-height-onload="66" style={{ top: '0px' }}>
          <div className="container clearfix et_menu_container">
            <div className="logo_container">
              <span className="logo_helper"></span>
              <a href="http://box5399.temp.domains/~stevesi5/freelance/">
                <img
                  src="http://box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/01/Method-Draw-Image.png"
                  width="410"
                  height="50"
                  alt="E-Motive"
                  id="logo"
                  data-height-percentage="54"
                />
              </a>
            </div>
            <div id="et-top-navigation" data-height="66" data-fixed-height="40">
              <nav id="top-menu-nav">
                <ul id="top-menu" className="nav">
                  <li
                    id="menu-item-86"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-86"
                  >
                    <a href="http://box5399.temp.domains/~stevesi5/freelance/?page_id=68">Sell</a>
                  </li>
                  <li
                    id="menu-item-89"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                  >
                    <a href="http://box5399.temp.domains/~stevesi5/freelance/?page_id=75">Buy</a>
                  </li>
                  <li
                    id="menu-item-88"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-88"
                  >
                    <a href="http://box5399.temp.domains/~stevesi5/freelance/?page_id=65">
                      About E-Motive
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-87"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-87"
                      >
                        <a href="http://box5399.temp.domains/~stevesi5/freelance/?page_id=56">
                          How It Works
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-96"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"
                  >
                    <a href="http://box5399.temp.domains/~stevesi5/freelance/?page_id=93">
                      Sign In / Sign Up
                    </a>
                  </li>
                </ul>{' '}
              </nav>
              <div id="et_mobile_nav_menu">
                <div className="mobile_nav closed">
                  <span className="select_page">Select Page</span>
                  <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
                </div>
              </div>{' '}
            </div>
          </div>
        </header>
        <div id="et-main-area">
          <div id="main-content">
            <article id="post-13" className="post-13 page type-page status-publish hentry">
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_0">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_0 et_animated  et_pb_text_align_left et_pb_bg_layout_dark">
                            <div className="et_pb_text_inner">
                              <h1>Welcome to the Dawn of the New Auto Marketplace</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
                      <div className="et_pb_row et_pb_row_1 et_pb_row_fullwidth">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_button_0 et_animated et_pb_bg_layout_light"
                              href=""
                              data-icon="&#x24;"
                            >
                              sell
                            </a>
                          </div>
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_0  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon">
                                    
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>sell with 100% trust</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p className="p1">
                                    Shop your vehicle in our auto marketplace and receive an instant
                                    offer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_button_1 et_animated et_pb_bg_layout_light"
                              href=""
                              data-icon="&#x24;"
                            >
                              buy
                            </a>
                          </div>
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_1  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon">
                                    
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>buy with total confidence</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p className="p1">
                                    Explore our auto marketplace and find the right vehicle for you
                                    today.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="et_pb_bottom_inside_divider et-no-transition"></div>
                    </div>
                    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                      <div className="et_pb_top_inside_divider et-no-transition"></div>

                      <div className="et_pb_row et_pb_row_2">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_1 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>
                                <em>
                                  <span style={{ color: '#23abe2' }}>E</span>
                                </em>
                                <span style={{ color: '#000000' }}>
                                  <em>-Motive</em> Delivers&#8230;
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_3">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon">
                                    
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Real-time Condition Reports</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_3  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon">
                                    
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Professional Inspections</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_4  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon">
                                    
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>On-demand Vehicle Marketplace</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_5  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon">
                                    
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Pick Up and Delivery</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="et_pb_bottom_inside_divider et-no-transition"></div>
                    </div>
                    <div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                      <div className="et_pb_top_inside_divider et-no-transition"></div>

                      <div className="et_pb_row et_pb_row_4 et_pb_row_fullwidth">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_2 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Green Partners</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_5">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_6  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Adarev</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    E-Motive will employ 20kW solar generators from our partner,
                                    Adarev. It will utilize custom-designed solar panels from T1
                                    solar firm to power our facilities.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_7  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Tier One Solar</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    To run 20kW generators, instead of relying completely on
                                    unsustainable fuels. Using Tier One Solar, we will procure their
                                    custom-created solar panels. We will successfully run
                                    sustainable and reliable energy for our entire ecosystem
                                  </p>
                                  <p>.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_4 et_section_regular">
                      <div className="et_pb_row et_pb_row_6">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_0">
                            <span className="et_pb_image_wrap ">
                              <img
                                width="400"
                                height="60"
                                src="https://i0.wp.com/box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/02/SurveyMonkey-Logo-1.png?resize=400%2C60"
                                alt="SurveyMonkey"
                                title="SurveyMonkey-Logo"
                                srcSet="https://i0.wp.com/box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/02/SurveyMonkey-Logo-1.png?w=400 400w, https://i0.wp.com/box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/02/SurveyMonkey-Logo-1.png?resize=300%2C45 300w"
                                sizes="(max-width: 400px) 100vw, 400px"
                                className="wp-image-222"
                                data-recalc-dims="1"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_3 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                viverra quam in laoreet quis justo. ivamus varius semper suscipit.
                                Aliquam erat volutpatUt nec magna arcu. Interdum et.”
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_7">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_with_border et_pb_module et_pb_testimonial et_pb_testimonial_0 et_animated clearfix  et_pb_text_align_left et_pb_bg_layout_light et_pb_testimonial_no_image et_pb_testimonial_no_bg">
                            <div className="et_pb_testimonial_description">
                              <div className="et_pb_testimonial_description_inner">
                                <div className="et_pb_testimonial_content">
                                  <p>
                                    “Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
                                    ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis”
                                  </p>
                                </div>
                              </div>

                              <p className="et_pb_testimonial_meta"></p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_with_border et_pb_module et_pb_testimonial et_pb_testimonial_1 et_animated clearfix  et_pb_text_align_left et_pb_bg_layout_light et_pb_testimonial_no_image et_pb_testimonial_no_bg">
                            <div className="et_pb_testimonial_description">
                              <div className="et_pb_testimonial_description_inner">
                                <div className="et_pb_testimonial_content">
                                  <p>
                                    “Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
                                    ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis”
                                  </p>
                                </div>
                              </div>

                              <p className="et_pb_testimonial_meta"></p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_with_border et_pb_module et_pb_testimonial et_pb_testimonial_2 et_animated clearfix  et_pb_text_align_left et_pb_bg_layout_light et_pb_testimonial_no_image et_pb_testimonial_no_bg">
                            <div className="et_pb_testimonial_description">
                              <div className="et_pb_testimonial_description_inner">
                                <div className="et_pb_testimonial_content">
                                  “Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
                                  ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis”
                                </div>
                              </div>

                              <p className="et_pb_testimonial_meta"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_5 et_pb_specialty_fullwidth et_animated et_pb_equal_columns et_pb_with_background et_section_specialty section_has_divider et_pb_bottom_divider et_pb_top_divider">
                      <div className="et_pb_row et_pb_gutters1">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_13   et_pb_specialty_column  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_row_inner et_pb_row_inner_0">
                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_inner et_pb_column_inner_0 et-last-child">
                              <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_dark">
                                <div className="et_pb_text_inner">
                                  <h2>Get In Touch</h2>
                                </div>
                              </div>
                              <div className="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_dark">
                                <div className="et_pb_text_inner">
                                  <h3>(888) 123-4562</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_row_inner et_pb_row_inner_1 et_pb_gutters2">
                            <div className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_1">
                              <div className="et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_left et_pb_bg_layout_dark">
                                <div className="et_pb_text_inner">
                                  <h4>Location</h4>
                                  <p>
                                    2345 Divi St
                                    <br />
                                    San Francisco, CA 94222
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_2 et-last-child et_pb_column_empty"></div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_14    et_pb_css_mix_blend_mode_passthrough">
                          <div
                            id="et_pb_contact_form_0"
                            className="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix"
                            data-form_unique_num="0"
                            data-form_unique_id="ee6b9333-5a75-4018-bd98-1a5c5687ad94"
                          >
                            <h3 className="et_pb_contact_main_title">Send A Message</h3>
                            <div className="et-pb-contact-message"></div>

                            <div className="et_pb_contact">
                              <form
                                className="et_pb_contact_form clearfix"
                                method="post"
                                action="http://box5399.temp.domains/~stevesi5/freelance/"
                              >
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_last"
                                  data-id="name"
                                  data-type="input"
                                >
                                  <label
                                    htmlFor="et_pb_contact_name_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    id="et_pb_contact_name_0"
                                    className="input"
                                    name="et_pb_contact_name_0"
                                    data-required_mark="required"
                                    data-field_type="input"
                                    data-original_id="name"
                                    placeholder="Name"
                                  />
                                </p>
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_last"
                                  data-id="email"
                                  data-type="email"
                                >
                                  <label
                                    htmlFor="et_pb_contact_email_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    type="text"
                                    id="et_pb_contact_email_0"
                                    className="input"
                                    name="et_pb_contact_email_0"
                                    data-required_mark="required"
                                    data-field_type="email"
                                    data-original_id="email"
                                    placeholder="Email Address"
                                  />
                                </p>
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_last"
                                  data-id="message"
                                  data-type="text"
                                >
                                  <label
                                    htmlFor="et_pb_contact_message_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    name="et_pb_contact_message_0"
                                    id="et_pb_contact_message_0"
                                    className="et_pb_contact_message input"
                                    data-required_mark="required"
                                    data-field_type="text"
                                    data-original_id="message"
                                    placeholder="Message"
                                  ></textarea>
                                </p>
                                <input
                                  type="hidden"
                                  value="et_contact_proccess"
                                  name="et_pb_contactform_submit_0"
                                />
                                <div className="et_contact_bottom_container">
                                  <button
                                    type="submit"
                                    name="et_builder_submit_button"
                                    className="et_pb_contact_submit et_pb_button"
                                    data-icon="&#x24;"
                                  >
                                    Send Message
                                  </button>
                                </div>
                                <input
                                  type="hidden"
                                  id="_wpnonce-et-pb-contact-form-submitted-0"
                                  name="_wpnonce-et-pb-contact-form-submitted-0"
                                  value="41e2eeecb7"
                                />
                                <input
                                  type="hidden"
                                  name="_wp_http_referer"
                                  value="/~stevesi5/freelance/"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_bottom_inside_divider et-no-transition"></div>
                    </div>{' '}
                  </div>
                </div>
              </div>
            </article>
          </div>

          <footer id="main-footer">
            <div className="container">
              <div id="footer-widgets" className="clearfix">
                <div className="footer-widget">
                  <div id="block-5" className="fwidget et_pb_widget widget_block">
                    <div className="wp-container-6206d091ad671 wp-block-group">
                      <div className="wp-block-group__inner-container"></div>
                    </div>
                  </div>
                  <div id="block-6" className="fwidget et_pb_widget widget_block">
                    <div className="wp-container-6206d091ae128 wp-block-group">
                      <div className="wp-block-group__inner-container">
                        <div className="wp-block-columns">
                          <div className="wp-block-column">
                            <figure className="wp-block-image size-full">
                              <img
                                loading="lazy"
                                width="48"
                                height="48"
                                src="http://box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/01/facebook.png"
                                alt=""
                                className="wp-image-106"
                              />
                            </figure>
                          </div>

                          <div className="wp-block-column">
                            <figure className="wp-block-image size-full">
                              <img
                                loading="lazy"
                                width="48"
                                height="48"
                                src="http://box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/01/twitter.png"
                                alt=""
                                className="wp-image-108"
                              />
                            </figure>
                          </div>

                          <div className="wp-block-column">
                            <figure className="wp-block-image size-full">
                              <img
                                loading="lazy"
                                width="48"
                                height="48"
                                src="http://box5399.temp.domains/~stevesi5/freelance/wp-content/uploads/2022/01/instagram.png"
                                alt=""
                                className="wp-image-107"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-widget"></div>
                <div className="footer-widget"></div>
                <div className="footer-widget"></div>{' '}
              </div>
            </div>

            <div id="footer-bottom">
              <div className="container clearfix"></div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
