<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Subject;

class SubjectController extends Controller
{
	public function __construct()
	{
		$this->middleware('api');
	}
	
	public function index()
	{
		return Subject::with('author:id,first_name,last_name,middle_name')->get();
	}

	public function show(Subject $subject)
	{
		return $subject->load('author:id,first_name,last_name,middle_name');
	}

	public function store(Request $request)
	{
		$validated = $request->validate([
			'name' => 'required'
		]);
		\Auth::guard('api')->user()->createdSubjects()->create($validated);
		return ['message' => 'Success!'];
	}

	public function update(Request $request, Subject $subject)
	{
		$validated = $request->validate([
			'name' => 'required'
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
