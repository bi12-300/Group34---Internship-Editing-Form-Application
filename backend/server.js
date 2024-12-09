require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

const { tokenController, logoutController, loginController } = require('./authController');
const { createFormController, getFormByIdController, updateFormController, deleteFormController } = require('./formController');
const { updateUserController, getUserController } = require('./userController');  // Import các controller cho người dùng
const authenticateToken = require('./authMiddleware');

app.post('/token', tokenController);

app.delete('/logout', logoutController);

app.post('/login', loginController);

// Route để lấy thông tin người dùng (ví dụ: GET /user/:id)
app.get('/users/:id', authenticateToken, getUserController);

// Route để cập nhật thông tin người dùng (PUT /user/:id)
app.put('/users/:id', authenticateToken, updateUserController);

// API Form (Không thay đổi)
app.post('/forms', createFormController);
app.get('/forms/:id', getFormByIdController);
app.put('/forms/:id', updateFormController);
app.delete('/forms/:id', deleteFormController);

// Posts API (Ví dụ khác)
const posts = [
    { username: 'Saul', password: 'saul123', title: 'Goodman' },
    { username: 'Kim', password: 'kim456', title: 'Wexler' }
];

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
});

// Hello World endpoint
app.get('/', (req, res) => {
    res.json('Hello, World!');
});

// Cấu hình CORS
app.use(cors({
    origin: 'http://localhost:3000/', // Chỉ cho phép frontend từ localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
