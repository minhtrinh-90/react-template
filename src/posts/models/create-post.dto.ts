import { z } from 'zod';

export const createPostDtoSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  imageUrl: z.string().optional(),
  tags: z.string(),
});

type CreatePostDto = z.infer<typeof createPostDtoSchema>;

export default CreatePostDto;
