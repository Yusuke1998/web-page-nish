<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Network;

class Config extends Model {

    protected $fillable = ['name_web'];

    public function networks(){
        return $this->hasMany(Network::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
