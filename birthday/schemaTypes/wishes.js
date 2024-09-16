// export const schemaTypes = []
export const wishes = {
    name: 'wishes',
    type: 'document',
    title: 'Colleagues Details',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: 'Upload Image',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Colleague Name',
        validation: (Rule) => [
          Rule.required().error('Name is required'),
          Rule.min(2).error('Name must be at least 2 characters'),
        ],
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
        description: 'Job Title',
        validation: (Rule) => [
          Rule.required().error('Role is required'),
          Rule.min(3).error('Role must be at least 3 characters'),
        ],
      },
      {
        name: 'message',
        type: 'text',
        title: 'Bithday Wish',
        description: 'Wish',
        validation: (Rule) => [
          Rule.required().error('Birthday wish is required'),
          Rule.min(10).error('Birthday wish must be at least 10 characters'),
        ],
      },
    ],
  };