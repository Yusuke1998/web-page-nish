<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Service;

class ServiceController extends Controller
{
	public function __construct()
    {
		#$this->middleware('auth:api', ['except' => ['index', 'show'] ]);
	}

    public function index()
    {
    	$services = Service::orderBy('id', 'DESC')->get();
        return $services;
    }

    public function show($id)
    {
        $service = Service::findOrFail($id);
        return $service;
    }

    public function store(Request $request)
    {
        $service = Service::create($request->all());
    	return $service;
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id)
            ->fill($request->all());
        $service->save();
        return $service;
    }

    public function destroy($id)
    {
    	$service = Service::findOrFail($id);
        $service->delete();
        return response()->json([
            "status" => true
        ]);
    }
}
