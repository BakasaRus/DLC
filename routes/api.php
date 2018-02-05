<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', 'UserController@index');
Route::get('/users/{user}', 'UserController@show');

Route::get('/subjects', 'SubjectController@index');
Route::get('/subjects/{subject}', 'SubjectController@show');
Route::post('/subjects', 'SubjectController@store');
Route::patch('/subjects/{subject}', 'SubjectController@update');
Route::delete('/subjects/{subject}', 'SubjectController@delete');

Route::get('/tests', 'TestController@index');
Route::get('/tests/{test}', 'TestController@show');
Route::post('/tests', 'TestController@store');
Route::patch('/tests/{test}', 'TestController@update');
Route::delete('/tests/{test}', 'TestController@delete');

Route::get('/questions', 'QuestionController@index');
Route::get('/questions/{question}', 'QuestionController@show');
Route::post('/questions', 'QuestionController@store');
Route::patch('/questions/{question}', 'QuestionController@update');
Route::delete('/questions/{question}', 'QuestionController@delete');