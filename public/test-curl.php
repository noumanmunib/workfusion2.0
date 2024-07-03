<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://accounts.google.com/o/oauth2/auth");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_CAINFO, "C:\\php\\extras\\ssl\\cacert.pem");
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Follow redirects
curl_setopt($ch, CURLOPT_VERBOSE, true); // Enable verbose output for debugging

$output = curl_exec($ch);

if(curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    echo 'Success: The request was successful!';
    // Print out the response for debugging
    echo '<pre>';
    var_dump($output);
    echo '</pre>';
}

curl_close($ch);
?>
