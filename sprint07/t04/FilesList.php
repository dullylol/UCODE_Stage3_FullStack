<?php

class FilesList
{
    private $dir;

    public function __construct($dir)
    {
        $this->dir = $dir;
    }

    public function toList()
    {
        if (file_exists($this->dir)) {
            $files = scandir($this->dir);
        }

        $str = '<ul>';
        if (count($files) > 2) {
            foreach ($files as $file) {
                if ($file == "." || $file == "..") {
                    continue;
                }
                $str .= '<li><a href="?file=' . $file . '">' . $file . '</a></li>';
            }
        }

        $str .= '</ul>';

        return $str;

    }

}
