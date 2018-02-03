<?php

namespace DLC\Http\Controllers;

use Illuminate\Http\Request;
use DLC\Question;
use DLC\Http\Resources\Questions;

class QuestionController extends Controller
{
    public function index()
    {
    	return Questions::collection(Question::all());
    }
}
