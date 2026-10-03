import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "fvxs86uc",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});
