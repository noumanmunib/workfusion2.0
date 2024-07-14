<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    public function generateProposal(Request $request)
    {
        $selfDescribe = $request->input('self_describe');
        $applyReason = $request->input('apply_reason');

        // Make a request to your AI service (replace with actual service URL and request format)
        $response = Http::post('https://api.your-ai-service.com/generate', [
            'self_describe' => $selfDescribe,
            'apply_reason' => $applyReason
        ]);

        if ($response->successful()) {
            return response()->json([
                'proposal' => $response->json()
            ]);
        } else {
            return response()->json([
                'message' => 'Failed to generate proposal.'
            ], 500);
        }
    }
}