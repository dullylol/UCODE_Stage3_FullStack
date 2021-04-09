<?php

class Main extends ControllerInterface
{
    private $view;

    public function __construct($view)
    {
        $this->view = $view;
    }

    public function execute()
    {
        if ($this->view) {
            $this->view->render();
        }
    }
    
}