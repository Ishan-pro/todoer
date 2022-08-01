import Stringifier from 'postcss/lib/stringifier';
import tw from 'tailwind-styled-components';

interface TodoProps {
  text: string;
}

const TodoCom = (props: TodoProps) => {
  return (
    <Todo>
      <span style={{ flex: 1 }}>{props.text}</span> <Tick type="checkbox" />
    </Todo>
  );
};

const TodoForm = () => {
  return (
    <Parent style={{ height: '90vh' }}>
      <TodoContainer>
        <TodoCom text={'Hello'} />
      </TodoContainer>
      <TodoInput type="text" />
    </Parent>
  );
};

const Parent = tw.div`
grid
`;

const Tick = tw.input`
checked:bg-red-500
h-30
w-30
`;

const Todo = tw.div`
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
w-5/6
shadow-lg
justify-self-center
`;

export default TodoForm;
