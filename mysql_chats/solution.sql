SELECT
    chat1.client,
    chat1.timestamp as last_significant_interaction
FROM chats chat1
INNER JOIN chats As chat2
	ON  chat1.ha = chat2.ha
	AND chat1.client = chat2.client
	AND chat1.timestamp > chat2.timestamp
	AND LOWER(chat2.message) = '@startvideo'
WHERE LOWER(chat1.message) = '@stopvideo'
AND chat1.timestamp - chat2.timestamp > 30; 


http://sqlfiddle.com/#!9/4e2fdf/1