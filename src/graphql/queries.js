/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDailyEntry = /* GraphQL */ `
  query GetDailyEntry($id: ID!) {
    getDailyEntry(id: $id) {
      id
      moodLevel
      text
      lifestyleChange
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
        moodLevel
        text
        lifestyleChange
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
