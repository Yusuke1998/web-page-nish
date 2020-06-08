<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Query;

class QueryController extends Controller
{
	public function __construct(){
		$this->middleware('auth:api', ['except' => ['index'] ]);
	}

    public function index()
    {
    	$querys = Query::all();
        return $querys;
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
