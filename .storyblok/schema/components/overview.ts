import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const overviewBlock = defineBlock({
  name: 'overview',
  is_root: true,
  is_nestable: false,
  description: '',
  internal_tag_ids: [],
  schema: [
    defineField('title', {
        required: true,
        translatable: true,
        type: 'text',
      }),
    defineField('description', {
        translatable: true,
        type: 'markdown',
      }),
    defineField('items', {
        allow_advanced_search: true,
        display_name: '',
        entry_appearance: 'card',
        is_reference_type: true,
        required: true,
        source: 'internal_stories',
        type: 'options',
      }),
  ],
});
