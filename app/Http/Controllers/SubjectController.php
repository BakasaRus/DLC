<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Subject;
use DLC\Http\Resources\Subjects;

class SubjectController extends Controller
{
	public function __construct()
	{
		$this->middleware('api');
	}
	
	public function index()
	{
		return Subjects::collection(Subject::with('author')->get());
	}

	public function show(Subject $subject)
	{
		return new Subjects($subject->load('author'));
	}

	public function store(Request $request)
	{
		$validated = $request->validate([
			'name' => 'required',
			'author_id' => 'required|exists:users,id'
		]);
		//\Auth::guard('api')->user()->createdSubjects()->create($validated);
		Subject::create($validated);
		return ['message' => 'Success!'];
	}

	public function update(Request $request, Subject $subject)
	{
		$validated = $request->validate([
			'name' => 'required',
			'author_id' => 'required|exists:users,id'
		]);
		$subject->update($validated);
		return ['message' => 'Success!'];
	}

	public function delete(Subject $subject)
	{
		$subject->delete();
		return ['message' => 'Success!'];
	}
}
