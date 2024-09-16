import {createClient} from '@sanity/client'


const client = createClient({
  projectId: 'b6o1kiwt',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2022-03-07', // use current date (YYYY-MM-DD) to target the latest API version
})

export default client