# asteroid-alert
It's an alert library build with JavaScript. You can replace your traditional JavaScript alert, confirm with the library. It has also extra component like toast and loader.

## For npm installation
   npm i asteroid-alert --save
   import {$alert, $confirm, $toast, $loader_show, $loader_hide} from asteroid-alert
   
### CDN: https://dl.dropbox.com/s/w7qndetugavgxaz/as-min.js
### Website: https://asteroid-alert.netlify.app/

### Functions
<pre>
$confirm("Do you want to delete?", "#E74C3C")
  .then(() => {
     $toast("Deleted", "#E74C3C");
})<br>
  
$alert("Successfull", '#E74C3C') 
$toast("No internet connection", "#F4D03F")

$loader_show("#FF5733") If you don't provide any color code it will take default color
$loader_hide()

If you don't provide any color code it will take default color
</pre>
