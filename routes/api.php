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

Route::middleware('auth:api')->get('/subjects', function () {
    return DLC\Subject::all();
});

Route::middleware('auth:api')->post('/subjects', function (Request $request) {
    $validated = $request->validate([
    	'name' => 'required'
    ]);
    DLC\Subject::create($validated);
    return ['message' => 'Success!'];
});