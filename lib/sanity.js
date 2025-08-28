import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "0m5l89lg",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
