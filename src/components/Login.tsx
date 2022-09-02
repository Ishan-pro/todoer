import tw from 'tailwind-styled-components';
import React ,{ useState} from 'react';
import { Signup, Signin } from '../utils/functions';

export default function Login() {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const handlesubmit = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(email)
    
  };

  return (
    <LoginBox>
      <LoginForm
        style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
        onSubmit={handlesubmit}
      >
        <H1>Login or Signup</H1>
        <Input placeholder="Email"  value={email} 
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value)
        }}/>
        <Input placeholder="Password"  value={password} 
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value)
        }}/>
        
        <Submit onClick={() => {Signup(email, password)}}>
          Register
        </Submit>
        <Submit $login={true} onClick={() => {Signin(email, password)}}>
          Login
        </Submit>
      </LoginForm>
    </LoginBox>
  );
}

interface FormBtnProps {
  $login:boolean
}

const Submit = tw.button<FormBtnProps>`
${(p:FormBtnProps) => (p.$login ? "bg-purple-500" : "bg-blue-500")}

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
