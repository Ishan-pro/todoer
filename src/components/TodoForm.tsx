
import React, { useEffect, useLayoutEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import {useAppDispatch, useAppSelector} from '../utils/hooks'
import todoSlice, {CompleteTodo, CreateTodo, GetTodos} from '../functions/todoSlice'

interface TodoProps {
  text: string;
  todo:Todo
}



const TodoCom = (props: TodoProps) => {
  const dispatch = useAppDispatch()
  const handleCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(CompleteTodo(props.todo.id))
    }
  }
  

  return (
    <Todos>
      {props.todo.completed ? <s> <span style={{ flex: 1 }}>{props.text}</span> </s> :
      <> <span style={{ flex: 1 }}>{props.text}</span><Tick type="checkbox"
      onChange={handleCheck}
      /> </>} 
      
    </Todos>
  );
};

const TodoForm = (props:{user:string}) => {
  const todos = useAppSelector((state) => state.todos.todos)
  const loading  = useAppSelector((state) => state.todos.loading)
  const dispatch = useAppDispatch()
  const [text, setText] = useState<string>("")
  useEffect(() => {
    dispatch(GetTodos())
  }, [])
  const printingPosts = todos.map((Todo, index) => {
    return <TodoCom key={index.toString()} text={Todo.text} todo={Todo}/>
  })

  const onSubmitText = () => {
    dispatch(CreateTodo(text))
    setText("")
  }
  return (
    <Parent style={{ height: '90vh' }}>
      <TodoContainer>
        {loading=="loading" ? "loading" : printingPosts}
        <CreateTodoBox>
        <TodoInput type="text" value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value)}} />
      <TodoButton onClick={() => {onSubmitText()}}>Create Todo</TodoButton>
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
