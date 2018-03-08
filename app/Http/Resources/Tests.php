<?php

namespace DLC\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Tests extends Resource
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
			'name' => $this->name,
			'author_id' => $this->author_id,
			'subject_id' => $this->subject_id,
			'author' => new Users($this->whenLoaded('author')),
			'subject' => new Subjects($this->subject),
			'questions_count' => $this->questions_count,
			'questions' => Questions::collection($this->whenLoaded('questions')),
			'users' => Users::collection($this->whenLoaded('users')),
			'test_info' => $this->when($this->test, [
				'status' => $this->test['status'],
				'max_points' => $this->test['max_points'],
				'points' => $this->test['points'],
			]),
			'created_at' => $this->created_at
		];
	}
}
