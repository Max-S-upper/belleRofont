<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class TestdbController extends Controller
{
    public function getAll()
    {
        $data = DB::table('products')->get();
        dd($data);
    }
}
