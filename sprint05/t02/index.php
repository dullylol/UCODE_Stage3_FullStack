<?php

function checkDivision(int $start = 1, int $end = 60) {
    for ($i = $start; $i <= $end; $i++) {
        echo "The number $i ";

        if ($i % 2 == 0) {
            echo "is divisible by 2";
        }
        if ($i % 3 == 0) {
            echo ($i % 2 == 0) ? ", is divisible by 3" : "is divisible by 3";
        }
        if ($i % 10 == 0) {
            echo ($i % 2 == 0 || $i % 3 == 0) ? ", is divisible by 10" : "is divisible by 10";
        }
        if ($i % 2 != 0 && $i % 3 != 0 && $i % 10 != 0) {
            echo "-";
        }
        
        echo "\n";
    }

}
