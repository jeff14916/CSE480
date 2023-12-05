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
    dummy
    nickname
    imageurl
    title
    description
    timestamp
    owner
    createdAt
    updatedAt
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
      dummy
      nickname
      imageurl
      title
      description
      timestamp
      owner
      createdAt
      updatedAt
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
export const galleryByDate = /* GraphQL */ `query GalleryByDate(
  $dummy: String!
  $timestamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGalleryFilterInput
  $limit: Int
  $nextToken: String
) {
  galleryByDate(
    dummy: $dummy
    timestamp: $timestamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      dummy
      nickname
      imageurl
      title
      description
      timestamp
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GalleryByDateQueryVariables,
  APITypes.GalleryByDateQuery
>;
export const galleryByOwner = /* GraphQL */ `query GalleryByOwner(
  $owner: String!
  $timestamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGalleryFilterInput
  $limit: Int
  $nextToken: String
) {
  galleryByOwner(
    owner: $owner
    timestamp: $timestamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      dummy
      nickname
      imageurl
      title
      description
      timestamp
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GalleryByOwnerQueryVariables,
  APITypes.GalleryByOwnerQuery
>;
