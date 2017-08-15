#Note: The plugin dependencies jquery.
## If you use webpack, please add these code to webpack.config.js
```
plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })
]
```

## Usage:

### Add CSS file
```
<link rel="stylesheet" type="text/css" href="./node_modules/vicoders-preloader/assets/css/preloader.min.css">
```

### To show preloader
```
import { preloader } from '../node_modules/vicoders-preloader/assets/js/preloader.js';
$(document).ready(function() {
	var obj = new preloader;
	obj.show();
});
``` 

### To hide preloader
```
import { preloader } from '../node_modules/vicoders-preloader/assets/js/preloader.js';
$(document).ready(function() {
	var obj = new preloader;
	obj.hide();
});
```