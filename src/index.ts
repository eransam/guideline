import express from 'express';
import { workerController } from './controllers/WorkerController';

const app = express();
const port = 3000;

app.get('/workers', workerController.getWorkerList);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
