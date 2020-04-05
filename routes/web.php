<?php

// VUE
$router->get('/','PageController@index');
$router->get('{any}','PageController@index');

$router->group([
    'prefix'		=> 'api'
], function ($router){
	$router->post('register', 'AuthController@register');
    $router->post('login', 'AuthController@login');
    $router->post('logout', 'AuthController@logout');
    $router->post('refresh', 'AuthController@refresh');
    $router->post('me', 'AuthController@me');
});
