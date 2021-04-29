module.exports = {
    getUserDecks: async (req, res) => {
        const db = req.app.get('db');
        const result = await db.decks.get_all_users_decks(req.session.user.id);
        return res.status(201).send(result);
    },

    getOneDeck: async (req, res) => {

    },

    addDeck: async (req, res) => {
        const {deckName} = req.body;
        const db = req.app.get('db');
        const result = await db.decks.add_deck_to_user([deckName, req.session.user.id]);
        return res.status(201).send(result)
    },

    updateDeck: async (req, res) => {

    },

    deleteDeck: async (req, res) => {

    }
};