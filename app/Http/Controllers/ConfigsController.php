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
            ->load('networks');
        return $configs;
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'title_web'         =>  'required|string',
            'title_parallax'    =>  'required|string',
            'text_footer'       =>  'required|string',
            'subtitle_web'      =>  'string',
            'subtitle_parallax' =>  'string',
            'text_parallax'     =>  'string'
        ]);
        $config = Config::first();
        $config->update([
            'title_web'         =>  $request->title_web,
            'title_parallax'    =>  $request->title_parallax,
            'text_footer'       =>  $request->text_footer,
            'subtitle_web'      =>  $request->subtitle_web,
            'subtitle_parallax' =>  $request->subtitle_parallax,
            'text_parallax'     =>  $request->text_parallax,
        ]);
        if ($request->hasFile('img_parallax')) {
            $file = $request->file('img_parallax');
            $path = "assets/parallax/";
            $img = 'changed-img-parallax.'.$file->getClientOriginalExtension();
            $file->move($path, $img);
            $pathImg = $path.$img;
            $config->update([
                'img_parallax' =>   $pathImg
            ]);
        }
        return Config::first()->load('networks');
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
