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
			'created_at' => $this->created_at
		];
	}
}
