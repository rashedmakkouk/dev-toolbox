const appId = 'AQ2FODZFV4';
const apiKey = '37ee5d19b3ff7613190da238a2b91c0b';
const indexName = 'rashedmakkouk__dev-toolbox';
const siteUrl = 'https://rashedmakkouk.github.io/dev-toolbox';

const rateLimit = 8;

const placeholder = 'Search docs...';

// Add custom 'attributes' to merge with default configuration.
const searchableAttributes = [
  'title',
  'description',
  'categories',
  'category',
  'content',
];

// DocSearch Config Template
// https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template
const recordExtractor = {
  indexName,
  pathsToMatch: [`${siteUrl}/**`],
  recordExtractor: ({ $, helpers }) => {
    // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
    const lvl0 =
      $(
        '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
      )
        .last()
        .text() || 'Documentation';

    return helpers.docsearch({
      recordProps: {
        lvl0: {
          selectors: '',
          defaultValue: lvl0,
        },
        lvl1: 'header h1',
        lvl2: 'article h2',
        lvl3: 'article h3',
        lvl4: 'article h4',
        lvl5: 'article h5, article td:first-child',
        lvl6: 'article h6',
        content: 'article p, article li, article td:last-child',
      },
      indexHeadings: true,
      aggregateContent: true,
    });
  },
};

// DocSearch Config Template
// https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template
const initialIndexSettings = {
  [indexName]: {
    attributesForFaceting: [
      'type',
      'lang',
      'language',
      'version',
      'docusaurus_tag',
    ],
    attributesToRetrieve: [
      'hierarchy',
      'anchor',
      'url',
      'url_without_anchor',
      'type',
      ...searchableAttributes,
    ],
    attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
    attributesToSnippet: ['content:10'],
    camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
    searchableAttributes: [
      'unordered(hierarchy_radio_camel.lvl0)',
      'unordered(hierarchy_radio.lvl0)',
      'unordered(hierarchy_radio_camel.lvl1)',
      'unordered(hierarchy_radio.lvl1)',
      'unordered(hierarchy_radio_camel.lvl2)',
      'unordered(hierarchy_radio.lvl2)',
      'unordered(hierarchy_radio_camel.lvl3)',
      'unordered(hierarchy_radio.lvl3)',
      'unordered(hierarchy_radio_camel.lvl4)',
      'unordered(hierarchy_radio.lvl4)',
      'unordered(hierarchy_radio_camel.lvl5)',
      'unordered(hierarchy_radio.lvl5)',
      'unordered(hierarchy_radio_camel.lvl6)',
      'unordered(hierarchy_radio.lvl6)',
      'unordered(hierarchy_camel.lvl0)',
      'unordered(hierarchy.lvl0)',
      'unordered(hierarchy_camel.lvl1)',
      'unordered(hierarchy.lvl1)',
      'unordered(hierarchy_camel.lvl2)',
      'unordered(hierarchy.lvl2)',
      'unordered(hierarchy_camel.lvl3)',
      'unordered(hierarchy.lvl3)',
      'unordered(hierarchy_camel.lvl4)',
      'unordered(hierarchy.lvl4)',
      'unordered(hierarchy_camel.lvl5)',
      'unordered(hierarchy.lvl5)',
      'unordered(hierarchy_camel.lvl6)',
      'unordered(hierarchy.lvl6)',
      ...searchableAttributes,
    ],
    distinct: true,
    attributeForDistinct: 'url',
    customRanking: [
      'desc(weight.pageRank)',
      'desc(weight.level)',
      'asc(weight.position)',
    ],
    minWordSizefor1Typo: 3,
    minWordSizefor2Typos: 7,
    hitsPerPage: 20,
    maxValuesPerFacet: 100,
    attributesToIndex: null,
    numericAttributesToIndex: null,
    unretrievableAttributes: null,
    optionalWords: null,
    paginationLimitedTo: 1000,
    exactOnSingleWordQuery: 'attribute',
    ranking: [
      'words',
      'filters',
      'typo',
      'attribute',
      'proximity',
      'exact',
      'custom',
      'geo',
    ],
    queryType: 'prefixLast',
    snippetEllipsisText: '',
    alternativesAsExact: [
      'ignorePlurals',
      'singleWordSynonym'
    ],
    highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
    highlightPostTag: '</span>',
    allowTyposOnNumericTokens: false,
    minProximity: 1,
    ignorePlurals: true,
    advancedSyntax: true,
    attributeCriteriaComputedByMinProximity: true,
    removeWordsIfNoResults: 'allOptional',
    separatorsToIndex: '_',
  },
};

module.exports = {
  // Search-Only Public API key.
  // https://docsearch.algolia.com/docs/legacy/faq/#can-i-share-the-apikey-in-my-repo
  apiKey,
  indexName,
  // The application ID provided by Algolia
  appId,
  // Optional: see doc section below
  contextualSearch: true,
  // Optional: Algolia search parameters, disable 'contextualSearch' option first.
  // searchParameters: {
  //   facetFilters: ['language:en'],
  // },
  // Optional: Specify domains where the navigation should occur through window.location instead on
  // history.push. Useful when our Algolia config crawls multiple documentation sites and we want
  // to navigate with window.location.href to them.
  // externalUrlRegex: 'external\\.com|domain\\.com',
  placeholder,
  // Optional: path for search page that enabled by default (`false` to disable it)
  searchPagePath: 'search',
  rateLimit,
  startUrls: [`${siteUrl}/`],
  // Restrict duplicate content in results.
  // https://docsearch.algolia.com/docs/legacy/faq/#why-do-i-have-duplicate-content-in-my-results
  // Exclude all URLs ending with / or index.html
  stop_urls: ['/$', '/index.html$'],
  sitemaps: [`${siteUrl}/sitemap.xml`],
  ignoreCanonicalTo: true,
  discoveryPatterns: [`${siteUrl}/**`],
  actions: [recordExtractor],
  initialIndexSettings,
  rules: [],
  synonyms: [],
};
