<?php

// VUE
$router->get('/','PageController@index');
$router->get('{any}','PageController@index');

$router->group(['prefix' => 'api'], function ($router){

	// Autenticacion
	$router->post('register', 'AuthController@register');
    $router->post('login', 'AuthController@login');
    $router->post('logout', 'AuthController@logout');
    $router->post('refresh', 'AuthController@refresh');
    $router->post('me', 'AuthController@me');

    // Usuarios
    $router->get('users', 'UserController@index');

    // Configuraciones
    $router->get('configs', 'ConfigsController@index');
    $router->post('configs/update', 'ConfigsController@update');
    
    // Landing
    $router->get('landing', 'LandingPageController@index');
    $router->post('landing', 'LandingPageController@take');
    $router->post('landing/store', 'LandingPageController@store');
    $router->post('landing/update/{id}', 'LandingPageController@update');

    // Servicios
    $router->get('services', 'ServiceController@index');
    $router->post('services', 'ServiceController@store');
    $router->put('services/{id}', 'ServiceController@update');
    $router->delete('services/{id}', 'ServiceController@index');

    // Consultas
    $router->get('querys', 'QueryController@index');
    $router->post('querys', 'QueryController@store');
    $router->put('querys/{id}', 'QueryController@update');
    $router->delete('querys/{id}', 'QueryController@index');

});
