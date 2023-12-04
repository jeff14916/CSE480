/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGallery = /* GraphQL */ `
	query GetGallery($id: ID!) {
		getGallery(id: $id) {
			id
			nickname
			imageurl
			title
			description
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listGallerys = /* GraphQL */ `
	query ListGallerys(
		$filter: ModelGalleryFilterInput
		$limit: Int
		$nextToken: String
	) {
		listGallerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				nickname
				imageurl
				title
				description
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
