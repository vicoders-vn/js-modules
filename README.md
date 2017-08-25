# Note: The plugin dependencies jquery, fontawesome.

# Installation
You can install Vicoders JS Modules via NPM:
```
$ npm install vicoders-js-modules
```

Load css to your application
```
<link rel="stylesheet" type="text/css" href="./node_modules/vicoders-js-modules/dist/app.css">
```

Vicoders JS Modules support many service like preloader, notify...
# Usage

## If you use Webpack
```
import VC from '../node_modules/vicoders-js-modules/index.js';
```

### Notify Service
#### Parameters
```
function (type, content, time, scroll_top, close_callback) { }
```

#### type
String. Default: success.

Type of notify.

#### content 
String.

Content of notify.

#### time
Integer. Default: infinite.

Time auto hide of notify.

#### scroll_top
Boolean. Default: false.

#### close_callback
Function

#### To call a success notify
```
VC.notify.show('success', 'Successfully!');
``` 

#### Or you can call a warning notify with timeout is 5 seconds
```
VC.notify.show('warning', 'Warning!', 5000);
```

### Preloader Service
#### To show preloader
```
VC.preloader.show();
``` 

#### To hide preloader
```
VC.preloader.hide();
```

In additional, we can use specify service like this.
```
import preloader from '../node_modules/vicoders-js-modules/src/services/preloader/preloader.js';
import notify from '../node_modules/vicoders-js-modules/src/services/notify/notify.js';

preloader.show();
notify.show('success', 'Successfully!', 5000);

```

## If you don't use Webpack

You can add script tag like this
```
<script type="text/javascript" src="./node_modules/vicoders-js-modules/dist/app.js"></script>
```

and use:
```
VC.preloader.show();
VC.notify.show('success', 'Successfully!');
```

# BaseModel

**Note: ** This BaseModel use ES6 so you should use [Babel](https://github.com/babel/babel-loader) to transpiling JavaScript

Usage BaseModel like this:

```
import Model from '../node_modules/vicoders-js-modules/src/core/Model.js';

class User extends Model {
	constructor(options) {
		super(options);
        this.bind(options);
	}
}

var user = {
	name: 'John',
	age: 26
};

user = new User(user);

console.log(user.getName());
console.log(user.getAge());
```

# Random string

**Usage:**

```
import random_string from '../node_modules/vicoders-js-modules/src/core/common/random_string.js';

console.log(random_string(20)); // generate a string with length is 20
```