import { defineBlock, defineField } from "@storyblok/schema";

export const projectBlock = defineBlock({
  name: "project",
  is_root: true,
  is_nestable: true,
  description: "A single side project",
  internal_tag_ids: [],
  schema: [
    defineField("title", {
      required: true,
      type: "text",
    }),
    defineField("link", {
      required: false,
      type: "multilink",
    }),
    defineField("picture", {
      type: "asset",
    }),
    defineField("short_description", {
      required: true,
      translatable: true,
      type: "text",
    }),
    defineField("description", {
      required: true,
      translatable: true,
      type: "markdown",
    }),
    defineField("other_links", {
      required: false,
      type: "bloks",
      restrict_components: true,
      component_whitelist: ["see_also"],
    }),
  ],
});
