<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Network;

class Config extends Model {

    protected $fillable = [
    	'logo','title_web','subtitle_web','img_parallax',
	    'title_parallax','subtitle_parallax','text_parallax',
	    'text_footer'
    ];

    public function networks(){
        return $this->hasMany(Network::class);
    }
}
