import page from './page'
import keyboard from './keyboard'
import appList from './app-list'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('keyboard', keyboard)
        Vue.component('app-list', appList)
    }
}
