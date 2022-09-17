
import React, { useEffect, useLayoutEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import {useAppDispatch, useAppSelector} from '../utils/hooks'
import {CompleteTodo, CreateTodo, DeleteTodo, GetTodos} from '../functions/todoSlice'
import Deleteicon from '../assets/Deleteicon.svg'

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
  const handleDelete = () => {
    dispatch(DeleteTodo(props.todo.id))
  }
  

  return (
    <Todos>
      {props.todo.completed ? <><s className="flex-1"> 
        <span>{props.text}</span> </s>
        <DeleteButton onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="w-5 h-5">
          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
        </svg>



        </DeleteButton>
       </>:
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

const DeleteButton = tw.button`
bg-white
rounded
p-1
`

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
