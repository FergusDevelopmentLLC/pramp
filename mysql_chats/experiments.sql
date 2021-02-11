
CREATE OR REPLACE FUNCTION DateDiff (units VARCHAR(30), start_t TIMESTAMP, end_t TIMESTAMP) 
  RETURNS INT AS $$
DECLARE
  diff_interval INTERVAL; 
  diff INT = 0;
  years_diff INT = 0;
BEGIN
  IF units IN ('yy', 'yyyy', 'year', 'mm', 'm', 'month') THEN
    years_diff = DATE_PART('year', end_t) - DATE_PART('year', start_t);

    IF units IN ('yy', 'yyyy', 'year') THEN
      -- SQL Server does not count full years passed (only difference between year parts)
      RETURN years_diff;
    ELSE
      -- If end month is less than start month it will subtracted
      RETURN years_diff * 12 + (DATE_PART('month', end_t) - DATE_PART('month', start_t)); 
    END IF;
  END IF;

  -- Minus operator returns interval 'DDD days HH:MI:SS'  
  diff_interval = end_t - start_t;

  diff = diff + DATE_PART('day', diff_interval);

  IF units IN ('wk', 'ww', 'week') THEN
    diff = diff/7;
    RETURN diff;
  END IF;

  IF units IN ('dd', 'd', 'day') THEN
    RETURN diff;
  END IF;

  diff = diff * 24 + DATE_PART('hour', diff_interval); 

  IF units IN ('hh', 'hour') THEN
    RETURN diff;
  END IF;

  diff = diff * 60 + DATE_PART('minute', diff_interval);

  IF units IN ('mi', 'n', 'minute') THEN
    RETURN diff;
  END IF;

  diff = diff * 60 + DATE_PART('second', diff_interval);

  RETURN diff;
END;
$$ LANGUAGE plpgsql;

--=======================================================================================
--=======================================================================================
--=======================================================================================
--=======================================================================================
--=======================================================================================

drop table activity;

CREATE TABLE activity (
  id INTEGER,
  statusName VARCHAR(255),
  timestamp timestamp(6) without time zone NOT NULL
);

COPY activity(id, statusName, timestamp)
FROM '/tmp/activity.csv'
DELIMITER ','
CSV HEADER;

select * from activity;

SELECT DATEDIFF('second', '2011-12-30 08:54:55'::timestamp, '2011-12-30 08:56:10'::timestamp);


SELECT
    t1.id,
    t1.statusName,
    AVG(DATEDIFF('second', t1.timestamp, t2.timestamp)) As AvgTime
FROM        activity As t1
INNER JOIN  activity As t2
    ON  t1.id = t2.id
    AND t1.timestamp < t2.timestamp
    AND NOT EXISTS(Select * From activity As t3
                   Where t3.id = t1.id
                     And t3.timestamp < t2.timestamp
                     And t3.timestamp > t1.timestamp)
GROUP BY t1.id, t1.statusName;

SELECT
    t1.id,
    t1.statusName,
    t1.timestamp,
    t2.timestamp,
    DATEDIFF('second', t1.timestamp, t2.timestamp) as time_diff
FROM        activity As t1
INNER JOIN  activity As t2
    ON  t1.id = t2.id
    AND t1.timestamp < t2.timestamp
    AND NOT EXISTS(
                   select * 
		   from activity As t3
                   where t3.id = t1.id
                   and t3.timestamp < t2.timestamp
                   and t3.timestamp > t1.timestamp
                   );
--GROUP BY t1.id, t1.statusName;

--=======================================================================================
--=======================================================================================
--=======================================================================================
--=======================================================================================
--=======================================================================================


CREATE TABLE chat (
  id SERIAL,
  ha VARCHAR(255),
  client VARCHAR(255),
  message VARCHAR(255),
  timestamp bigint,
  PRIMARY KEY (id)
);

COPY chat(ha, client, message, timestamp)
FROM '/tmp/chat.txt'
DELIMITER '|'
CSV HEADER;

select * from chat;

SELECT
    chat.id,
    chat.ha,
    chat.client,
    chat.message,
    chat.timestamp
FROM chat
WHERE LOWER(message) = '@stopvideo';

SELECT
    chat1.client,
    chat1.timestamp as last_significant_interaction
FROM chat chat1
INNER JOIN chat As chat2
	ON  chat1.ha = chat2.ha
	AND chat1.client = chat2.client
	AND chat1.timestamp > chat2.timestamp
	AND LOWER(chat2.message) = '@startvideo'
WHERE LOWER(chat1.message) = '@stopvideo'
AND chat1.timestamp - chat2.timestamp > 30;


# similar problem

https://stackoverflow.com/questions/26468166/sql-timestamp-difference-between-rows-based-on-additional-comments-columns

id,statusName,timestamp
10459,Waiting,2013-03-16 12:03:17.000
10459,Paired,2013-03-16 12:29:50.000
10459,Shopping,2013-03-16 12:29:22.233
10459,CheckedOut,2013-03-16 14:01:24.000
10461,Alterations,1988-01-02 01:47:07.000
10461,CheckedOut,2013-03-16 14:42:25.000
10461,Paired,2013-03-16 12:29:31.000
10461,Shopping,2013-03-16 12:29:01.437
10461,Waiting,2013-03-16 11:52:18.000
10462,Waiting,2013-03-16 12:19:35.000
10462,Shopping,2013-03-16 12:59:01.197
10462,Paired,2013-03-16 12:59:28.000
10462,CheckedOut,2013-03-16 14:35:44.000
10463,CheckedOut,2013-03-16 12:22:20.000
10463,Waiting,2013-03-16 10:44:14.000
10463,Paired,2013-03-16 11:00:37.000
10463,Shopping,2013-03-16 11:00:23.063
10464,Waiting,2013-03-16 10:44:03.000
10464,Paired,2013-03-16 10:59:32.000
10464,Shopping,2013-03-16 10:59:02.560
10464,Alterations,1988-01-02 00:44:02.000
10464,CheckedOut,2013-03-16 13:18:21.000
10465,CheckedOut,2013-03-16 11:54:34.000
10465,Waiting,2013-03-16 09:44:13.000
10465,Paired,2013-03-16 10:08:05.000
10465,Shopping,2013-03-16 10:10:58.323
10466,Waiting,2013-03-16 12:13:51.000
10466,Shopping,2013-03-16 12:46:56.207
10466,Paired,2013-03-16 12:46:43.000
10467,Shopping,2013-03-16 10:08:06.553
10467,Paired,2013-03-16 10:04:49.000
10467,Waiting,2013-03-16 09:41:03.000

CREATE TABLE activity (
  id SERIAL,
  statusName VARCHAR(255),
  timestamp timestamp(6) without time zone NOT NULL,
  PRIMARY KEY (id)
);

-- inner join on the same table
SELECT
    t1.id,
    t1.statusName,
    AVG(DATEDIFF(second, t1.timestamp, t2.timestamp)) As AvgTime
FROM        YourTable As t1
INNER JOIN  YourTable As t2
    ON  t1.id = t2.id
    AND t1.timestamp < t2.timestamp
    AND NOT EXISTS(Select * From YourTable As t3
                   Where t3.id = t1.id
                     And t3.timestamp < t2.timestamp
                     And t3.timestamp > t1.timestamp)
GROUP BY t1.id, t1.statusName;

































CREATE TABLE chat (
  id SERIAL,
  ha VARCHAR(255),
  client VARCHAR(255),
  message VARCHAR(255),
  timestamp bigint,
  PRIMARY KEY (id)
);

ha,client,message,timestamp
Lily,Adam,@startVideo,1563733280
Ava,Bob,@startVideo,1563733283
Susan,Ruth,@startVideo,1563733290
Lily,Adam,Good to see you again!,1563733292
Lily,Adam,Sure,I can do that for you.,1563733310
Lily,Adam,All set! No worries at all.,1563733330
Lily,Adam,@stopVideo,1563733334
Ava,Bob,Yes,that is so funny! haha!,1563733335
Ava,Bob,@stopVideo,1563733356
Susan,Bob,@StartVideo,1563733357
Susan,Bob,@stopVideo,1563733370
Susan,Ruth,Hello,Ruth,are you here?,1563733371
Susan,Ruth,@stopVideo,1563733378






