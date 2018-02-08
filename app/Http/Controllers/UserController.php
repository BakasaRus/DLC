<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\User;
use DLC\Http\Resources\Users;

class UserController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api');
	}
	
	public function index()
	{
		return Users::collection(User::whereIn('role', request('role') ?? [0, 1, 2])->get());
	}
}
