<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Config;
use App\User;

class ConfigsController extends Controller
{
	public function __construct(){
		$this->middleware('auth:api', ['except' => ['index'] ]);
	}

    public function index()
    {
    	$configs = Config::first()
    				->load('networks','user');
        return $configs;
    }

    public function update(Request $request)
    {
    	$config::first();
        return $request->all();
    }
}
