import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const innsikt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/innsikt' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    author: z.string().default('Eljar'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string().default('Guide'),
  }),
});

export const collections = { innsikt };
