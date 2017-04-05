INSERT INTO watch_collection
(make, model, description, image_link)
VALUES
($1, $2, $3, $4)

RETURNING *