<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Subject;
use DLC\Http\Resources\Subjects;

class SubjectController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api');
	}
	
	public function index()
	{
		switch (request()->user()->role) {
			case 2:
				return Subjects::collection(Subject::with('author')->get());
				break;
			case 1:
				return Subjects::collection(request()->user()->createdSubjects->load('author'));
				break;
			default:
				return new Subjects();
				break;
		}
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
