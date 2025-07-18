import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface AuthorIdentity {
  contentTypeId: "authorIdentity";
  fields: {
    name: EntryFieldTypes.Text;
  };
}

export interface BlogPost {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    authors: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<AuthorIdentity>>;
    thumbnail: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
