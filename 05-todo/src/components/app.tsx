import { useState } from 'react';
import Layout from './layout';
import TodoCreateForm from './todo-create-form';
import TodoList from './todo-list';
import type { Todo } from '@/types/todo';
import { nanoid } from 'nanoid';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { Search } from 'lucide-react';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState('');

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      isCompleted: false,
      text,
    };

    setTodos((prev) => [newTodo, ...prev]);
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function updateTodoStatus(id: string, newStatus: boolean) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: newStatus,
          };
        } else {
          return todo;
        }
      })
    );
  }

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(query.toLowerCase())
  );

  const sortedTodos = filteredTodos.sort((a) => (a.isCompleted ? 1 : -1));

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Todo App</h1>
      <TodoCreateForm
        onCreate={(data) => {
          addTodo(data.text);
        }}
      />

      <h2 className="text-xl font-bold mb-4">My todos</h2>

      <InputGroup className="mb-3">
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <InputGroupAddon align="inline-start">
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <TodoList
        todos={sortedTodos}
        onDelete={deleteTodo}
        onUpdateStatus={updateTodoStatus}
      />
    </Layout>
  );
}
