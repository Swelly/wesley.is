import BaseStore from './BaseStore';

import {
  NAVIGATION_UPDATED
} from '../constants/AppConstants';

class NavigationStore extends BaseStore {

  emitChange() {
    this.emit(NAVIGATION_UPDATED);
  }

  addChangeListener(callback) {
    this.on(NAVIGATION_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(NAVIGATION_UPDATED, callback);
  }
}

let store = new NavigationStore();

store.setAll([{
  route: 'home',
  title: 'Home',
  image: '../../assets/about.png'
}, {
  route: 'about',
  title: 'About',
  image: '../../assets/about.png'
}, {
  route: 'work',
  title: 'Work',
  image: '../../assets/about.png'
}]);

export default store;
