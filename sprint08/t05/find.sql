USE ucode_web;
SELECT name
    FROM (
        SELECT *
        FROM (
            SELECT * FROM ( 
                SELECT * FROM heroes
                WHERE id = (SELECT MIN(id) FROM heroes)
            ) inner3
            WHERE class_role = 'tankman' or class_role = 'healer'
        ) inner2
        WHERE name LIKE '%a%'
    ) inner1
    WHERE race <> "human";
