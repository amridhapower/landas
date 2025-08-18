import LoginForm from '@/domain/loginForm/LoginForm.tsx';
import Card from '@/shared/components/atoms/card/Card.tsx';

const Login = () => {
  return (
    <div
      className="flex justify-center items-center h-screen 
    bg-[radial-gradient(circle_at_bottom,_#F8F6EE,_#ffff)]"
    >
      <div className="flex items-center justify-center w-225 h-225 px-5 pt-[67px] pb-[113px]">
        <Card>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
};

export default Login;
