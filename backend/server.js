require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

const { tokenController, logoutController, loginController } = require('./authController');
const { createFormController, getFormByIdController, updateFormController, deleteFormController } = require('./formController');
const authenticateToken = require('./authMiddleware');

app.post('/token', tokenController);

app.delete('/logout', logoutController);

app.post('/login', loginController);

const posts = [
    { username: 'Saul',password: 'saul123', title: 'Goodman' },
    { username: 'Kim',password: 'kim456', title: 'Wexler' }
];

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/forms', createFormController);

app.get('/forms/:id', getFormByIdController);

app.put('/forms/:id', updateFormController);

app.delete('/forms/:id', deleteFormController);

app.get('/', (req, res) => {
    res.json('Hello, World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Cấu hình CORS
app.use(cors({
    origin: 'http://localhost:3000/', // Chỉ cho phép frontend từ localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

  const { registerController } = require('./authController');

app.post('/register', registerController);

const errorHandler = require('./errorHandler');

app.use(errorHandler);
