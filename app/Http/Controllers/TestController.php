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
    	return Test::all();
    }
}
