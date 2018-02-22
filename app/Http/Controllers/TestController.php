<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Test;
use DLC\Http\Resources\Tests;
use DLC\Http\Resources\Questions;

class TestController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api');
	}
	
	public function index()
	{
		return Tests::collection(Test::all());
	}

	public function show(Test $test)
	{
		return new Tests($test->load(['questions.users', 'author', 'users']));
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
		// If we access test again, we should clear our previous answers
		request()->user()->questions()->detach($test->questions);
		$test->users()->syncWithoutDetaching([request()->user()->id, ['status' => 1]]);
		$questions = $test->questions->random($test->questions_count)->shuffle();
		request()->user()->questions()->attach($questions, ['answer' => '']);
		return Questions::collection($questions);
	}

	public function end(Test $test)
	{
		$test->users()->syncWithoutDetaching([request()->user()->id, ['status' => 2]]);
		$answers = collect(request('answers'));
		$answers = $answers->mapWithKeys(function($item) {
			return [$item['id'] => ['answer' => $item['answer']]];
		});
		request()->user()->questions()->syncWithoutDetaching($answers);
		return $answers;
	}
}
