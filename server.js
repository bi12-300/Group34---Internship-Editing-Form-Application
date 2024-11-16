require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(express.json());

// In-memory storage for refresh tokens
let refreshTokens = [];
let forms = [];

// Route: Generate a new access token using a refresh token
app.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken });
    });
});

// Route: Logout and invalidate a refresh token
app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204); // No Content
});

// Route: Login and generate access and refresh tokens
app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken });
});

// Route: Fetch posts for the authenticated user
const posts = [
    { username: 'Saul', title: 'Goodman' },
    { username: 'Kim', title: 'Wexler' }
];

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/forms', (req, res) => {
    const { name, description, fields } = req.body;
        
    // Kiểm tra dữ liệu đầu vào
    if (!name || !fields || !Array.isArray(fields)) {
        return res.status(400).json({ message: 'Invalid input data. Name and fields are required.' });
    }

    const newForm = {
        id: uuidv4(), // Tạo ID duy nhất
        name,
        description: description || '',
        fields,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    forms.push(newForm);
    res.status(201).json(newForm); // Trả về form vừa tạo
});

// 2. API GET /forms/:id để lấy thông tin form cụ thể
app.get('/forms/:id', (req, res) => {
    const { id } = req.params;
    const form = forms.find(f => f.id === id);

    if (!form) {
        return res.status(404).json({ message: 'Form not found.' });
    }

    res.json(form);
});

// 3. API PUT /forms/:id để cập nhật form
app.put('/forms/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, fields } = req.body;

    const form = forms.find(f => f.id === id);
    if (!form) {
        return res.status(404).json({ message: 'Form not found.' });
    }

    // Cập nhật thông tin form
    if (name) form.name = name;
    if (description) form.description = description;
    if (fields && Array.isArray(fields)) form.fields = fields;

    form.updatedAt = new Date().toISOString(); // Cập nhật thời gian sửa đổi

    res.json(form); // Trả về form đã cập nhật
});

// 4. API DELETE /forms/:id để xóa form
app.delete('/forms/:id', (req, res) => {
    const { id } = req.params;
    const index = forms.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Form not found.' });
    }

    forms.splice(index, 1); // Xóa form khỏi danh sách
    res.status(204).send(); // Trả về 204 No Content
});

// Route: Root endpoint for health check
app.get('/', (req, res) => {
    res.json('Hello, World!');
});

// Middleware: Authenticate access tokens
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Helper Function: Generate access token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
