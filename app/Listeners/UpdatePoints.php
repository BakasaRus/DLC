<?php

namespace DLC\Listeners;

use DLC\Events\QuestionIsUpdated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use DLC\Test;

class UpdatePoints
{
	/**
	 * Create the event listener.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

	/**
	 * Handle the event.
	 *
	 * @param  QuestionIsUpdated  $event
	 * @return void
	 */
	public function handle(QuestionIsUpdated $event)
	{
		$test = $event->test;
		$test->users->each(function ($item, $key) use ($test){
			$max_points = $item->questions
							->where('test_id', $test->id)
							->sum('points');
			$points = $item->questions
							->where('test_id', $test->id)
							->filter(function($value) {
								return $value->pivot->answer == $value->answer;
							})
							->sum('points');
			$test->users()->updateExistingPivot($item->id, compact(['points', 'max_points']));
		});
	}
}
