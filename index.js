import notify from './src/services/notify/notify.js';
import preloader from './src/services/preloader/preloader.js';
import Model from './src/core/Model.js';
import random_string from './src/core/common/random_string.js';

var VC = {
	notify: notify,
	preloader: preloader,
	Model: Model,
	random_string: random_string
}

export default VC;