/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGallery = /* GraphQL */ `
	query GetGallery($id: ID!) {
		getGallery(id: $id) {
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
export const listGalleries = /* GraphQL */ `
	query ListGalleries(
		$filter: ModelGalleryFilterInput
		$limit: Int
		$nextToken: String
	) {
		listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
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
			nextToken
			__typename
		}
	}
`;
