require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// In-memory storage for refresh tokens
let refreshTokens = [];

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
