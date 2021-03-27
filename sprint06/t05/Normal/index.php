<?php namespace Space\Normal;

function calculate_time()
{
    $time = '1939-01-01 00:00:00';

    $interval = date_diff(date_create($time), date_create('now'));
    $interval->format('%y years %M months %D days');

    return $interval;
}
