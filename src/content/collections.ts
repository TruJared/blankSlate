export const COLLECTION_NAMES = ['blog', 'docs'] as const;
export type CollectionNames = typeof COLLECTION_NAMES[number];
