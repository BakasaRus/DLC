<?php

namespace DLC;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    public function questions()
    {
    	return $this->hasMany(Question::class);
    }

    public function subject()
    {
    	return $this->belongsTo(Subject::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
