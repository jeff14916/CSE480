/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGalleryInput = {
  id?: string | null,
  dummy: string,
  nickname?: string | null,
  imageurl: string,
  title: string,
  description?: string | null,
  timestamp: string,
  owner: string,
};

export type ModelGalleryConditionInput = {
  dummy?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  imageurl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGalleryConditionInput | null > | null,
  or?: Array< ModelGalleryConditionInput | null > | null,
  not?: ModelGalleryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Gallery = {
  __typename: "Gallery",
  id: string,
  dummy: string,
  nickname?: string | null,
  imageurl: string,
  title: string,
  description?: string | null,
  timestamp: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGalleryInput = {
  id: string,
  dummy?: string | null,
  nickname?: string | null,
  imageurl?: string | null,
  title?: string | null,
  description?: string | null,
  timestamp?: string | null,
  owner?: string | null,
};

export type DeleteGalleryInput = {
  id: string,
};

export type ModelGalleryFilterInput = {
  id?: ModelIDInput | null,
  dummy?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  imageurl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGalleryFilterInput | null > | null,
  or?: Array< ModelGalleryFilterInput | null > | null,
  not?: ModelGalleryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGalleryConnection = {
  __typename: "ModelGalleryConnection",
  items:  Array<Gallery | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionGalleryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dummy?: ModelSubscriptionStringInput | null,
  nickname?: ModelSubscriptionStringInput | null,
  imageurl?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGalleryFilterInput | null > | null,
  or?: Array< ModelSubscriptionGalleryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateGalleryMutationVariables = {
  input: CreateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type CreateGalleryMutation = {
  createGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGalleryMutationVariables = {
  input: UpdateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type UpdateGalleryMutation = {
  updateGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGalleryMutationVariables = {
  input: DeleteGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type DeleteGalleryMutation = {
  deleteGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGalleryQueryVariables = {
  id: string,
};

export type GetGalleryQuery = {
  getGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGalleriesQueryVariables = {
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGalleriesQuery = {
  listGalleries?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      dummy: string,
      nickname?: string | null,
      imageurl: string,
      title: string,
      description?: string | null,
      timestamp: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GalleryByDateQueryVariables = {
  dummy: string,
  timestamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleryByDateQuery = {
  galleryByDate?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      dummy: string,
      nickname?: string | null,
      imageurl: string,
      title: string,
      description?: string | null,
      timestamp: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GalleryByOwnerQueryVariables = {
  owner: string,
  timestamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleryByOwnerQuery = {
  galleryByOwner?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      dummy: string,
      nickname?: string | null,
      imageurl: string,
      title: string,
      description?: string | null,
      timestamp: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
  owner?: string | null,
};

export type OnCreateGallerySubscription = {
  onCreateGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGallerySubscription = {
  onUpdateGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGallerySubscription = {
  onDeleteGallery?:  {
    __typename: "Gallery",
    id: string,
    dummy: string,
    nickname?: string | null,
    imageurl: string,
    title: string,
    description?: string | null,
    timestamp: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
