# asteroid-alert
It's an alert library build with JavaScript. You can replace your traditional JavaScript alert, confirm with the library. It has also extra component like toast and loader.

## The cdn below is for version 1.0.0. Use as-min.js for version 2.0.0
## For npm installation
   npm i asteroid-alert
### CDN V1.0.0: https://dl.dropbox.com/s/yrr7z4avnas4a6c/asteroid-alert-min.js
### Website: https://asteroid-alert.netlify.app/

### Functions
<pre>
$confirm("Do you want to delete?", "#E74C3C")
  .then(() => {
     $toast("Deleted", "#E74C3C");
})<br>
  
$alert("Successfull", '#E74C3C') 
$toast("No internet connection", "#F4D03F")

Loading alert in v2
$loader_show("#FF5733") If you don't provide any color code it will take default color
$loader_hide()

If you don't provide any color code it will take default color
</pre>
