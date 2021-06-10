/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMood = /* GraphQL */ `
  mutation CreateMood(
    $input: CreateMoodInput!
    $condition: ModelMoodConditionInput
  ) {
    createMood(input: $input, condition: $condition) {
      id
      level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMood = /* GraphQL */ `
  mutation UpdateMood(
    $input: UpdateMoodInput!
    $condition: ModelMoodConditionInput
  ) {
    updateMood(input: $input, condition: $condition) {
      id
      level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMood = /* GraphQL */ `
  mutation DeleteMood(
    $input: DeleteMoodInput!
    $condition: ModelMoodConditionInput
  ) {
    deleteMood(input: $input, condition: $condition) {
      id
      level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDailyEntry = /* GraphQL */ `
  mutation CreateDailyEntry(
    $input: CreateDailyEntryInput!
    $condition: ModelDailyEntryConditionInput
  ) {
    createDailyEntry(input: $input, condition: $condition) {
      id
      text
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
      text
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
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLifestyleChange = /* GraphQL */ `
  mutation CreateLifestyleChange(
    $input: CreateLifestyleChangeInput!
    $condition: ModelLifestyleChangeConditionInput
  ) {
    createLifestyleChange(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLifestyleChange = /* GraphQL */ `
  mutation UpdateLifestyleChange(
    $input: UpdateLifestyleChangeInput!
    $condition: ModelLifestyleChangeConditionInput
  ) {
    updateLifestyleChange(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLifestyleChange = /* GraphQL */ `
  mutation DeleteLifestyleChange(
    $input: DeleteLifestyleChangeInput!
    $condition: ModelLifestyleChangeConditionInput
  ) {
    deleteLifestyleChange(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
