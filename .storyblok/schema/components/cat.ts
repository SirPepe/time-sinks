import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const catBlock = defineBlock({
  name: 'cat',
  is_root: true,
  is_nestable: true,
  description: '',
  internal_tag_ids: [],
  schema: [
    defineField('title', {
        required: true,
        type: 'text',
      }),
    defineField('picture', {
        required: true,
        type: 'asset',
      }),
    defineField('short_description', {
        required: true,
        translatable: true,
        type: 'text',
      }),
    defineField('description', {
        required: true,
        translatable: true,
        type: 'markdown',
      }),
  ],
});
