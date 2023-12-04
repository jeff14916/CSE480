/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGallery = /* GraphQL */ `mutation CreateGallery(
  $input: CreateGalleryInput!
  $condition: ModelGalleryConditionInput
) {
  createGallery(input: $input, condition: $condition) {
    id
    dummy
    nickname
    imageurl
    title
    description
    timestamp
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGalleryMutationVariables,
  APITypes.CreateGalleryMutation
>;
export const updateGallery = /* GraphQL */ `mutation UpdateGallery(
  $input: UpdateGalleryInput!
  $condition: ModelGalleryConditionInput
) {
  updateGallery(input: $input, condition: $condition) {
    id
    dummy
    nickname
    imageurl
    title
    description
    timestamp
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGalleryMutationVariables,
  APITypes.UpdateGalleryMutation
>;
export const deleteGallery = /* GraphQL */ `mutation DeleteGallery(
  $input: DeleteGalleryInput!
  $condition: ModelGalleryConditionInput
) {
  deleteGallery(input: $input, condition: $condition) {
    id
    dummy
    nickname
    imageurl
    title
    description
    timestamp
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGalleryMutationVariables,
  APITypes.DeleteGalleryMutation
>;
