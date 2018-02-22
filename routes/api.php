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

Route::middleware('auth:api')->get('/user/tests', function (Request $request) {
    return DLC\Http\Resources\Tests::collection($request->user()->tests);
});

Route::middleware('auth:api')->get('/user/tests/{test}', 'TestController@start');
Route::middleware('auth:api')->post('/user/tests/{test}', 'TestController@end');

Route::middleware('auth:api')->get('/logout', function (Request $request) {
    $request->user()->token()->revoke();
    return ['message' => 'Success!'];
});

Route::middleware('auth:api')->get('/dashboard', function () {
	return [
		'tests' => DLC\Test::count(),
		'subjects' => DLC\Subject::count(),
		'questions' => DLC\Question::count()
	];
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