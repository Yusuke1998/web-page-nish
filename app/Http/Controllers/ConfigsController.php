<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Config;
use App\User;

class ConfigsController extends Controller
{
	public function __construct(){
		// $this->middleware('auth:api', ['except' => ['index'] ]);
	}

    public function index()
    {
    	$configs = Config::first()
                    ->load('networks');
        return $configs;
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'title_web'         =>  'required|string',
            'subtitle_web'      =>  'required|string',
            'title_parallax'    =>  'required|string',
            'subtitle_parallax' =>  'required|string',
            'text_parallax'     =>  'required|string',
            'text_footer'       =>  'required|string'
        ]);

        $config = Config::first();
        $config->update($request->except(['networks','img_parallax']));
        $config->save();
    	$config = Config::first()->load('networks');

        return $config;
    }

    public function update_img(Request $request)
    {
        $this->validate($request, [
            'img_parallax'  =>  'required|string',
        ]);

        $config = Config::first();
        $config->update([
            'img_parallax'  =>   $request->img_parallax
        ]);
        $config->save();
        $config = Config::first()->load('networks');

        return $config;
    }
}
