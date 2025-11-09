export default {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
      { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'stock', title: 'Stock', type: 'number' },
      { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
      { name: 'subCategory', title: 'Sub Category', type: 'reference', to: [{ type: 'subCategory' }] },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
      },
      { name: 'isFeatured', title: 'Featured Product', type: 'boolean', initialValue: false },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
          { name: 'title', title: 'SEO Title', type: 'string' },
          { name: 'description', title: 'SEO Description', type: 'text' },
          { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
          { name: 'ogImage', title: 'Open Graph Image', type: 'image' },
        ],
      },
    ],
    preview: { select: { title: 'title', subtitle: 'price', media: 'images.0' } },
  }
  