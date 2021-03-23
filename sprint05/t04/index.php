<?php

function total(float $addCount, float $addPrice, float $currentTotal = 0) : float {
    return $currentTotal + $addCount * $addPrice;
}