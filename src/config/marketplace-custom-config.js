/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'brand',
    label: 'Brand',
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_brand'],
    config: {
      // Schema type options: 'enum', 'multi-enum'
      // Both types can work so that user selects multiple values when filtering search results.
      // With "enum" the functionality will be OR-semantics (Nike OR Adidas OR Salomon)
      // With "multi-enum" it's possible to use both AND and OR semantics with searchMode config.
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'toyota', label: 'Toyota' },
        { key: 'honda', label: 'Honda' },
        { key: 'chevrolet', label: 'Chevrolet' },
        { key: 'ford', label: 'Ford' },
        { key: 'mercedes_benz', label: 'Mercedes-Benz' },
        { key: 'jeep', label: 'Jeep' },
        { key: 'bmw', label: 'BMW' },
        { key: 'porsche', label: 'Porsche' },
        { key: 'subaru', label: 'Subaru' },
        { key: 'nissan', label: 'Nissan' },
        { key: 'cadillac', label: 'Cadillac' },
        { key: 'volkswagen', label: 'Volkswagen' },
        { key: 'lexus', label: 'Lexus' },
        { key: 'audi', label: 'Audi' },
        { key: 'ferrari', label: 'Ferrari' },
        { key: 'volvo', label: 'Volvo' },
        { key: 'jaguar', label: 'Jaguar' },
        { key: 'gmc', label: 'GMC' },
        { key: 'buick', label: 'Buick' },
        { key: 'acura', label: 'Acura' },
        { key: 'bentley', label: 'Bentley' },
        { key: 'dodge', label: 'Dodge' },
        { key: 'hyundai', label: 'Hyundai' },
        { key: 'lincoln', label: 'Lincoln' },
        { key: 'mazda', label: 'Mazda' },
        { key: 'land_rover', label: 'Land Rover' },
        { key: 'tesla', label: 'Tesla' },
        { key: 'ram_trucks', label: 'Ram Trucks' },
        { key: 'kia', label: 'Kia' },
        { key: 'chrysler', label: 'Chrysler' },
        { key: 'pontiac', label: 'Pontiac' },
        { key: 'infiniti', label: 'Infiniti' },
        { key: 'mitsubishi', label: 'Mitsubishi' },
        { key: 'oldsmobile', label: 'Oldsmobile' },
        { key: 'maserati', label: 'Maserati' },
        { key: 'aston_martin', label: 'Aston Martin' },
        { key: 'bugatti', label: 'Bugatti' },
        { key: 'fiat', label: 'Fiat' },
        { key: 'mini', label: 'Mini' },
        { key: 'alfa_romeo', label: 'Alfa Romeo' },
        { key: 'saab', label: 'Saab' },
        { key: 'genesis', label: 'Genesis' },
        { key: 'suzuki', label: 'Suzuki' },
        { key: 'studebaker', label: 'Studebaker' },
        { key: 'renault', label: 'Renault' },
        { key: 'peugeot', label: 'Peugeot' },
        { key: 'daewoo', label: 'Daewoo' },
        { key: 'hudson', label: 'Hudson' },
        { key: 'citroen', label: 'Citroen' },
        { key: 'mg', label: 'MG' },
      ],
    },
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },

  // Here is an example of multi-enum search filter.
  //
  // {
  //   id: 'amenities',
  //   label: 'Amenities',
  //   type: 'SelectMultipleFilter',
  //   group: 'secondary',
  //   queryParamNames: ['pub_amenities'],
  //   config: {
  //     // Schema type options: 'enum', 'multi-enum'
  //     // Both types can work so that user selects multiple values when filtering search results.
  //     // With "enum" the functionality will be OR-semantics (Nike OR Adidas OR Salomon)
  //     // With "multi-enum" it's possible to use both AND and OR semantics with searchMode config.
  //     schemaType: 'multi-enum',

  //     // Optional modes: 'has_all', 'has_any'
  //     // Note: this is relevant only for schema type 'multi-enum'
  //     // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
  //     searchMode: 'has_all',

  //     // "key" is the option you see in Flex Console.
  //     // "label" is set here for this web app's UI only.
  //     // Note: label is not added through the translation files
  //     // to make filter customizations a bit easier.
  //     options: [
  //       { key: 'towels', label: 'Towels' },
  //       { key: 'bathroom', label: 'Bathroom' },
  //       { key: 'swimming_pool', label: 'Swimming pool' },
  //       { key: 'barbeque', label: 'Barbeque' },
  //     ],
  //   },
  // },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Relevance key is used with keywords filter.
  // Keywords filter also sorts results according to relevance.
  relevanceFilter: 'keywords',

  // Keyword filter is sorting the results by relevance.
  // If keyword filter is active, one might want to disable other sorting options
  // by adding 'keyword' to this list.
  conflictingFilters: [],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};

export const listing = {
  // These should be listing details from public data with schema type: enum
  // SectionDetailsMaybe component shows these on listing page.
  enumFieldDetails: ['size', 'brand', 'category'],
};
