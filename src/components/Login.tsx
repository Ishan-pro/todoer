import tw from 'tailwind-styled-components';
import React ,{ useState} from 'react';
import { Signup } from '../utils/functions';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const handlesubmit = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(email)
    Signup(email)
  };

  return (
    <LoginBox>
      <LoginForm
        style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
        onSubmit={handlesubmit}
      >
        <H1>Login or Signup</H1>
        <Input placeholder="Email"  value={email} onChange={(e:React.FormEvent<HTMLElement>) => {setEmail(e.target.value)}}/>
        <Submit type="submit">
          Register / Login
        </Submit>
      </LoginForm>
    </LoginBox>
  );
}

const Submit = tw.button`
bg-blue-500
rounded
py-2
hover:bg-blue-400
click:bg-blue-700
`;

const H1 = tw.h1`
text-xl
text-center
`;

const Input = tw.input`
border-solid
border-2
border-indigo-600
p-2
`;

const LoginBox = tw.div`
bg-blue-100
h-full
grid
place-content-center

`;
const LoginForm = tw.form`
grid
gap-2
shadow-lg
p-4
rounded

`;
