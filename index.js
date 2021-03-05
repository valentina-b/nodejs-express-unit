const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("we got the request")
//     res.send("<h1>This is my header</h1>")
// })

app.get('/', (req, res) => {
    res.send('This is the HOMEPAGE - YAAAAYYY!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('nothing found if nothing searched ;)')        
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('MIJAU')
})

app.post('/cats', (req, res) => {
    res.send('POST request for /cats')
})

app.get('/dogs', (req, res) => {
    res.send('VAU')
})

app.get('*', (req, res) => {
    res.send('all other paths and pages')
})


app.listen(8080, () => {
    console.log("listening to port 8080")
})
