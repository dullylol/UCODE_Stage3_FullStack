use ucode_web;
select summa as power, name
FROM
(
    select heroes.name as name, sum(powers.points) AS summa
    from heroes
    JOIN powers ON powers.hero_id = heroes.id
    group by heroes.id
) lol
ORDER BY summa DESC limit 1;
select summa as power, name
FROM
(
    select heroes.name as name, sum(table1.points) AS summa
    from heroes
    JOIN (
        select hero_id, points
        FROM powers
        where type = 'defense'
    ) table1 ON table1.hero_id = heroes.id
    group by heroes.id
) lol
ORDER BY power ASC limit 1;
select summa as power, name
FROM
    (
        select heroes.name as name, sum(powers.points) AS summa
        from heroes
        JOIN
        (
            select hero_id
            from teams
            where name = 'Avengers'
        ) table1 ON table1.hero_id = heroes.id
        JOIN powers ON powers.hero_id = heroes.id
        group by heroes.id
    )lol
ORDER BY power DESC;
select summa as power, name
FROM
    (
        select teams.name as name, sum(powers.points) AS summa
        from teams
        JOIN powers ON powers.hero_id = teams.hero_id
        group by name
    ) lol
ORDER BY power ASC;