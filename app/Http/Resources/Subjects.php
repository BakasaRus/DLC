<?php

namespace DLC\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use DLC\User;

class Subjects extends Resource
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
            'name' => $this->name,
            'author' => new Users($this->author)
        ];
    }
}
