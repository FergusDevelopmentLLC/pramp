# The healthcare tech company has a MySQL table, named `chats`, recording all
# messages between Health Advocates ("HAs") and clients.

# The schema of table `chats` is as follows:

create table chats
(id int auto_increment primary key,
ha varchar(10),
client varchar(10),
message varchar(255),
timestamp bigint);

# The data of table `chats` is below

insert into chats
values
(1, 'Lily', 'Adam', '@startVideo', 1563733280),
(2, 'Ava', 'Bob', '@startVideo', 1563733283),
(3, 'Susan', 'Ruth', '@startVideo', 1563733290),
(4, 'Lily', 'Adam', 'Good to see you again!', 1563733292),
(5, 'Lily', 'Adam', 'Sure, I can do that for you.', 1563733310),
(6, 'Lily', 'Adam', 'All set! No worries at all.', 1563733330),
(7, 'Lily', 'Adam', '@stopVideo', 1563733334),
(8, 'Ava', 'Bob', 'Yes, that is so funny! haha!', 1563733335),
(9, 'Ava', 'Bob', '@stopVideo', 1563733356),
(10, 'Susan', 'Bob', '@StartVideo', 1563733357),
(11,'Susan', 'Bob', '@stopVideo', 1563733370),
(12,'Susan', 'Ruth', 'Hello, Ruth, are you here?', 1563733371),
(13,'Susan', 'Ruth', '@stopVideo', 1563733378);

# A message can be either a command (e.g., @startVideo, and @stopVideo) or
# a speech phrase sent from the HA to the client. An "interaction" between an
# HA and a client is defined as the messages between that HA/client from
# '@startVideo' to '@stopVideo' (inclusive).

# For example, using the above values, the interaction between Lily and Adam
# is as follows:
# (1, 'Lily', 'Adam', '@startVideo', 1563733280),
# (4, 'Lily', 'Adam', 'Good to see you again!', 1563733292),
# (5, 'Lily', 'Adam', 'Sure, I can do that for you.', 1563733310),
# (6, 'Lily', 'Adam', 'All set! No worries at all.', 1563733330),
# (7, 'Lily', 'Adam', '@stopVideo', 1563733334)

# And the interaction between Ava and Bob is as follows:
# (2, 'Ava', 'Bob', '@startVideo', 1563733283),
# (8, 'Ava', 'Bob', 'Yes, that is so funny! haha!', 1563733335),
# (9,'Ava', 'Bob', '@stopVideo', 1563733356)

# An interaction between an HA and a client is "significant" if its duration is
# at least 30 seconds.

# For each client, please output the timestamp of @stopVideo of the
# last significant interaction, ordering by client alphabetically.

# Based the above data, your query should output the following:
# client last_significant_interaction
# Adam 1563733334
# Bob 1563733356
# Ruth 1563733378

# YOUR SOLUTION MYSQL QUERY HERE

https://stackoverflow.com/questions/26468166/sql-timestamp-difference-between-rows-based-on-additional-comments-columns

cinderellaID statusName                timestamp
------------ ------------------------- -----------------------
10459        Waiting                   2013-03-16 12:03:17.000
10459        Paired                    2013-03-16 12:29:50.000
10459        Shopping                  2013-03-16 12:29:22.233
10459        Checked Out               2013-03-16 14:01:24.000
10461        Alterations               1988-01-02 01:47:07.000
10461        Checked Out               2013-03-16 14:42:25.000
10461        Paired                    2013-03-16 12:29:31.000
10461        Shopping                  2013-03-16 12:29:01.437
10461        Waiting                   2013-03-16 11:52:18.000
10462        Waiting                   2013-03-16 12:19:35.000
10462        Shopping                  2013-03-16 12:59:01.197
10462        Paired                    2013-03-16 12:59:28.000
10462        Checked Out               2013-03-16 14:35:44.000
10463        Checked Out               2013-03-16 12:22:20.000
10463        Waiting                   2013-03-16 10:44:14.000
10463        Paired                    2013-03-16 11:00:37.000
10463        Shopping                  2013-03-16 11:00:23.063
10464        Waiting                   2013-03-16 10:44:03.000
10464        Paired                    2013-03-16 10:59:32.000
10464        Shopping                  2013-03-16 10:59:02.560
10464        Alterations               1988-01-02 00:44:02.000
10464        Checked Out               2013-03-16 13:18:21.000
10465        Checked Out               2013-03-16 11:54:34.000
10465        Waiting                   2013-03-16 09:44:13.000
10465        Paired                    2013-03-16 10:08:05.000
10465        Shopping                  2013-03-16 10:10:58.323
10466        Waiting                   2013-03-16 12:13:51.000
10466        Shopping                  2013-03-16 12:46:56.207
10466        Paired                    2013-03-16 12:46:43.000
10467        Shopping                  2013-03-16 10:08:06.553
10467        Paired                    2013-03-16 10:04:49.000
10467        Waiting                   2013-03-16 09:41:03.000

SELECT
    t1.cinderellaID,
    t1.statusName,
    AVG(DATEDIFF(second, t1.timestamp, t2.timestamp)) As AvgTime
FROM        YourTable As t1
INNER JOIN  YourTable As t2
    ON  t1.cinderellaID = t2.cinderellaID
    AND t1.timestamp < t2.timestamp
    AND NOT EXISTS(Select * From YourTable As t3
                   Where t3.cinderellaID = t1.cinderellaID
                     And t3.timestamp < t2.timestamp
                     And t3.timestamp > t1.timestamp)
GROUP BY t1.cinderellaID, t1.statusName

