// structure.js
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems,
  } from 'sanity-plugin-singleton-tools';
  import { PlugIcon } from '@sanity/icons';
  
  
  export const structure = (S, context) =>
    S.list()
      .title('Sanity Love Content')
      .items([
        // Create a list item for each singleton document in your schema that links directly to a document view
        ...singletonDocumentListItems({ S, context }),
        // Create a list item for a specific singleton
        singletonDocumentListItem({
          S,
          context,
          // Schema type
          type: 'others',
          // Required for showing multiple singletons of the same schema type
          title: 'Other Details',
          // Required for showing multiple singletons of the same schema type
          id: 'others',
          // Specify a custom icon
          icon: PlugIcon,
        }),
        S.divider(),
        // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
        ...filteredDocumentListItems({ S, context }),
      ]);