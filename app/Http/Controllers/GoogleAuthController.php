<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User; // Corrected namespace it was model in previous version
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver("google")->redirect();
    }

    public function callbackGoogle()
    {
        try {
            $google_user = Socialite::driver("google")->user();
            $user = User::where("google_id", $google_user->getId())->first(); // Corrected method name
            
            if (!$user) {
                $new_user = User::create([
                    'name' => $google_user->getName(),
                    'email' => $google_user->getEmail(),
                    'google_id' => $google_user->getId() // Corrected method name
                ]);
                Auth::login($new_user);
            } else {
                Auth::login($user);
            }

            return redirect()->intended('home'); // Corrected method name

        } catch (\Throwable $th) {
            dd('Something went wrong! ', $th->getMessage());
        }
    }
}
