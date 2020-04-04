<?php

// VUE
$router->get('/','PageController@index');
$router->get('{any}','PageController@index');
