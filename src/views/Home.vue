<template>
    <my-page title="代码" :page="page">
        <app-list :data="groups" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '工具',
                        apps: [
                            {
                                name: '运行代码',
                                desc: '',
                                icon: '/static/img/code.svg',
                                to: '/runcode'
                            },
                            {
                                name: 'HTML 编辑器',
                                desc: '',
                                icon: '/static/img/code.svg',
                                to: '/editor'
                            },
                            {
                                name: '代码高亮',
                                desc: '',
                                icon: '/static/img/code.svg',
                                to: '/highlight'
                            },
                            {
                                name: '时间戳转换',
                                desc: '',
                                icon: '/static/img/time_convert.svg',
                                to: '/timestamp'
                            },
                            {
                                name: '进制转换',
                                desc: '',
                                icon: '/static/img/code.svg',
                                to: '/number/property'
                            },
                            {
                                name: '字符串转义',
                                desc: '',
                                icon: '/static/img/code.svg',
                                to: '/escape'
                            },
                            {
                                name: 'ASCII 码对照表',
                                desc: '',
                                icon: '/static/img/code.svg',
                                to: '/asc2'
                            },
                            {
                                name: 'HTML 特殊符号',
                                desc: 'HTML 特殊符号对照表',
                                icon: '/static/img/code.svg',
                                to: '/html/char'
                            }
                        ]
                    },
                    {
                        name: '编程语言',
                        apps: [
                            {
                                name: 'JSON',
                                desc: '',
                                icon: '/static/img/json.svg',
                                to: 'xxx',
                                href: 'https://json.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'XML',
                                desc: '',
                                icon: '/static/img/xml.svg',
                                to: 'xxx',
                                href: 'https://xml.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'HTML',
                                desc: '',
                                icon: '/static/img/html.svg',
                                to: 'xxx',
                                href: 'https://html.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'CSS',
                                desc: '',
                                icon: '/static/img/css3.svg',
                                to: 'xxx',
                                href: 'https://css.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'SQL',
                                desc: '',
                                icon: '/static/img/sql.svg',
                                to: 'xxx',
                                href: 'https://sql.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '前端',
                        apps: [
                            {
                                name: 'CSS3 动画生成',
                                desc: '可视化生成简单的 CSS3 动画代码。',
                                icon: '/static/img/css3.svg',
                                to: 'xxx',
                                href: 'https://animation.yunser.com/',
                                target: '_blank'
                            },
                            {
                                href: 'http://tool2.yunser.com/css/sprite',
                                to: 'xxx',
                                icon: '/static/img/build.svg',
                                name: '雪碧图生成工具',
                                desc: '',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'https://clippath.yunser.com/',
                                to: 'xxx',
                                icon: '/static/img/build.svg',
                                name: 'clip_path 生成器',
                                desc: '',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'http://runcode.yunser.com/editor',
                                to: 'xxx',
                                icon: '/static/img/runcode.svg',
                                name: 'RunCode',
                                desc: '调试 Javascript',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'https://bezier.yunser.com/',
                                to: 'xxx',
                                icon: '/static/img/bezier.svg',
                                name: '贝塞尔曲线',
                                desc: 'canvas 贝塞尔曲代码生成',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'http://tool2.yunser.com/bezier/anim',
                                to: 'xxx',
                                icon: '/static/img/bezier.svg',
                                name: '贝塞尔曲线动画',
                                desc: '贝塞尔曲线形成过程动画',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'http://tool2.yunser.com/css3/bezier',
                                to: 'xxx',
                                icon: '/static/img/bezier.svg',
                                name: 'CSS3贝塞尔曲线',
                                desc: '',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'https://svgtool.yunser.com/',
                                to: 'xxx',
                                icon: '/static/img/svg.svg',
                                name: 'SVG 转 Canvas',
                                desc: '',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'https://code.yunser.com/html/char',
                                to: 'xxx',
                                icon: '/static/img/build.svg',
                                name: 'HTML特殊符号',
                                desc: 'HTML特殊符号对照表',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'https://code.yunser.com/asc2',
                                to: 'xxx',
                                icon: '/static/img/asc.svg',
                                name: 'ASCII码对照表',
                                desc: '',
                                tags: ['开发'],
                                target: '_blank'
                            },
                            {
                                href: 'https://animation.yunser.com/animate',
                                to: 'xxx',
                                icon: '/static/img/animation.svg',
                                name: 'css3动画库',
                                desc: '',
                                tags: ['开发'],
                                target: '_blank'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=code',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=code',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
