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