/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGallery = /* GraphQL */ `subscription OnCreateGallery(
  $filter: ModelSubscriptionGalleryFilterInput
  $owner: String
) {
  onCreateGallery(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGallerySubscriptionVariables,
  APITypes.OnCreateGallerySubscription
>;
export const onUpdateGallery = /* GraphQL */ `subscription OnUpdateGallery(
  $filter: ModelSubscriptionGalleryFilterInput
  $owner: String
) {
  onUpdateGallery(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGallerySubscriptionVariables,
  APITypes.OnUpdateGallerySubscription
>;
export const onDeleteGallery = /* GraphQL */ `subscription OnDeleteGallery(
  $filter: ModelSubscriptionGalleryFilterInput
  $owner: String
) {
  onDeleteGallery(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGallerySubscriptionVariables,
  APITypes.OnDeleteGallerySubscription
>;
