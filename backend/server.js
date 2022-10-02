const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcone to the support desk API' });
});

//Routes
app.use('/api/users', require(`./routes/userRoutes`));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
