<?php

function autoload($pClassName) {
    include(__DIR__. '/' . $pClassName. '.php');
}
spl_autoload_register("autoload");

$heroes = new Heroes();

$heroes->find(1);

//echo $heroes;

$heroes->id = 5;
$heroes->name = "Sanya";
$heroes->description = "weafrgsstbgd";
$heroes->race = "sanya";
$heroes->class_role = "healer";
$heroes->save();

$heroes->find(2);
//echo $heroes;

//$heroes->find(5);
//echo $heroes;

$heroes->id = 12;
$heroes->name = "Prrrfresrr";
$heroes->description = "frs";
$heroes->race = "fds";
$heroes->class_role = "healer";
$heroes->save();

echo $heroes;