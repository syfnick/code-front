<template>
    <my-page :title="title" :page="page" backable>
        <ui-row gutter>
            <ui-col width="100" tablet="100" desktop="50">
                <section>
                    <div>
                        <h2 class="section-title">源代码</h2>
                        <div class="tools">
                            <!-- <ui-select-field v-model="lang" label="" :maxHeight="500">
                                <ui-menu-item value="python2.7" title="Python 2.7"/>
                                <ui-menu-item value="python3.6" title="Python 3.6.3"/>
                                <ui-menu-item value="java8" title="Java 1.8.0"/>
                                <ui-menu-item value="java11" title="Java 11.0.1"/>
                                <ui-menu-item value="c" title="C"/>
                                <ui-menu-item value="cpp" title="C++"/>
                                <ui-menu-item value="cpp11" title="C++ 11"/>
                                <ui-menu-item value="r" title="R"/>
                                <ui-menu-item value="golang" title="Golang 1.11.2"/>
                                <ui-menu-item value="nodejs" title="Node.js 8.9"/>
                                <ui-menu-item value="php54" title="PHP 5.4.16"/>
                                <ui-menu-item value="php72" title="PHP 7.2.0"/>
                                <ui-menu-item value="perl" title="Perl 5.16.3"/>
                                <ui-menu-item value="lisp" title="Lisp"/>
                                <ui-menu-item value="scala" title="Scala 2.12.4"/>
                                <ui-menu-item value="bash" title="Bash"/>
                                <ui-menu-item value="ruby20" title="Ruby 2.0.0"/>
                                <ui-menu-item value="rust" title="Rust 1.31.0"/>
                                <ui-menu-item value="typescript" title="TypeScript 3.1.6"/>
                                <ui-menu-item value="csharp" title="C#"/>
                                <ui-menu-item value="lua" title="Lua 5.3.0"/>
                                <ui-menu-item value="less" title="Less 458"/>
                                <ui-menu-item value="sass" title="Sass 3.7.2"/>
                                <ui-menu-item value="stylus" title="Stylus 0.54.5"/>
                            </ui-select-field> -->
                            <ui-raised-button class="btn" label="运行" primary @click="submitTryit" />
                        </div>
                    </div>
                    <div class="card">
                            <textarea class="form-control"  id="textareaCode" name="textareaCode"></textarea>
                    </div>
                </section>
            </ui-col>
            <ui-col width="100" tablet="100" desktop="50">
                <section>
                    <h2 class="section-title">运行结果</h2>
                    <div id="result" class="card">
                        <div class="loading-box" v-if="loading">
                            <div class="ui-loading">
                                <ui-circular-progress :size="24"/>
                            </div>
                        </div>
                        <pre v-html="result" v-if="result"></pre>
                    </div>
                </section>
            </ui-col>
        </ui-row>
    </my-page>
</template>

<script>
/* eslint-disable */
const CodeMirror = window.CodeMirror

export default {
    data () {
        return {
            title: '运行代码',
            page: {
                menu: [
                    // {
                    //     type: 'icon',
                    //     icon: 'help',
                    //     href: 'https://project.yunser.com/products/33a44380fd5911e8b50f49b57bb20ac7',
                    //     target: '_blank',
                    //     title: '帮助'
                    // },
                ]
            },
            loading: false,
            lang: 'python2.7',
            // lang: 'less',
            // lang: 'sass',
            // lang: 'java8',
            // lang: 'c',
            // lang: 'cpp',
            // lang: 'golang',
            // lang: 'nodejs',
            // lang: 'php54',
            // lang: 'bash',
            // lang: 'golang',
            // lang: 'ruby20',
            // lang: 'typescript',
            // lang: 'csharp',
            result: '',
            codes: {
                'python2.7': 'print("Hello Python 2.7")',
                'python3.6': `print('Hello Python 3')`,
                'rust': `fn main() {

   // Print a greeting

   println!("Hello, world!");

}`,
                'r': `cat("hello world 2\\n")`,
                'scala': `object HelloWorld {
    def main(args: Array[String]): Unit = {
        println("Hello, world!")
    }
}`,
                'java8': `public class test {

	public static void main(String args[]) {
		System.out.print("Hello Java 8");
	}
}`,
                'java11': `public class test {

	public static void main(String args[]) {
		var hello = "Hello Java 11";
        System.out.println(hello);
	}
}`,
                'c': `#include <stdio.h>

int main()
{
   /* 我的第一个 C 程序 */
   printf("Hello C");
   
   return 0;
}`,
                'cpp': `#include <iostream>
using namespace std;
int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}`,
                'cpp11': `#include <iostream>
#include <string>
#include <iterator>
#include <algorithm>
#include <array>
 
int main()
{
    // construction uses aggregate initialization
    std::array<int, 3> a1{ {1,2,3} };  // double-braces required
    std::array<int, 3> a2 = {1, 2, 3}; // except after =
    std::array<std::string, 2> a3 = { {std::string("a"), "b"} };
 
    // container operations are supported
    std::sort(a1.begin(), a1.end());
    std::reverse_copy(a2.begin(), a2.end(), 
                      std::ostream_iterator<int>(std::cout, " "));
 
    std::cout << '\\n';
 
    // ranged for loop is supported
    for(auto& s: a3)
        std::cout << s << ' ';
    std::cout << '\\n';    
}`,
                'go': `package main

import "fmt"

func main() {
   fmt.Println("Hello, Golang")
}
`,
                'nodejs': `console.log('Hello Node.js')`,
                'php54': `<!DOCTYPE html> 
<html> 
<body> 

<?php 
echo "Hello World!"; 
?> 

</body> 
</html>`,
                'php72': `<?php
$aa=60;
echo 'hello '.'xxx'.$aa."\\n";
echo date('Y-m-d H:i:s',time())."\\n";
echo "PHP版本:".phpversion();
?>`,
                'perl': `print "hello world\\n";`,
                'lisp': `*(format t "Hello World") `,
                'bash': `#!/bin/bash
echo 'Hello World!'`,
                'golang': `package main
import "fmt" 
func main() { 
    fmt.Printf("Hello Golang.") 
}`,
                'ruby20': `puts "Hello Ruby"`,
                'typescript': `console.log('Hello TypeScript')`,
                'csharp': `using System;
namespace HelloWorldApplication
{
   class HelloWorld
   {
      static void Main(string[] args)
      {
         Console.WriteLine("Hello CSharp");
         Console.ReadKey();
      }
   }
}`,
                'lua': `print("Hello Lua")`,
                'less': `.container {
    padding: 0;
    .article {
        background-color: red;
    }
}`,
                'sass': `$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}`,
                'stylus': `body
  font: 12px Helvetica, Arial, sans-serif;`,
            }
        }
    },
    mounted() {
        let data = this.$route.params.code
        if (data) {
            this.lang = data
            this.title = this.$route.query.name
        }
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

        // this.submitTryit()
        this.autodivheight()
        if (window.intent) {
            let data = window.intent.data
            this.editor.setValue(data)
            this.submitTryit()
        }
        this.editor.setValue(this.codes[this.lang])
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
            document.getElementById('result').style.height = height + 'px'
        },
        submitTryit() {
            let text = this.editor.getValue()
            console.log('text', text)
            this.loading = true
            this.result = ''
            this.$http.post(`/asd`, {
                lang: this.lang,
                code: text
            }).then(
                response => {
                    let data = response.data
                    console.log(data)
                    this.result = data.result
                    this.loading = false
                },
                response => {
                    console.log(response)
                    this.loading = false
                })
        }
    },
    watch: {
        lang(value) {
            this.editor.setValue(this.codes[value])
            this.result = ''
        },
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
        display: flex;
        align-items: center;
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
