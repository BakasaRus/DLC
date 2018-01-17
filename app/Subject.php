<?php

namespace DLC;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
	protected $fillable = ['name'];

	public function tests()
	{
		return $this->hasMany(Test::class);
	}

	public function author()
	{
		return $this->belongsTo(User::class, 'author_id');
	}
}
