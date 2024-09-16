export const gallery = {
    name : 'gallery',
    type: 'document',
    title: 'Celebrants Gallery',
    options: {
        singleton: true, // Identify this document as a singleton
      },
    fields: [
        {
            name: 'celebrantsImages',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }],
            orderField: 'order', // enable reordering
        },
    ]
}