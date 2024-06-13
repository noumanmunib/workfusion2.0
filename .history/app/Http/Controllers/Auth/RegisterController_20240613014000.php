<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationEmail;

class RegisterController extends Controller
{
    use RegistersUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }aa

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    protected function registered(Request $request, User $user)
    {
        event(new Registered($user));

        // Send verification email
        if ($user instanceof MustVerifyEmail) {
            Mail::to($user->email)->send(new VerificationEmail($user));
        }

        return response()->json(['message' => trans('verification.sent')]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        if ($data['role'] === 'Lecturer') {
            return Validator::make($data, [
                'first_name' => 'required|max:255',
                'last_name' => 'max:255',
                'role' => 'required|max:255|in:Student,Lecturer',
                'email' => 'required|email|max:255|unique:users|regex:/^[a-zA-Z0-9.]+@(?!.*(student)).*.ac.id.*$/',
                'password' => 'required|min:8',
            ], [
                'email.regex' => 'You must use an academic email address that is not from student domain.'
            ]);
        } else {
            return Validator::make($data, [
                'first_name' => 'required|max:255',
                'last_name' => 'max:255',
                'role' => 'required|max:255|in:Student,Lecturer',
                'email' => 'required|email|max:255|unique:users',
                'password' => 'required|min:8',
            ]);
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'role' => $data['role'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
