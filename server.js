import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('db.json');
const middlewares = defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('http://localhost:3000/employees', router); // Set up a base route for the API

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});