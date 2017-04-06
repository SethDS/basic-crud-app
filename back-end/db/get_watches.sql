SELECT * FROM watches
INNER JOIN watch_info
    ON watches.watch_id = watch_info.watch_id;