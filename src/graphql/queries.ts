/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGallery = /* GraphQL */ `query GetGallery($id: ID!) {
  getGallery(id: $id) {
    id
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
` as GeneratedQuery<
  APITypes.GetGalleryQueryVariables,
  APITypes.GetGalleryQuery
>;
export const listGalleries = /* GraphQL */ `query ListGalleries(
  $filter: ModelGalleryFilterInput
  $limit: Int
  $nextToken: String
) {
  listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGalleriesQueryVariables,
  APITypes.ListGalleriesQuery
>;
