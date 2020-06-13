<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Query extends Model {

    protected $fillable = [
    	'name','email','phone1','phone2','address',
    	'state', 'content', 'images', 'user_id'
    ];
}
