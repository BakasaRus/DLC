<?php

namespace DLC\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Users extends Resource
{
	/**
	 * Transform the resource collection into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array
	 */
	public function toArray($request)
	{
		return [
			'id' => $this->id,
			'login' => $this->login,
			'email' => $this->when(\Auth::guard('api')->user()->isAdmin(), $this->email),
			'role' => $this->role,
			'first_name' => $this->first_name,
			'middle_name' => $this->middle_name,
			'last_name' => $this->last_name,
			'full_name' => $this->last_name . ' ' . $this->first_name . ' ' . $this->middle_name,
			// We should count earned points somehow
			'test_info' => $this->when($this->test, [
				'status' => $this->test['status'],
				'max_points' => $this->questions
										->where('test_id', $this->test['test_id'])
										->sum('points'),
				'points' => $this->questions
									->where('test_id', $this->test['test_id'])
									->filter(function($value) {
										return $value->pivot->answer == $value->answer;
									})
									->sum('points'),
			]),
			'registration_date' => $this->when(\Auth::guard('api')->user()->isAdmin(), $this->created_at),
		];
	}
}
