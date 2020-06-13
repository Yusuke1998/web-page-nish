<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\LandingPage;
use App\User;

class LandingPageController extends Controller {
	public function __construct()
	{
		#$this->middleware('auth', ['except' => ['index', 'take'] ]);
	}

	public function index()
	{
		$landing = LandingPage::OrderBy('id','DESC')->get();
		return $landing;
	}

	public function take(Request $request)
	{
		$landing = LandingPage::OrderBy('id', $request->order)
			->where('active', true)
			->take($request->row)
			->get();
		return $landing;
	}

	public function store(Request $request)
	{
		switch ($request->type) {
			case 'custom':
				$data = [
					'customs'	=> json_encode($request->customs),
					'type'		=> $request->type
				];
				break;
			case 'service':
				$data = [
					'services'	=> json_encode($request->services),
					'type'		=> $request->type
				];
				break;
			case 'query':
				$data = [
					'querys'	=> json_encode($request->querys),
					'type'		=> $request->type
				];
				break;
			case 'blog':
				$data = [
					'blogs'	=> json_encode($request->blogs),
					'type'		=> $request->type
				];
				break;
		}
		$config = LandingPage::create($data);
		return response()->json(['status'=>true, $config]);
	}

	public function update(Request $request, $id)
	{
		dd($request->all());
	}
}
