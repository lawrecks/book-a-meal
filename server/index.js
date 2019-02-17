// index.js
import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.status(200).send('YAY! Congratulations! Your endpoint is working');
});

// Prefix
app.use('/api/v1/meals', mealRoutes);

app.listen(3000);
console.log('app running on port ', 3000);
