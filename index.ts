import axios from 'axios';

const todoJsonUrl = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(todoJsonUrl).then(response => {
  console.log(response.data);
});
