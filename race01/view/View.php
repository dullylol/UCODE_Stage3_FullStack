<?php

class View
{
    public $htmlFilePath;
    public $file;

    public function __construct($htmlFilePath)
    {
        $this->htmlFilePath = $htmlFilePath;
        $this->file = file_get_contents($this->htmlFilePath);
    }

    public function replace($str1, $str2)
    {
        if ($this->file) {
            $this->file = str_replace($str1, $str2, $this->file);
        }
    }

    public function render()
    {
        ob_clean();

        if ($this->file) {
            echo $this->file;
            return true;
        } else {
            return false;
        }
    }
}
