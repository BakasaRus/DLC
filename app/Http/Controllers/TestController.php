<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Test;
use DLC\Http\Resources\Tests;

class TestController extends Controller
{
	public function __construct()
	{
		$this->middleware('api');
	}
	
	public function index()
	{
		return Tests::collection(Test::all());
	}

	public function show(Test $test)
	{
		return new Tests($test->load(['questions', 'author']));
	}

	public function store(Request $request)
	{
		$validated = $request->validate([
			'name' => 'required',
			'questions_count' => 'required|integer|min:1',
			'subject_id' => 'required|integer|min:1'
		]);
		\Auth::guard('api')->user()->createdTests()->create($validated);
		//Subject::create($validated);
		return ['message' => 'Success!'];
	}
}
