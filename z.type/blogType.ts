import z from "zod";

export const BlogPostZodSchema = z.object({
    id: z.number().nonnegative(),
    title: z.string().nonempty('Title is required'),
    categories: z.array(z.string()).nonempty('At least one category is required'),
    preview: z.string().nonempty('Preview is required'),
    content: z.string().nonempty('Content is required'),
    createdAt: z.date(),
    author: z.string().nonempty('Author is required'),
})

export type BlogPostType = z.infer<typeof BlogPostZodSchema>