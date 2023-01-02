import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: "8tkkgn6l",
    dataset: "production",
    apiVersion: "2023-01-01",
    //request can be faster if set to true
    useCdn: true
});