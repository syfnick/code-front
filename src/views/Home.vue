<template>
    <my-page title="在线编辑器">
        <ui-row gutter>
            <ui-col width="100" tablet="100" desktop="50">
                <section>
                    <div>
                        <h2 class="section-title">源代码</h2>
                        <div class="tools">
                            <ui-raised-button class="btn" label="点击运行" primary @click="submitTryit" />
                            <ui-switch class="switch" label="实时预览" v-model="realTimePreview" />
                        </div>
                    </div>
                    <div class="card">
                            <textarea class="form-control"  id="textareaCode" name="textareaCode">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;云设在线编辑器(yunser.com)&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;这是标题&lt;/h1&gt;
&lt;p&gt;这是段落。&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</textarea>
                    </div>
                </section>
            </ui-col>
            <ui-col width="100" tablet="100" desktop="50">
                <section>
                    <h2 class="section-title">运行结果</h2>
                    <div class="card">
                        <div id="iframewrapper"></div>
                    </div>
                </section>
            </ui-col>
        </ui-row>
    </my-page>
</template>

<script>
    const CodeMirror = window.CodeMirror

export default {
    data () {
        return {
            realTimePreview: false
        }
    },
    mounted() {
        let realTimePreview = this.$storage.get('realTimePreview')
        if (realTimePreview) {
            this.realTimePreview = realTimePreview
        }
        let mixedMode = {
            name: 'htmlmixed',
            scriptTypes: [
                {
                    matches: /\/x-handlebars-template|\/x-mustache/i,
                    mode: null
                },
                {
                    matches: /(text|application)\/(x-)?vb(a|script)/i,
                    mode: 'vbscript'
                }
            ]
        }
        this.editor = CodeMirror.fromTextArea(document.getElementById('textareaCode'), {
            mode: mixedMode,
            selectionPointer: true,
            lineNumbers: false,
            matchBrackets: true,
            indentUnit: 4,
            indentWithTabs: true
        })
        this.editor.on('change', (instance, changeObj) => {
            console.log('change')
            if (this.realTimePreview) {
                this.submitTryit()
            }
        })
        window.addEventListener('resize', this.autodivheight)

        this.submitTryit()
        this.autodivheight()
    },
    methods: {
        autodivheight() {
            let winHeight = 0
            if (window.innerHeight) {
                winHeight = window.innerHeight
            } else if ((document.body) && (document.body.clientHeight)) {
                winHeight = document.body.clientHeight
            }
            // 通过深入Document内部对body进行检测，获取浏览器窗口高度
            if (document.documentElement && document.documentElement.clientHeight) {
                winHeight = document.documentElement.clientHeight
            }
            let height = winHeight * 0.68
            this.editor.setSize('100%', height)
            document.getElementById('iframeResult').style.height = height + 'px'
        },
        submitTryit() {
            let text = this.editor.getValue()
            let patternHtml = /<html[^>]*>((.|[\n\r])*)<\/html>/im
            let patternHead = /<head[^>]*>((.|[\n\r])*)<\/head>/im
            let arrayMatchesHead = patternHead.exec(text)
            let patternBody = /<body[^>]*>((.|[\n\r])*)<\/body>/im

            let arrayMatchesBody = patternBody.exec(text)
            let basepathFlag = 1
            let basepath = ''
            if (basepathFlag) {
                basepath = '<base href="//www.yunser.com/try/demo_source/" target="_blank">'
            }
            if (arrayMatchesHead) {
                text = text.replace('<head>', '<head>' + basepath)
            } else if (patternHtml) {
                text = text.replace('<html>', '<head>' + basepath + '</head>')
            } else if (arrayMatchesBody) {
                text = text.replace('<body>', '<body>' + basepath)
            } else {
                text = basepath + text
            }
            let ifr = document.createElement('iframe')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('id', 'iframeResult')
            document.getElementById('iframewrapper').innerHTML = ''
            document.getElementById('iframewrapper').appendChild(ifr)

            let ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument
            ifrw.document.open()
            ifrw.document.write(text)
            ifrw.document.close()
            this.autodivheight()
        }
    },
    watch: {
        realTimePreview() {
            console.log('change')
            this.$storage.set('realTimePreview', this.realTimePreview)
        }
    }
}
</script>

<style scoped>
    .section-title {
        display: inline-block;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 16px;
    }
    .card {
        padding: 16px;
        margin-bottom: 16px;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }
    .tools {
        float: right;
    }
    .btn {
        display: inline-block;
        position: relative;
        top: -4px;
        margin-left: 16px;
        margin-bottom: 16px;
        margin-right: 16px;
    }
</style>
