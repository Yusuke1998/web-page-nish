<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class LandingPage extends Model {

    protected $fillable = [
    	'customs', 'blogs', 'querys', 'services', 'type', 'active'
    ];
}