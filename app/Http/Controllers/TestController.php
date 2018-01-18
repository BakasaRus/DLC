<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Test;

class TestController extends Controller
{
	public function __construct()
	{
		$this->middleware('api');
	}
	
	public function index()
	{
		return Test::with(['author:id,first_name,last_name,middle_name', 'subject:id,name'])->get();
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
