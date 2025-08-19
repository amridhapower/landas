import LoginForm from '@/domain/loginForm/LoginForm.tsx';
import Card from '@/shared/components/atoms/card/Card.tsx';

const Login = () => {
  return (
    <div
      className="flex justify-center items-center h-screen 
    bg-[radial-gradient(circle_at_bottom,_#F8F6EE,_#ffff)]"
    >
      <div className="flex items-center justify-center w-[340px] md:w-225 h-[700px] md:h-225">
        <Card>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
};

export default Login;
