import page from './page'
import keyboard from './keyboard'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('keyboard', keyboard)
    }
}
