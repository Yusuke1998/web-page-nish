<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Service;

class ServiceController extends Controller
{
	public function __construct(){
		$this->middleware('auth:api', ['except' => ['index'] ]);
	}

    public function index()
    {
    	$services = Service::all();
        return $services;
    }

    public function store(Request $request)
    {
    	dd($request->all());
    }

    public function update(Request $request, $id)
    {
    	dd($request->all());
    }

    public function destroy($id)
    {
    	dd($id);
    }
}
