/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMood = /* GraphQL */ `
  query GetMood($id: ID!) {
    getMood(id: $id) {
      id
      level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMoods = /* GraphQL */ `
  query ListMoods(
    $filter: ModelMoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        level
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDailyEntry = /* GraphQL */ `
  query GetDailyEntry($id: ID!) {
    getDailyEntry(id: $id) {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDailyEntrys = /* GraphQL */ `
  query ListDailyEntrys(
    $filter: ModelDailyEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLifestyleChange = /* GraphQL */ `
  query GetLifestyleChange($id: ID!) {
    getLifestyleChange(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLifestyleChanges = /* GraphQL */ `
  query ListLifestyleChanges(
    $filter: ModelLifestyleChangeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLifestyleChanges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
