# Note: The plugin dependencies jquery, fontawesome.

# Installation
You can install Vicoders JS Modules via NPM:
```
$ npm install vicoders
```

Load `CSS` to your application
```
<link rel="stylesheet" type="text/css" href="./node_modules/vicoders/dist/app.min.css">
```

# Usage
```
import { VC } from 'vicoders';
```

## Notify
#### Parameters
```
function (type, content, time, scroll_top, close_callback) { }
```

#### type
(string) (required) - Type of notify.

(values) - (success | warning).

#### content 
(string) (required) - Content of notify.

#### time
(integer) (optional) (miliseconds) - Time auto hide of notify. 

Default: infinite.

#### scroll_top
(boolean) (optional).

Default: false.

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

## Preloader
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
import { preloader } from 'vicoders/services';
import { notify } from 'vicoders/services';

preloader.show();
notify.show('success', 'Successfully!', 5000);
```

## BaseModel

**Note:** This BaseModel use ES6 so you should use [Babel](https://github.com/babel/babel-loader) to transpiling JavaScript

Usage BaseModel like this:

```
import { Model } from 'vicoders/core';

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

## Random string

**Usage:**

```
import { random_string } from 'vicoders/core';

console.log(random_string(20)); // generate a string with length is 20
```

# If you don't use Webpack

You can add script tag like this
```
<script type="text/javascript" src="./node_modules/vicoders/dist/app.min.js"></script>
```

and use all services above like this:
```
VC.preloader.show();
VC.notify.show('success', 'Successfully!');
VC.random_string(20);
```