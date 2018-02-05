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
			'subject_id' => 'required|integer|min:1',
			'author_id' => 'required|exists:users,id'
		]);
		Test::create($validated);
		return ['message' => 'Success!'];
	}

	public function update(Test $test)
	{
		$validated = request()->validate([
			'name' => 'required',
			'questions_count' => 'required|integer|min:1',
			'subject_id' => 'required|integer|min:1',
			'author_id' => 'required|exists:users,id'
		]);
		$test->update($validated);
		return ['message' => 'Success!'];
	}

	public function delete(Test $test)
	{
		$test->delete();
		return ['message' => 'Success!'];
	}

	public function start(Test $test)
	{
		$questions = $test->questions->random($test->questions_count)->shuffle();
		\Auth::guard('api')->user()->questions->attach($questions);
		return $questions;
	}

	public function end()
	{
		
	}
}
