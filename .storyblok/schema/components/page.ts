import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const pageBlock = defineBlock({
  name: 'page',
  is_root: true,
  is_nestable: false,
  internal_tag_ids: [],
  schema: [
    defineField('title', {
        required: true,
        translatable: true,
        type: 'text',
      }),
    defineField('blocks', {
        type: 'bloks',
      }),
  ],
});
