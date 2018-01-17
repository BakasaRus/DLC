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
		return Subject::all();
	}

	public function store(Request $request)
	{
		$validated = $request->validate([
			'name' => 'required'
		]);
		Subject::create($validated);
		return ['message' => 'Success!'];
	}
}
