<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\User;

class UserController extends Controller
{
	public function __construct()
    {
        #$this->middleware('auth:api');
    }

    public function index()
    {
    	$users = User::all();
        return $users;
    }

    public function show($id)
    {
    	return User::findOrFail($id)->load('person');
    }
}
