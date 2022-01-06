import { updatedEntities, denormalisedEntities } from '../util/data';

// ================ Action types ================ //

export const ADD_MARKETPLACE_ENTITIES = 'app/marketplaceData/ADD_MARKETPLACE_ENTITIES';

// ================ Reducer ================ //

const initialState = {
  // Database of all the fetched entities.
  entities: {},
};

const merge = (state, sdkResponse) => {
  const apiResponse = sdkResponse.data;
  return {
    ...state,
    entities: updatedEntities({ ...state.entities }, apiResponse),
  };
};

export default function marketplaceDataReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  if (type === 'app/marketplaceData/ADD_MARKETPLACE_ENTITIES') {
    const publicData = {
      session: {
        session_key: 'EMT-PSME6Y6WU3',
        theme: 'LITE',
        active: true,
        status: 'COMPLETE',
        redirect_url: 'https://paveapi.com',
        inspect_started_at: '2021-12-09T20:25:48+00:00',
        inspect_ended_at: '2021-12-09T20:34:03+00:00',
        created_at: '2021-12-09T18:53:47+00:00',
        updated_at: '2021-12-09T20:34:03+00:00',
        language: 'en',
        options: {
          sms: {
            to: '6789758408',
            to_name: null,
            from: '6789858408',
            by: null,
          },
        },
        user_account: {
          username: 'travish',
          first_name: 'Travis',
          last_name: 'Howard',
          email: 'travis.howard@emotiveautoexchange.com',
          phone: '4706303660',
        },
        source: {
          type: 'dashboard',
          properties: {
            api_name: 'Lite test',
            dashboard_username: 'travish',
          },
        },
        vehicle: {
          id: 78984,
          vin: '1VWBP7A38DC147416',
          year: 2013,
          make: 'Volkswagen',
          model: 'Passat',
          body_type: 'Sedan 4 Dr.',
          trim: '4dr Sdn 2.5L Auto SE PZEV',
          transmission: 'AUTOMATIC',
          drivetrain: 'Front Wheel Drive',
          engine_type: null,
          fuel_type: 'Gasoline Fuel',
          ext_col: 'Glacier Blue Metallic',
          int_col: 'Titan Black',
          odom_reading: '122574',
          odom_unit: 'MILES',
        },
      },
      photos: [
        {
          photo_code: 1,
          photo_label: 'VIN',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_01_UTH.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:26:28+00:00',
          updated_at: '2021-12-09T20:28:33+00:00',
        },
        {
          photo_code: 3,
          photo_label: 'Cluster',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_03_YE3.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:27:22+00:00',
          updated_at: '2021-12-09T20:27:36+00:00',
        },
        {
          photo_code: 4,
          photo_label: 'Left',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_04_V63.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:27:40+00:00',
          updated_at: '2021-12-09T20:29:20+00:00',
        },
        {
          photo_code: 10,
          photo_label: 'Front_Left',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_10_C56.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:28:11+00:00',
          updated_at: '2021-12-09T20:28:32+00:00',
        },
        {
          photo_code: 2,
          photo_label: 'Interior',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_02_260.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:29:07+00:00',
          updated_at: '2021-12-09T20:29:24+00:00',
        },
        {
          photo_code: 5,
          photo_label: 'Front',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_05_U4B.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:29:20+00:00',
          updated_at: '2021-12-09T20:31:23+00:00',
        },
        {
          photo_code: 11,
          photo_label: 'Front_Right',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_11_YJX.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:29:22+00:00',
          updated_at: '2021-12-09T20:29:49+00:00',
        },
        {
          photo_code: 7,
          photo_label: 'Right',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_07_BPR.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:29:27+00:00',
          updated_at: '2021-12-09T20:29:41+00:00',
        },
        {
          photo_code: 12,
          photo_label: 'Rear_Right',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_12_Q73.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:29:43+00:00',
          updated_at: '2021-12-09T20:29:54+00:00',
        },
        {
          photo_code: 8,
          photo_label: 'Rear',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_08_SQK.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:30:01+00:00',
          updated_at: '2021-12-09T20:30:18+00:00',
        },
        {
          photo_code: 13,
          photo_label: 'Rear_Left',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_13_W6C.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:30:23+00:00',
          updated_at: '2021-12-09T20:31:27+00:00',
        },
        {
          photo_code: 9,
          photo_label: 'Windshield',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_09_LWX.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:31:30+00:00',
          updated_at: '2021-12-09T20:31:40+00:00',
        },
        {
          photo_code: 6,
          photo_label: 'Tires',
          url: 'https://images.paveapi.com/EMT/EMT-PSME6Y6WU3/EMT-PSME6Y6WU3_06_TQY.jpg',
          approved: true,
          approved_message: 'ACCEPTED',
          created_at: '2021-12-09T20:31:40+00:00',
          updated_at: '2021-12-09T20:31:50+00:00',
        },
      ],
      vehicle: {
        id: 78984,
        vin: '1VWBP7A38DC147416',
        year: 2013,
        make: 'Volkswagen',
        model: 'Passat',
        body_type: 'Sedan 4 Dr.',
        trim: '4dr Sdn 2.5L Auto SE PZEV',
        transmission: 'AUTOMATIC',
        drivetrain: 'Front Wheel Drive',
        engine_type: null,
        fuel_type: 'Gasoline Fuel',
        ext_col: 'Glacier Blue Metallic',
        int_col: 'Titan Black',
        odom_reading: '122574',
        odom_unit: 'MILES',
      },
      location: null,
      disclosures: null,
      announcements: null,
      inspection: {
        damages_overview: {
          totalDamages: 11,
          maxGradePerItem: 3,
          maxTotalGrade: 5,
        },
        detected_damages: [
          {
            damage_group: 'BODY',
            component: 'BUMPER_FRONT_UNIQUE',
            damage_name: 'MULTIPLE_SCRATCHES_MINOR_NOT_THROUGH_PAINT',
            component_label: 'Front Bumper Cover',
            user_response: null,
            source: 'inspect',
            label: 'Has Multiple Minor Scratches - Not Through Paint',
            description: 'Multiple Scratches Light',
            tolerance: '2',
            repair_method: 'Refinish',
            repair_type: 'SMART Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '04',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/04/04-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf18n2',
            cropped_url:
              'https://inspections.paveapi.com/PAV-211209082546-177/crop-damages/1ldx8ii9kwzf18n2.png',
            cropped_code: '01',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'BODY',
            component: 'DOOR_REAR_LEFT',
            damage_name: 'DENTED_MINOR_NOT_THROUGH_PAINT',
            component_label: 'Rear Left Door',
            user_response: null,
            source: 'inspect',
            label: 'Has Minor Dent - Not Through Paint',
            description: 'Has Minor Dent - Not Through Paint',
            tolerance: '1/8 to 1/2 inch - NAAA Acceptable',
            repair_method: 'PDR Repair',
            repair_type: 'Minor Body Shop Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 1,
            frame_grade_score: 0,
            photo: {
              code: '04',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/04/04-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf1jud',
            cropped_url:
              'https://inspections.paveapi.com/PAV-211209082546-177/crop-damages/1ldx8ii9kwzf1jud.png',
            cropped_code: '02',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'INTERIOR',
            component: 'INTERIOR',
            damage_name: 'DAMAGED',
            component_label: 'Interior',
            user_response: null,
            source: 'inspect',
            label: 'The seats, dash or carpets have areas that are damaged',
            description: 'The seats, dash or carpets have areas that are damaged',
            tolerance: 'Damage',
            repair_method: 'Replace/Repair',
            repair_type: 'SMART Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 3,
            frame_grade_score: 3,
            photo: {
              code: '02',
              url:
                'https://inspections.paveapi.com/PAV-211209082546-177/02/02-original_ACCEPT_958121.jpg',
            },
            uuid: '2sxjf5q36kwzez5fn',
            cropped_url: '',
            cropped_code: '',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'BODY',
            component: 'BUMPER_FRONT_UNIQUE',
            damage_name: 'CHIPPED_MINOR',
            component_label: 'Front Bumper Cover',
            user_response: null,
            source: 'inspect',
            label: 'Has Small Chip',
            description: 'Has Small Chip',
            tolerance: '1 or 2 Small Chips',
            repair_method: 'Refinish',
            repair_type: 'SMART Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '05',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/05/05-annotated.jpg',
            },
            uuid: '2sxjf5q36kwzf0bvp',
            cropped_url:
              'https://inspections.paveapi.com/PAV-211209082546-177/crop-damages/2sxjf5q36kwzf0bvp.png',
            cropped_code: '01',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'BODY',
            component: 'BUMPER_FRONT_UNIQUE',
            damage_name: 'CHIPPED_MINOR',
            component_label: 'Front Bumper Cover',
            user_response: null,
            source: 'inspect',
            label: 'Has Small Chip',
            description: 'Has Small Chip',
            tolerance: '1 or 2 Small Chips',
            repair_method: 'Refinish',
            repair_type: 'SMART Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '05',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/05/05-annotated.jpg',
            },
            uuid: '2sxjf5q36kwzf0bvq',
            cropped_url:
              'https://inspections.paveapi.com/PAV-211209082546-177/crop-damages/2sxjf5q36kwzf0bvq.png',
            cropped_code: '02',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'BODY',
            component: 'BUMPER_REAR_UNIQUE',
            damage_name: 'MULTIPLE_SCRATCHES_MINOR_NOT_THROUGH_PAINT',
            component_label: 'Rear Bumper Cover',
            user_response: null,
            source: 'inspect',
            label: 'Has Multiple Minor Scratches - Not Through Paint',
            description: 'Multiple Scratches Light',
            tolerance: '2',
            repair_method: 'Refinish',
            repair_type: 'SMART Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '08',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/08/08-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf1l7d',
            cropped_url:
              'https://inspections.paveapi.com/PAV-211209082546-177/crop-damages/1ldx8ii9kwzf1l7d.png',
            cropped_code: '01',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'BODY',
            component: 'BUMPER_REAR_UNIQUE',
            damage_name: 'DENTED_MINOR_NOT_THROUGH_PAINT',
            component_label: 'Rear Bumper Cover',
            user_response: null,
            source: 'inspect',
            label: 'Has Minor Dent - Not Through Paint',
            description: 'Has Minor Dent - Not Through Paint',
            tolerance: '1/8 to 1/2 inch - NAAA Acceptable',
            repair_method: 'PDR Repair',
            repair_type: 'Minor Body Shop Repair',
            unit_measure: 'Per Item',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 1,
            frame_grade_score: 0,
            photo: {
              code: '08',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/08/08-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf1l7e',
            cropped_url:
              'https://inspections.paveapi.com/PAV-211209082546-177/crop-damages/1ldx8ii9kwzf1l7e.png',
            cropped_code: '02',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'TIRE',
            component: 'TIRE_FRONT_LEFT',
            damage_name: 'GOOD_CONDITION',
            component_label: 'Front Left Tire',
            user_response: null,
            source: 'inspect',
            label: 'Good Condition',
            description: 'Good Condition',
            tolerance: 'Shows Minimum Signs of Wear',
            repair_method: 'Info/Report',
            repair_type: 'Info/Report',
            unit_measure: 'Per Component',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '04',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/04/04-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf2358',
            cropped_url: '',
            cropped_code: '',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'TIRE',
            component: 'TIRE_REAR_LEFT',
            damage_name: 'GOOD_CONDITION',
            component_label: 'Rear Left Tire',
            user_response: null,
            source: 'inspect',
            label: 'Good Condition',
            description: 'Good Condition',
            tolerance: 'Shows Minimum Signs of Wear',
            repair_method: 'Info/Report',
            repair_type: 'Info/Report',
            unit_measure: 'Per Component',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '04',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/04/04-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf2359',
            cropped_url: '',
            cropped_code: '',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'TIRE',
            component: 'TIRE_FRONT_RIGHT',
            damage_name: 'GOOD_CONDITION',
            component_label: 'Front Right Tire',
            user_response: null,
            source: 'inspect',
            label: 'Good Condition',
            description: 'Good Condition',
            tolerance: 'Shows Minimum Signs of Wear',
            repair_method: 'Info/Report',
            repair_type: 'Info/Report',
            unit_measure: 'Per Component',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '07',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/07/07-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf235a',
            cropped_url: '',
            cropped_code: '',
            estimate_included: false,
            estimate_tbd: false,
          },
          {
            damage_group: 'TIRE',
            component: 'TIRE_REAR_RIGHT',
            damage_name: 'GOOD_CONDITION',
            component_label: 'Rear Right Tire',
            user_response: null,
            source: 'inspect',
            label: 'Good Condition',
            description: 'Good Condition',
            tolerance: 'Shows Minimum Signs of Wear',
            repair_method: 'Info/Report',
            repair_type: 'Info/Report',
            unit_measure: 'Per Component',
            estimate_category: '',
            labor_hrs: 0,
            labor_total: 0,
            parts_materials: 0,
            total: 0,
            grade_score: 0,
            frame_grade_score: 0,
            photo: {
              code: '07',
              url: 'https://inspections.paveapi.com/PAV-211209082546-177/07/07-annotated.jpg',
            },
            uuid: '1ldx8ii9kwzf235b',
            cropped_url: '',
            cropped_code: '',
            estimate_included: false,
            estimate_tbd: false,
          },
        ],
        detected_status: {
          interior_status: 'DAMAGED',
          tire_status: 'GOOD_CONDITION',
        },
        grading: {
          standard_A: 3,
          standard_B: 'C-3',
          standard_C: 'Good Condition',
        },
        annotated_images: [],
        case_details: {
          case_start_time: '2021-12-09T20:25:47.324Z',
          case_end_time: '2021-12-09T20:32:11.811Z',
        },
      },
      condition_report: 'https://reports.paveapi.com/api/report/EMT-PSME6Y6WU3',
      landing_page: 'https://dashboard.paveapi.com/park/EMT-PSME6Y6WU3/?l=en',
    };
    action.payload.data.data.attributes.publicData = {
      // ...action.payload.data.data.attributes.publicData,
      ...publicData,
    };
  }
  switch (type) {
    case ADD_MARKETPLACE_ENTITIES:
      return merge(state, payload);

    default:
      return state;
  }
}

// ================ Selectors ================ //

/**
 * Get the denormalised listing entities with the given IDs
 *
 * @param {Object} state the full Redux store
 * @param {Array<UUID>} listingIds listing IDs to select from the store
 */
export const getListingsById = (state, listingIds) => {
  const { entities } = state.marketplaceData;
  const resources = listingIds.map(id => ({
    id,
    type: 'listing',
  }));
  const throwIfNotFound = false;
  return denormalisedEntities(entities, resources, throwIfNotFound);
};

/**
 * Get the denormalised entities from the given entity references.
 *
 * @param {Object} state the full Redux store
 *
 * @param {Array<{ id, type }} entityRefs References to entities that
 * we want to query from the data. Currently we expect that all the
 * entities have the same type.
 *
 * @return {Array<Object>} denormalised entities
 */
export const getMarketplaceEntities = (state, entityRefs) => {
  const { entities } = state.marketplaceData;
  const throwIfNotFound = false;
  return denormalisedEntities(entities, entityRefs, throwIfNotFound);
};

// ================ Action creators ================ //

export const addMarketplaceEntities = sdkResponse => ({
  type: ADD_MARKETPLACE_ENTITIES,
  payload: sdkResponse,
});
