<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::post('/quote', [
	'uses' => 'QuoteController@postQuote'
]);

Route::get('/quotes', [
	'uses' => 'QuoteController@getQuotes'
]);

Route::put('/quote/{id}', [
	'uses' => 'QuoteController@putQuote'
]);

Route::delete('/quote/{id}', [
	'uses' => 'QuoteController@deleteQuote'
]);

