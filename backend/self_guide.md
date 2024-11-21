// "###": below will be a different request in .rest file
install REST client to use .rest file https://marketplace.visualstudio.com/items?itemName=humao.rest-client


----------------------------------------------------
authServer.js guide

require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const refreshTokens = []        //shoudn't do "let" to any project, server restart, the stored data will be whiped out

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)      //check if we do have a valid refresh token or if we already removed the refresh token, if not, send error status
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})       //user: will contain additional information such as token date 
        res.json({ accessToken: accessToken})
    })    // verify the refresh token after bypass
})

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
});

app.post('/login', (req, res) => {
    // authenticate user

    const username = req.body.username
    const user = {name:username}

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken: accessToken, refreshToken : refreshToken})
})

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'}) //set timer for the token
}

const posts = [
    {
        username: 'Saul',
        title: 'Goodman'
    },
    {
        username: 'Kim',
        title: 'Wexler'
    }
]

app.listen(4000)
-------------------------------------------------

