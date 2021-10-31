import './App.css';
import { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos);
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos)
  }
  console.log(todos)
  return (
    <div className="App">
      <h1>To do list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add to do</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) =>
          <div key={index} >
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }} >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? 'Not done' : "done"}
            </button>
          </div>
        )}
      </section>
    </div >
  );
}

export default App;
