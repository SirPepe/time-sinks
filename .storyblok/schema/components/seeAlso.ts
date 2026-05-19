import { defineBlock, defineField } from "@storyblok/schema";

export const seeAlsoBlock = defineBlock({
  name: "see_also",
  is_root: false,
  is_nestable: true,
  description: "",
  internal_tag_ids: [],
  schema: [
    defineField("title", {
      required: true,
      translatable: true,
      type: "text",
    }),
    defineField("link", {
      required: false,
      type: "multilink",
    }),
    defineField("short_description", {
      required: false,
      translatable: true,
      type: "text",
    }),
  ],
});
