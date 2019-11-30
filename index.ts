import axios from 'axios';

const todoJsonUrl = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(todoJsonUrl).then(response => {
  const data = response.data as Todo;
  const id = data.id;
  const title = data.title;
  const completed = data.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with and id of: ${id}
  Has a title: ${title}
  Is it completed: ${completed}
`);
};
