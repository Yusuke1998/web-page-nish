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
    $router->get('user/profile/{id}', 'UserController@show');

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
    $router->get('services/{id}', 'ServiceController@show');
    $router->post('services', 'ServiceController@store');
    $router->put('services/{id}', 'ServiceController@update');
    $router->delete('services/{id}', 'ServiceController@destroy');

    // Consultas
    $router->get('queries', 'QueryController@index');
    $router->get('queries/{id}', 'QueryController@show');
    $router->post('queries', 'QueryController@store');
    $router->put('queries/{id}', 'QueryController@update');
    $router->put('queries/{id}/state', 'QueryController@update_state');
    $router->delete('queries/{id}', 'QueryController@destroy');

});
