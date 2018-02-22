<?php

namespace DLC;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	use HasApiTokens, Notifiable;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'login', 'email', 'password', 'first_name', 'last_name', 'middle_name'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token',
	];

	public function isAdmin()
	{
		return $this->role == 2;
	}

	public function isEditor()
	{
		return $this->role >= 1;
	}

	public function createdSubjects()
	{
		return $this->hasMany(Subject::class, 'author_id');
	}

    public function tests()
    {
        return $this->belongsToMany(Test::class)->withPivot('status');
    }

	public function createdTests()
	{
		return $this->hasMany(Test::class, 'author_id');
	}

	public function questions()
	{
		return $this->belongsToMany(Question::class)->withPivot('answer');
	}

	public function createdQuestions()
	{
		return $this->hasMany(Question::class, 'author_id');
	}
}
