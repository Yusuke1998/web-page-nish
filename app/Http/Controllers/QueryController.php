<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Query;

class QueryController extends Controller
{
	public function __construct()
    {
		#$this->middleware('auth:api');
	}

    public function index()
    {
        $user = \Auth::User();
        if ($user->rol !== 'admin') {
            return Query::where('user_id', $user->id)
                ->orderBy('id', 'DESC')->get();
        }
        return Query::orderBy('id', 'DESC')->get();

    }

    public function show($id)
    {
        return Query::findOrFail($id);
    }

    public function store(Request $request)
    {
        $images = '';
        if (isset($request->attachments)) {
            foreach ($request->attachments as $file) {
                $path = "assets/queries/";
                $img = time().'.'.$file->getClientOriginalExtension();
                $file->move($path, $img);
                $pathImg = $path.$img;
                $images .= $pathImg.'@';
            }
        }
        $query = Query::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'user_id'   => $request->user_id,
            'address'   => $request->address,
            'phone1'    => $request->phone1,
            'phone2'    => $request->phone2,
            'content'   => $request->content,
            'images'    => $images
        ]);
        return $query;
    }

    public function update(Request $request, $id)
    {
        /**
    	$images = '';
        if (isset($request->attachments)) {
            foreach ($request->attachments as $file) {
                $path = "assets/queries/";
                $img = time().'.'.$file->getClientOriginalExtension();
                $file->move($path, $img);
                $pathImg = $path.$img;
                $images .= $pathImg.'@';
            }
        }
        **/
        $query = Query::findOrFail($id)
            ->fill($request->all());
        $query->save();
        return $query;
    }

    public function update_state(Request $request, $id)
    {
        dd($request->all());
    }

    public function destroy($id)
    {
    	dd($id);
    }
}
