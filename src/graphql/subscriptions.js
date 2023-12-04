/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGallery = /* GraphQL */ `
	subscription OnCreateGallery(
		$filter: ModelSubscriptionGalleryFilterInput
		$owner: String
	) {
		onCreateGallery(filter: $filter, owner: $owner) {
			id
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
`;
export const onUpdateGallery = /* GraphQL */ `
	subscription OnUpdateGallery(
		$filter: ModelSubscriptionGalleryFilterInput
		$owner: String
	) {
		onUpdateGallery(filter: $filter, owner: $owner) {
			id
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
`;
export const onDeleteGallery = /* GraphQL */ `
	subscription OnDeleteGallery(
		$filter: ModelSubscriptionGalleryFilterInput
		$owner: String
	) {
		onDeleteGallery(filter: $filter, owner: $owner) {
			id
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
`;
