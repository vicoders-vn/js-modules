import { notify } from './src/services/notify';
import { preloader } from './src/services/preloader';
import { Model } from './src/core/Model';
import { random_string } from './src/core/common/random_string';
import { Menu } from './src/menu/vc-menu';

window.VC = {
	notify: notify,
	preloader: preloader,
	Model: Model,
	random_string: random_string,
	Menu: Menu
};