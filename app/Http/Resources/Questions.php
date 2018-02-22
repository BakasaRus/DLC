<?php

namespace DLC\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Questions extends Resource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array
	 */
	public function toArray($request)
	{
		return [
			'id' => $this->id,
			'body' => $this->body,
			'answer' => $this->answer,
			'user_answer' => $this->when($this->pivot, $this->pivot['answer']),
			'points' => $this->points,
			'author_id' => $this->author_id,
			'author' => new Users($this->whenLoaded('author')),
			'test_id' => $this->test_id,
			'test' => new Tests($this->whenLoaded('test')),
			'created_at' => $this->created_at
		];
	}
}
