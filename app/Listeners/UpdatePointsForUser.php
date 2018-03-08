<?php

namespace DLC\Listeners;

use DLC\Events\TestIsCompleted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdatePointsForUser
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
     * @param  TestIsCompleted  $event
     * @return void
     */
    public function handle(TestIsCompleted $event)
    {
        $user = $event->user;
        $test = $event->test;
        $max_points = $user->questions
                        ->where('test_id', $test->id)
                        ->sum('points');
        $points = $user->questions
                        ->where('test_id', $this->test['test_id'])
                        ->filter(function($value) {
                            return $value->pivot->answer == $value->answer;
                        })
                        ->sum('points');
        $test->users()->updateExistingPivot($key, compact($points, $max_points));
    }
}
