<?php

class NotePad
{
    private $notes;

    public function __construct($notes)
    {
        $this->notes = $notes;
    }

    public function __toString()
    {
        $str = '<ul>';

        if ($this->notes) {
            foreach ($this->notes as $note) {
                $str .= '<li><a href="?file=' . 
                $note->getName() . '">' . 
                $note->getDate() . ' > ' . 
                $note->getName() . '</a> <a href="?file=DELETE_' . 
                $note->getDate() . '">DELETE</a></li>';
            }
        }

        $str .= '</ul>';

        return $str;
    }

    public function __serialize(): array
    {
        return ["nodes" => $this->nodes];
    }

    public function __unserialize(array $data): void
    {
        $this->nodes = $data["nodes"];
    }

}