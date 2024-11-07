import '@/style.css'
import { createApp, markRaw } from 'vue'
import App from '@/App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart, faCartShopping, faGift, faSearch, faShoppingBag, faBars, faSlidersH, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
/*
import { createPinia } from 'pinia'
import router from '@/router/'
*/

const app = createApp(App)

/*
const pinia = createPinia();
pinia.use(({ store }) => { store.router = markRaw(router) });
app.use(pinia)
app.use(router)
*/

/*icons*/
library.add(faStar)
library.add(farStar)
library.add(faHeart)
library.add(farHeart)
library.add(faCartShopping)
library.add(faGift)
library.add(faSearch)
library.add(faShoppingBag)
library.add(faBars)
library.add(faSlidersH)
library.add(faChevronDown)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')