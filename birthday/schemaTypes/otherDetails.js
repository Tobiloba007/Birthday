export const othersDetails = {
    name: 'others',
    type: 'document',
    title: 'Other Details',
    options: {
        singleton: true, // Identify this document as a singleton
      },
    fields: [
        {
            name: 'message1',
            type: 'text',
            title: 'Intro',
            description: 'Introduction Message',
            validation: (Rule) => [
              Rule.required().error('Into message is required'),
              Rule.min(10).error('Into message must be at least 10 characters'),
            ],
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: "Celebrant's Name",
            validation: (Rule) => [
              Rule.required().error('Name is required'),
              Rule.min(2).error('Name must be at least 2 characters'),
            ],
        },
        {
            name: 'images',
            type: 'object',
            title: "Celebrant's Images",
            description: "Kindly upload the best 2 images",
            fields: [
              {
                name: 'image1',
                type: 'image',
                title: "Image 1",
              },
              {
                name: 'image2',
                type: 'image',
                title: "Image 2",
              },
            ],
        },
        {
            name: 'message2',
            type: 'text',
            title: 'Outro Message',
            description: 'Outro',
            validation: (Rule) => [
              Rule.required().error('Outro message is required'),
              Rule.min(10).error('Outro message must be at least 10 characters'),
            ],
        },
    ],
}