import page from './page'
import keyboard from './keyboard'
import appList from './app-list'
import result from './result'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('keyboard', keyboard)
        Vue.component('app-list', appList)
        Vue.component('result', result)
    }
}
