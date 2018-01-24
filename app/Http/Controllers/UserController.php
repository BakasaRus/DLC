<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\User;
use DLC\Http\Resources\Users;

class UserController extends Controller
{
	public function __construct()
	{
		$this->middleware('api');
	}
	
    public function index()
    {
    	return Users::collection(User::all());
    }
}
