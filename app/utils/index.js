import { markdownToStoryblokRichtext } from '@storyblok/richtext/markdown-parser';

export const fromMarkdown = (text) => markdownToStoryblokRichtext(text);