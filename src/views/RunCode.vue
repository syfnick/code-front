<template>
    <my-page title="运行代码" :page="page">
        <div class="container">
            <!-- <h2 class="group-title">其他</h2> -->
            <ul class="code-list">
                <li class="item" v-for="item in codes" @click="viewItem(item)">
                    <img class="icon" :src="item.icon" alt="">
                    <div class="name">{{ item.name }}</div>
                    <!-- <div class="value">{{ item.value }}</div> -->
                </li>
            </ul>

        </div>
    </my-page>
</template>

<script>
/* eslint-disable */
const CodeMirror = window.CodeMirror

export default {
    data () {
        return {
            codes: [
                {
                    name: 'Python 2.7',
                    value: 'python2.7',
                    icon: '/static/code/python.png'
                },
                {
                    name: 'Java 1.8.0',
                    value: 'java8',
                    icon: '/static/code/java.png'
                },
                {
                    name: 'Java 11.0.1',
                    value: 'java11',
                    icon: '/static/code/java.png'
                },
                {
                    name: 'C',
                    value: 'c',
                    icon: '/static/code/c.png'
                },
                {
                    name: 'C++',
                    value: 'cpp',
                    icon: '/static/code/cpp.png'
                },

                {
                    name: 'C++ 11',
                    value: 'cpp11',
                    icon: '/static/code/cpp.png'
                },
                {
                    name: 'R',
                    value: 'r',
                    icon: '/static/code/r.svg'
                },
                {
                    name: 'Golang 1.11.2',
                    value: 'golang',
                    icon: '/static/code/go.png'
                },
                {
                    name: 'Node.js 8.9',
                    value: 'nodejs',
                    icon: '/static/code/node.png'
                },
                {
                    name: 'PHP 5.4.16',
                    value: 'php54',
                    icon: '/static/code/php.png'
                },

                {
                    name: 'PHP',
                    value: 'PHP 7.2.0',
                    icon: '/static/code/php.png'
                },
                {
                    name: 'Perl 5.16.3',
                    value: 'perl',
                    icon: '/static/code/perl.png'
                },
                {
                    name: 'Lisp',
                    value: 'lisp',
                    icon: '/static/code/lisp.svg'
                },
                {
                    name: 'Scala 2.12.4',
                    value: 'Scala 2.12.4',
                    icon: '/static/code/scala.png'
                },
                {
                    name: 'Bash',
                    value: 'bash',
                    icon: '/static/code/bash.png'
                },

                {
                    name: 'Ruby 2.0.0',
                    value: 'ruby20',
                    icon: '/static/code/ruby.png'
                },
                {
                    name: 'Rust 1.31.0',
                    value: 'rust',
                    icon: '/static/code/rust.svg'
                },
                {
                    name: 'TypeScript 3.1.6',
                    value: 'typescript',
                    icon: '/static/code/typescript.svg'
                },
                {
                    name: 'C#',
                    value: 'csharp',
                    icon: '/static/code/csharp.png'
                },
                {
                    name: 'Lua 5.3.0',
                    value: 'lua',
                    icon: '/static/code/lua.png'
                },

                {
                    name: 'Less 458',
                    value: 'less',
                    icon: '/static/code/less.svg'
                },
                {
                    name: 'Sass 3.7.2',
                    value: 'sass',
                    icon: '/static/code/sass.svg'
                },
                {
                    name: 'Stylus 0.54.5',
                    value: 'stylus',
                    icon: '/static/code/stylus.svg'
                }
            ],
            page: {
                menu: [
                    {
                        type: 'icon',
                        icon: 'help',
                        href: 'https://project.yunser.com/products/33a44380fd5911e8b50f49b57bb20ac7',
                        target: '_blank',
                        title: '帮助'
                    },
                ]
            },
            loading: false,
            result: '',
        }
    },
    mounted() {
    },
    methods: {
        viewItem(item) {
            this.$router.push(`/codes/${item.value}/run?name=${item.name}`)
        }
    },
    watch: {
    }
}
</script>

<style lang="scss" scoped>
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
    .group-title {
        margin: 16px 0;
        font-size: 24px;
    }
    .code-list {
        display: flex;
        flex-wrap: wrap;
        .item {
            margin-right: 16px;
            margin-bottom: 16px;
            padding: 16px;
            width: 120px;
            border: 1px solid rgba(0, 0, 0, .12);
            text-align: center;
            cursor: pointer;
        }
        .icon {
            width: 80px;
            height: 80px;
            border: 1px solid #ccc;
        }
    }
</style>
