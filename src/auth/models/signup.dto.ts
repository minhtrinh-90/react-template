import { z } from 'zod';

import { signInDtoSchema } from './signin.dto';

export const signUpDtoSchema = signInDtoSchema.extend({
  name: z.string().min(3, '3文字以上入力してください'),
});

type SignUpDto = z.infer<typeof signUpDtoSchema>;

export default SignUpDto;
