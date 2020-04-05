<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Config;

class Network extends Model {

    protected $fillable = [
    	'name','url','description'
    ];

    public function config(){
        return $this->belongsTo(Config::class);
    }
}
