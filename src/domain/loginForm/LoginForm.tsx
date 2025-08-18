import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import landasLogo from '@/assets/logos/landas.svg';
import Input from '@/shared/components/atoms/input/Input.tsx';
import Checkbox from '@/shared/components/atoms/checkbox/Checkbox.tsx';
import Button from '@/shared/components/atoms/button/Button.tsx';

const schema = z.object({
  username: z.string().min(3, '아이디를 입력하지 않았습니다.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const setSavedUsername = useAuthStore((state) => state.setSavedUsername);
  const [saveId, setSaveId] = useState(false);

  const usernameValue = watch('username');
  const passwordValue = watch('password');
  const isLoginDisabled = !usernameValue && !passwordValue;

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    if (saveId) setSavedUsername(data.username);
    reset();
  };

  return (
    <div className="h-full flex flex-col items-center justify-start gap-30 pt-25 px-37.5">
      <img src={landasLogo} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          name="username"
          label="아이디"
          placeholder="아이디를 입력해주세요."
          control={control}
          error={errors.username}
        />
        <Input
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          control={control}
          type="password"
          error={errors.password}
        />
        <div className="flex justify-between mt-7.5 mb-15">
          <Checkbox
            label="아이디 저장"
            checked={saveId}
            onChange={() => setSaveId((prev) => !prev)}
          />
          <div>아이디찾기 | 비밀번호 찾기 </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button isDisabled={isLoginDisabled}>로그인</Button>
          <Button variant="outline">회원가입</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
