export enum ProductEvents {
  CREATE_PRODUCT = 'create-product',
  SHOW_PRODUCT = 'show-product',
  UPDATE_PRODUCT = 'update-product',
  DELETE_PRODUCT = 'delete-product',
  SHOW_ALL_PRODUCT = 'show-all-product',
}

export const productConfig = { name: 'product', events: ProductEvents };
