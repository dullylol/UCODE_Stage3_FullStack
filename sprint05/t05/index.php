<?php

class StrFrequency
{

    public function __construct(string $str)
    {
        $this->str = $str;
    }

    public function letterFrequencies()
    {
        $upperStr = strtoupper($this->str);
        $alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $letterFrequencies = array();

        for ($i = 0; $i < strlen($alphabet); $i++) {
            $count = 0;
            for ($j = 0; $j < strlen($upperStr); $j++) {
                if ($alphabet[$i] == $upperStr[$j]) {
                    $count++;
                }
            }
            if ($count != 0) {
                $letterFrequencies[$alphabet[$i]] = $count;
            }
        }
        return $letterFrequencies;
    }

    public function wordFrequencies()
    {
        return array_count_values(str_word_count(strtoupper($this->clearString()), 1));
    }

    public function reverseString(): string
    {
        return strrev($this->clearString());
    }

    private function clearString(): string
    {
        $res_str = $this->str;
        for ($i = 0; $i < strlen($res_str); $i++) {
            if (($res_str[$i] > "Z" || $res_str[$i] < "A") && ($res_str[$i] > "z" || $res_str[$i] < "a")) {
                $res_str[$i] = " ";
            }
        }
        return $res_str;
    }
}
