require('dotenv').config();
const express = require('express'),
      authController = require('./controllers/authController'),
      cardController = require('./controllers/cardController'),
      decksController = require('./controllers/decksController'),
      massive = require('massive'),
      session = require('express-session'),
      auth = require('./middleware/authMiddleware');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365},
    })
);

//Auth Endpoints
app.post('/auth/register', authController.register)
app.post('/auth/login', authController.login)
app.get('/auth/logout', authController.logout)

//Card Endpoints
// app.get('/api/flashcards/:card_id', )
// app.post('/api/flashcards/', {card_front: '', card_back: ''})
// app.put('/api/flashcards/', {card_front: '', card_back: ''})
// app.delete('/api/flashcards/:card_id', )

//Deck Endpoints
// app.get('/api/decks/', )
// app.get('/api/decks/:deck_id', )
// app.post('/api/decks/', {deck_name: ''})
// app.put('/api/decks/:deck_id', {deck_name: ''})
// app.delete('/api/decks/:deck_id', )

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
});