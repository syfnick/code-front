<template>
    <my-page title="进制转换">
        <div id="input-box" class="row">
            <div class="col-sm-8">
                <section class="input-box">
                    <div class="type">
                        <ui-select-field class="select" v-model="hex1" :maxHeight="400">
                            <ui-menu-item v-for="n in 35" :key="n + 1" :value="n+1" :title="(n + 1) + '进制'" />
                        </ui-select-field>
                        <span class="convert" @click="exchange">
                            <span class="icon">转</span>
                        </span>
                        <ui-select-field class="select" v-model="hex2" :maxHeight="400">
                            <ui-menu-item v-for="n in 36" :key="n + 1" :value="n + 1" :title="(n + 1) + '进制'" />
                        </ui-select-field>
                    </div>
                    <div>
                        <ui-text-field class="btn" v-model="num1" :rows="4"  hintText="输入转换数字"/>
                    </div>
                    <div>
                        <!--<textarea class="form-control" v-model="num1" rows="4" placeholder="输入转换数字"></textarea>-->
                        <ui-raised-button class="btn" label="转换" primary @click="convert" />
                        <!--<div>-->
                            <!--<button class="btn btn-primary" @click="compute">转换</button>-->
                        <!--</div>-->
                        <!--<textarea class="form-control" v-model="num2" rows="4" placeholder="转换结果"></textarea>-->
                    </div>
                    <result :text="num2" :copyable="true" />
                    <!-- <div>{{ num2 }}</div> -->
                </section>
            </div>
            <div class="col-sm-4">
                <section class="result-box">
                </section>
            </div>
        </div>
        <keyboard @input="input" @command="command" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                hex1: 2,
                hex2: 10,
                num1: '100',
                num2: '',
                options: [
                    // { text: '2 进制', value: '2' },
                    // { text: '3 进制', value: '3' },
                    // { text: '4 进制', value: '4' },
                    // { text: '5 进制', value: '5' },
                    // { text: '6 进制', value: '6' },
                    // { text: '7 进制', value: '7' },
                    // { text: '8 进制', value: '8' },
                    // { text: '9 进制', value: '9' },
                    // { text: '10 进制', value: '10' },
                    // { text: '11 进制', value: '11' },
                    // { text: '12 进制', value: '12' },
                    // { text: '2 进制', value: '12' }
                ]
            }
        },
        mounted() {
            let from = this.$route.query.from
            if (from) {
                this.hex1 = parseInt(from)
            }
            let to = this.$route.query.to
            if (to) {
                this.hex2 = parseInt(to)
            }
            let data = this.$route.query.data
            if (data) {
                this.num1 = data
                this.convert()
            }
        },
        methods: {
            exchange() {
                let tmp = this.hex2
                this.hex2 = this.hex1
                this.hex1 = tmp
            },
            convert() {
                // 用户输入的转十进制
                if (this.num1.includes('.')) {
                    console.log('包含点')
                    console.log(this.num1, this.hex1)
                    let num = parseFloat(this.num1, this.hex1)
                    console.log(num)
                    // 再从十进制转其他
                    this.num2 = num.toString(this.hex2)
                } else {
                    console.log(this.num1, this.hex1)
                    let num = parseInt(this.num1, this.hex1)
                    console.log(num)
                    // 再从十进制转其他
                    this.num2 = num.toString(this.hex2)
                }
            },
            input(text) {
                console.log(text)
                this.num1 += text
            },
            command(cmd) {
                if (cmd === 'delete') {
                    if (this.num1) {
                        this.num1 = this.num1.substring(0, this.num1.length - 1)
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .select {
        width: 160px;
    }
    .type {
        display: flex;
        align-items: center;
    }
    .convert {
        margin: 0 24px;
        cursor: pointer;
        .icon {
            background-color: #fff;
            border-radius: 50%;
            padding: 8px;
        }
    }
    /**/
    .input-box {

    }
    .input-box .tip {
        margin-bottom: 16px;
        color: #999;
    }
    .input-box textarea {
        margin-bottom: 16px;
    }
    .input-box .btn {
        margin-bottom: 16px;
    }
    /**/
    .result-box .info {
        margin-bottom: 16px;
    }
    /**/
    .list-common {
        padding-left: 16px;
    }
    .list-common li {
        list-style: disc;
    }
</style>
