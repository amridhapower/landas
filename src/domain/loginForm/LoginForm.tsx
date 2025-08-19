import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import landasLogo from '@/assets/logos/landas.svg';
import Input from '@/shared/components/atoms/input/Input.tsx';
import Checkbox from '@/shared/components/atoms/checkbox/Checkbox.tsx';
import Button from '@/shared/components/atoms/button/Button.tsx';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  username: z.string().min(3, '아이디를 입력하지 않았습니다.'),
  password: z
    .string()
    .min(8, '아이디 또는 비밀번호가 일치하지 않습니다.')
    .max(16, '아이디 또는 비밀번호가 일치하지 않습니다.')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/,
      '아이디 또는 비밀번호가 일치하지 않습니다.'
    ),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });

  const setSavedUsername = useAuthStore((state) => state.setSavedUsername);
  const [saveId, setSaveId] = useState(false);
  const navigate = useNavigate();

  const usernameValue = watch('username');
  const passwordValue = watch('password');
  const isLoginDisabled = !usernameValue && !passwordValue;

  const onSubmit = (data: FormData) => {
    if (saveId) setSavedUsername(data.username);
    navigate('/home');
    reset();
  };

  return (
    <div className="h-146 w-150 flex flex-col items-center justify-start gap-15 md:gap-30 px-4">
      <img src={landasLogo} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          name="username"
          label="아이디"
          placeholder="아이디를 입력해주세요."
          control={control}
          error={errors.username && isSubmitted ? errors.username : undefined}
        />
        <Input
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          control={control}
          type="password"
          error={errors.password}
        />
        <div className="flex justify-between mt-7.5 mb-10 md:mb-15">
          <Checkbox
            label="아이디 저장"
            checked={saveId}
            onChange={() => setSaveId((prev) => !prev)}
          />
          <div>아이디찾기 | 비밀번호 찾기 </div>
        </div>
        <div className="flex flex-col gap-2.5 md:gap-4">
          <Button type="submit" isDisabled={isLoginDisabled}>
            로그인
          </Button>
          <Button variant="outline">회원가입</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
