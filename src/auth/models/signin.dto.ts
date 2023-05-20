import { z } from 'zod';

export const signInDtoSchema = z.object({
  email: z.string().email({
    message: 'メールを入力してください',
  }),
  password: z.string().min(8, '8文字以上入力してください'),
});

type SignInDto = z.infer<typeof signInDtoSchema>;

export default SignInDto;
