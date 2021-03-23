<?php

function firstUpper(?string $str) : string {
    return ucfirst(strtolower(rtrim(ltrim($str))));
}
