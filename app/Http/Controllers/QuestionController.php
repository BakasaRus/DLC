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

    public function store()
    {
    	$validated = request()->validate([
    		'body' => 'required',
    		'answer' => 'required',
    		'points' => 'required|integer|min:1',
    		'test_id' => 'required|exists:tests,id'
    	]);
    	\Auth::guard('api')->user()->createdQuestions()->create($validated);
    	return ['message' => 'Success!'];
    }

    public function update(Question $question)
    {
        $validated = request()->validate([
            'body' => 'required',
            'answer' => 'required',
            'points' => 'required|integer|min:1',
            'test_id' => 'required|exists:tests,id'
        ]);
        $question->update($validated);
        return ['message' => 'Success!'];
    }

    public function delete(Question $question)
    {
        $question->delete();
        return ['message' => 'Success!'];
    }
}
