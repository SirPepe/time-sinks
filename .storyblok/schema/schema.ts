import type {
  Schema as InferSchema,
  Story as InferStory,
} from "@storyblok/schema";
import type { MapiStory as InferStoryMapi } from "@storyblok/schema";

import { catBlock } from "./components/cat";
import { overviewBlock } from "./components/overview";
import { pageBlock } from "./components/page";
import { projectBlock } from "./components/project";
import { seeAlsoBlock } from "./components/seeAlso";
import { teaserBlock } from "./components/teaser";

export const schema = {
  blocks: {
    catBlock,
    overviewBlock,
    pageBlock,
    projectBlock,
    seeAlsoBlock,
    teaserBlock,
  },
};

export type Schema = InferSchema<typeof schema>;
export type Blocks = Schema["blocks"];
export type Story = InferStory<Blocks>;
export type StoryMapi = InferStoryMapi<Blocks>;
