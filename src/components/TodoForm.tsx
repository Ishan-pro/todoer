import Stringifier from 'postcss/lib/stringifier';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { GetTodos, CreateTodo } from '../utils/functions';

interface TodoProps {
  text: string;
}



const TodoCom = (props: TodoProps) => {
  

  return (
    <Todos>
      <span style={{ flex: 1 }}>{props.text}</span> <Tick type="checkbox" />
    </Todos>
  );
};

const TodoForm = (props:{user:string}) => {
  const [posts, setPosts] = useState<Todo[]>([])
  const [text, setText] = useState<string>("")
  useEffect(() => {
    GetTodos().then(res => {console.log({res}); res && setPosts(prev => [...res])})
  }, [])
  const printingPosts = posts.map((post, index) => {
    return <TodoCom key={index.toString()} text={post.text}/>
  })
  return (
    <Parent style={{ height: '90vh' }}>
      <TodoContainer>
        {printingPosts}
        <CreateTodoBox>
        <TodoInput type="text" value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value)}} />
      <TodoButton onClick={() => {CreateTodo(text)}}>Create Todo</TodoButton>
        </CreateTodoBox>
      </TodoContainer>

      
    </Parent>
  );
};

const CreateTodoBox = tw.div`

`

const TodoButton = tw.button`
bg-blue-500
px-2
py-2
rounded
hover:shadow-lg
`

const Parent = tw.div`
grid
`;

const Tick = tw.input`
checked:bg-red-500
h-30
w-30
`;

const Todos = tw.div`
font-bold
flex
flex-row
h-fit
text-lg
`;

const TodoContainer = tw.section`
h-5/6
w-5/6
grid
place-self-center
`;

const TodoInput = tw.input`
bg-black
text-white
p-2
h-fit
w-4/6
shadow-lg
flex-1
`;

export default TodoForm;
