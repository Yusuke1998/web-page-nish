<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\User;

class Person extends Model {

    protected $fillable = [
    	'firstname','lastname','identity', 'genere', 'city',
    	'state', 'municipality', 'country', 'photo', 'address', 'phone'
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
