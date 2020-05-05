<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\User;

class Person extends Model {

    protected $fillable = [
    	'firstname','lastname','identity'
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
