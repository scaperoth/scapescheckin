/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDailyEntry = /* GraphQL */ `
  mutation CreateDailyEntry(
    $input: CreateDailyEntryInput!
    $condition: ModelDailyEntryConditionInput
  ) {
    createDailyEntry(input: $input, condition: $condition) {
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
export const updateDailyEntry = /* GraphQL */ `
  mutation UpdateDailyEntry(
    $input: UpdateDailyEntryInput!
    $condition: ModelDailyEntryConditionInput
  ) {
    updateDailyEntry(input: $input, condition: $condition) {
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
export const deleteDailyEntry = /* GraphQL */ `
  mutation DeleteDailyEntry(
    $input: DeleteDailyEntryInput!
    $condition: ModelDailyEntryConditionInput
  ) {
    deleteDailyEntry(input: $input, condition: $condition) {
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
