<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');

Route::group(array('prefix' => 'api'), function() 
{
	Route::get('/cities/{id}', 'ApiController@getCity');
	Route::get('/cities', 'ApiController@getCities');
	Route::get('/categories', 'ApiController@getCategories');
	Route::get('/categories/{id}', 'ApiController@getCategory');
	Route::post('/insertcity', 'ApiController@insertCity');
	Route::post('/submitproblem', 'ApiController@submitProblem');
	//Route::post('/checkcountry', 'ApiController@checkCountry');
});


?>