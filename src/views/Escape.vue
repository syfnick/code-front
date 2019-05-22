<template>
    <my-page title="字符串转义">
        <div class="common-container container">
            <ui-text-field v-model="text" hintText="输入字符串" />
            <div class="btns">
                <ui-raised-button class="btn" primary label="转义" @click="escape" />
                <ui-raised-button class="btn" label="反转义" @click="escape2" />
            </div>
            <div v-if="result">
                {{ result }}
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                text: '',
                result: ''
            }
        },
        mounted() {
        },
        methods: {
            escape() {
                this.result = this.text.replace(/\\/g, '\\\\')
            },
            escape2() {
                this.result = this.text.replace(/\\\\/g, '\\')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btns {
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
        }
    }
</style>
