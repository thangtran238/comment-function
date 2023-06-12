<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


use App\Models\Obtainer;
use App\Models\Post;

// ----------------------------------------------------------------------------
class ApiController extends Controller
{

    // Get all obtainer
    public function getAllObtainer()
    {
        $allObtainers = Obtainer::all();
        return response()->json($allObtainers);
    }


    // Get obtainer by obtainer id
    public function getObtainerById($id)
    {
        // $obtainer = DB::table('Obtainers')->where('id', $id)->first();
        $obtainerById = Obtainer::find($id);

        if ($obtainerById) {
            return response()->json($obtainerById);
        } else {
            return response()->json(['error' => 'Obtainer not found'], 404);
        }
    }
// ----------------------------------------------------------------------------

    // Get all posts by id
    public function getAllPost()
    {
        $allPosts = Post::all();
        return response()->json($allPosts);
    }



    // Get all posts by obtainer_id
    public function getPostByObtainerId($id)
    {
        $postByObtainerId = Post::all()->where('obtainer_id', $id);

        if ($postByObtainerId) {
            return response()->json($postByObtainerId);
        } else {
            return response()->json(['error' => `This user hasn't any posts`], 404);
        }
    }

    // Get all posts posts by category_id
    public function getPostByCategoryId($id)
    {
        $postByCategoryId = Post::all()->where('category_id', $id);

        if ($postByCategoryId) {
            return response()->json($postByCategoryId);
        } else {
            return response()->json(['error' => `This category hasn't any posts`], 404);
        }
    }
// ----------------------------------------------------------------------------


    // Get all category
    public function getAllCategory()
    {
        $allCategory = Category::all();
        return response()->json($allCategory);
    }


    // Get category by id
    public function getCategoryById($id)
    {
        $categoryById = Category::find($id);

        if ($categoryById) {
            return response()->json($categoryById);
        } else {
            return response()->json(['error' => 'This category not found'], 404);
        }
    }

// ----------------------------------------------------------------------------


    // Get the email and password by email and password entered
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
    
        $userToLogin = Obtainer::where('email', $email)->first();
    
        if ($userToLogin && password_verify($password, $userToLogin->password)) {
            return response()->json(['alert' => 'Login successful'], 200);
        } else {
            return response()->json(['error' => 'Invalid email or password'], 404);
        }
    }
    
}