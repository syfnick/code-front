import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const RunCode = resolve => require(['@/views/RunCode'], resolve)
const RunCodeDetail = resolve => require(['@/views/RunCodeDetail'], resolve)
const Editor = resolve => require(['@/views/Editor'], resolve)
const Highlight = resolve => require(['@/views/Highlight'], resolve)
const HighlightHelp = resolve => require(['@/views/HighlightHelp'], resolve)
const Timestamp = resolve => require(['@/views/Timestamp'], resolve)
const TimestampHelp = resolve => require(['@/views/TimestampHelp'], resolve)
const Asc2 = resolve => require(['@/views/Asc2'], resolve)
const HtmlChar = resolve => require(['@/views/HtmlChar'], resolve)
const Escape = resolve => require(['@/views/Escape'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/runcode',
        component: RunCode
    },
    {
        path: '/codes/:code/run',
        component: RunCodeDetail
    },
    {
        path: '/editor',
        component: Editor
    },
    {
        path: '/highlight',
        component: Highlight
    },
    {
        path: '/highlight/help',
        component: HighlightHelp
    },
    {
        path: '/timestamp',
        component: Timestamp
    },
    {
        path: '/timestamp/help',
        component: TimestampHelp
    },
    {
        path: '/escape',
        component: Escape
    },
    {
        path: '/asc2',
        component: Asc2
    },
    {
        path: '/html/char',
        component: HtmlChar
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
