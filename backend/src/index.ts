import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001; // Default to 3001 if PORT env var is not set

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the Express backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
