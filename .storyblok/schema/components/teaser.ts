import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const teaserBlock = defineBlock({
  name: 'teaser',
  is_root: false,
  is_nestable: true,
  internal_tag_ids: [],
  schema: [
    defineField('title', {
        required: true,
        translatable: true,
        type: 'text',
      }),
  ],
});
