import express from 'express';
import routes from './routes.js';

const app = express();
app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

export default app;
