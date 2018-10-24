import gql from 'graphql-tag';

export const OFFER_DIRECTORY = 'ZGlyZWN0b3J5Olu+K+nAN4oAAQM47Q==';
export const SITE_ELEMENTS_DIRECTORY = 'ZGlyZWN0b3J5Olu+b3OwODAAAY6GbQ==';

export const SITEDATA = gql`
  fragment DirectoryFragment on Directory {
    id
    name
    pages {
      id
      name
      slug
      fields {
        name
        value
      }
    }
  }
  query SiteData($offerDirectory: ID!, $siteElementsDirectory: ID!) {
    offers: getDirectory(id: $offerDirectory) {
      ...DirectoryFragment
    }
    siteElements: getDirectory(id: $siteElementsDirectory) {
      ...DirectoryFragment
    }
  }
`;
