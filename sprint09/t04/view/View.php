<?php

class View
{
    private $htmlFilePath;

    public function __construct($htmlFilePath)
    {
        $this->htmlFilePath = $htmlFilePath;
    }

    public function render()
    {
        ob_clean();
        $file = file_get_contents($this->htmlFilePath);
        if ($file) {
            echo $file;
            return true;
        } else {
            return false;
        }
    }
}
