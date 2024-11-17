require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const { tokenController, logoutController, loginController } = require('./authController');
const { createFormController, getFormByIdController, updateFormController, deleteFormController } = require('./formController');
const authenticateToken = require('./authMiddleware');

app.post('/token', tokenController);

app.delete('/logout', logoutController);

app.post('/login', loginController);

const posts = [
    { username: 'Saul', title: 'Goodman' },
    { username: 'Kim', title: 'Wexler' }
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
