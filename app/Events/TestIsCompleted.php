<?php

namespace DLC\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use DLC\Test;
use DLC\User;

class TestIsCompleted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $test;
    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Test $test, User $user)
    {
        $this->test = $test;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
