import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import order from './order'
import banner from './banner'
import category from './category'
import subCategory from './subCategory'
import storeSettings from './storeSettings'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, subCategory, product, order, banner, storeSettings],
}
