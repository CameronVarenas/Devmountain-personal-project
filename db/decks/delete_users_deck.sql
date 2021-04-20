DELETE FROM kioku_flashcards
WHERE deck_id = $1;

DELETE FROM kioku_decks
WHERE deck_id = $1 AND user_id = $2;