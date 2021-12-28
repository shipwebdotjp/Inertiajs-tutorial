<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bookmark;

class BookmarkController extends Controller
{
    //    
    public function index () 
    {
        return Inertia::render('Bookmark/Index',['bookmarks' => Bookmark::all()]);
    }
        
    //検索メソッド
    public function search ($queryWord) 
    {
        return Inertia::render('Bookmark/Index',[
            'bookmarks' => Bookmark::Where(
                                'title', 'like', '%'.$queryWord.'%'
                            )->orWhere(
                                'url', 'like', '%'.$queryWord.'%'
                            )->get()
        ]);
    }

    //追加メソッド
    public function store (Request $request) 
    {
        $bookmark = new Bookmark;
        $bookmark->title = $request->title;
        $bookmark->url = $request->url;
        $bookmark->save();

        return redirect()->route('bookmark.index', $parameters = [], $status = 303, $headers = []);
    }

    //削除メソッド
    public function destroy ($id) 
    {
        Bookmark::destroy($id);
        return redirect()->route('bookmark.index', $parameters = [], $status = 303, $headers = []);
    }
}