import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

router.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = Number(a) + Number(b);
  res.json({ result });
});

export default router;
