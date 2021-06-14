SELECT *
FROM (
  SELECT deck_id, COUNT(card_id) AS card_amount
  FROM kioku_flashcards
  WHERE deck_id = $1
  GROUP BY deck_id
  ) kioku_flashcards
JOIN kioku_decks ON kioku_flashcards.deck_id = kioku_decks.deck_id;