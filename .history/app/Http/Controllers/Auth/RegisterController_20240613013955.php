use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationEmail;

Route::get('/send-test-email', function () {
    Mail::to('your-email@example.com')->send(new VerificationEmail());
    return 'Test email sent successfully!';
});
