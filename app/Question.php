<?php

namespace DLC;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['body', 'answer', 'points', 'test_id', 'author_id'];

    public function test()
    {
    	return $this->belongsTo(Test::class);
    }

    public function author()
    {
    	return $this->belongsTo(User::class, 'author_id');
    }

    public function users()
    {
    	return $this->belongsToMany(User::class)->withPivot('answer');
    }
}
