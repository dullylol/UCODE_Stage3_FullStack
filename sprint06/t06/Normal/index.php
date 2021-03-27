<?php namespace Space\Normal;

function calculate_time()
{
    $time = '1939-01-01 00:00:00';

    $interval = date_diff(date_create($time), date_create('now'));
    $interval->format('%y years %M months %D days');

    return $interval;
}

$time = calculate_time();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>
<body>
    <p><?php echo "In real life you were absent for " . $time->format("%Y") . " years, " . $time->format("%m") . " months, " . $time->format("%d") . " days";?></p></body>

</html>
