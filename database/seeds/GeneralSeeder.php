<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Models\Person;
use App\Models\Config;
use App\Models\Network;
use Illuminate\Support\Facades\Hash;

class GeneralSeeder extends Seeder
{
    public function run()
    {
    	$person = Person::create([
        	'firstname'		=>	'jhonny jose',
        	'lastname'		=>	'perez martinez',
        	'identity'		=>	'26039408'
        ]);

        $user = User::create([
        	'name'		=>	'yusuke1998',
        	'email'		=>	'jhonny@jhonny.com',
        	'password'	=>	app('hash')->make('jhonny'),
        	'rol'		=>	'admin',
        	'person_id'	=>	$person->id
        ]);

        $conf = Config::create([
        	'title_web'	=>	'My New Web'
        ]);

        $netw = DB::table('networks')->insert([
	        [
	        	'name'		=> 'facebook',
	        	'url'		=> 'facebook.com/jhonny',
	        	'config_id'	=> $conf->id
	        ],
	        [
	        	'name'		=> 'twitter',
	        	'url'		=> 'twitter.com/jhonny',
	        	'config_id'	=> $conf->id
	        ],
	        [
	        	'name'		=> 'youtube',
	        	'url'		=> 'youtube.com/jhonny',
	        	'config_id'	=> $conf->id
	        ],
	        [
	        	'name'		=> 'instagram',
	        	'url'		=> 'instagram.com/jhonny',
	        	'config_id'	=> $conf->id
	        ]
	    ]);
    }
}
