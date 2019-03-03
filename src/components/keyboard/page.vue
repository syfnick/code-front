<template>
    <div>
        <div class="keyboard-box" v-if="show">
            <header class="header">
                <ui-icon-button class="close-btn" icon="close" @click="show = false" />
            </header>
            <div class="body">
                <div class="my-row">
                    <div class="grid" @click="input('7')">7</div>
                    <div class="grid" @click="input('8')">8</div>
                    <div class="grid" @click="input('9')">9</div>
                    <div class="grid" @click="input('a')">a</div>
                    <div class="grid" @click="input('b')">b</div>
                </div>
                <div class="my-row">
                    <div class="grid" @click="input('4')">4</div>
                    <div class="grid" @click="input('5')">5</div>
                    <div class="grid" @click="input('6')">6</div>
                    <div class="grid" @click="input('c')">c</div>
                    <div class="grid" @click="input('d')">d</div>
                </div>
                <div class="my-row">
                    <div class="grid" @click="input('1')">1</div>
                    <div class="grid" @click="input('2')">2</div>
                    <div class="grid" @click="input('3')">3</div>
                    <div class="grid" @click="input('e')">e</div>
                    <div class="grid" @click="input('f')">f</div>
                </div>
                <div class="my-row">
                    <div class="grid" @click="input('.')">.</div>
                    <div class="grid" @click="input('0')">0</div>
                    <div class="grid" @click="command('delete')">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAjElEQVR42mNgGAWDGRgA8Xwg3k8iXg/EAYQMFwDi+0D8nwIsgM+CfqiiAjJ83gDV64BLgQNUwX4sQYYrKIm2ABY074FYAUk8AappPpp6bOJ4LcAVNAlIYTsfjxheC3AFDTZL9uMwHKcFuIIGnyXYDB84C2geRHSJZLokU5pnNLoUFXQp7GheXI8C+gEASbuKWYTu8WgAAAAASUVORK5CYII=" width="24" height="24" class="gwt-Image" alt="Backspace">
                    </div>
                    <div class="grid"></div>
                    <div class="grid"></div>
                </div>
            </div>
        </div>
        <div v-if="!show">
            <ui-icon class="keyboard-icon" value="keyboard" @click="show = true" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                docked: true
            }
        },
        props: {
        },
        methods: {
            input(text) {
                this.$emit('input', text)
            },
            command(text) {
                this.$emit('command', text)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .keyboard-icon {
        position: absolute;
        left: 16px;
        bottom: 16px;
        color: #999;
        font-size: 32px;
        cursor: pointer;
        &:hover {
            color: #333;
        }
    }
    .keyboard-box {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 228px;
        z-index: 10000;
        background-color: #eee;
        .header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 48px;
            background-color: #f8f8f8;
            border-top: 1px solid #dcdcdc;
            border-bottom: 1px solid #dcdcdc;
            .close-btn {
                float: right;
            }
        }
        .body {
            position: absolute;
            top: 48px;
            left: 0;
            right: 0;
            bottom: 0;
            padding-top: 4px;
        }
    }
    .my-row {
        display: flex;
        justify-content: center;
        // max-width: 186px;
        margin: 0 auto;
        .grid {
            // flex-shrink: 0;
            flex-grow: 0;
            width: 66px;
            max-width: 66px;
            height: 40px;
            margin-right: 4px;
            margin-bottom: 4px;
            text-align: center;
            line-height: 40px;
            font-size: 18px;
            background-color: #fff;
            border-radius: 5px;
            border-bottom: 1px solid;
            border-bottom-color: #c7c7c7;
            cursor: pointer;
            &:active {
                border: 1px solid #999;
            }
            img {
                margin-top: 8px;
            }
        }
    }
</style>
