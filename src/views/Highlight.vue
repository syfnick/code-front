<template>
    <my-page title="代码高亮" :page="page">
        <div id="input-box" class="row">
			<div class="col-sm-12">
                <div id="mainContent" class="tool_content wrapper">
                    <div class="toolUsing clearfix">
                    </div>
                    <div class="topBar">
    <textarea id="code_source" class="form-control" rows="6">
/* ---示例代码----*/

function echo (){

	var a="this is a example";

	alert("hello world "+a);

}

/* ---示例代码----*/
	</textarea>
                    </div>
                    <div class="operateTB">
                        <form class="form-inline">
                            <select id="code_type" class="span2">
                                <option value="js">Javascript</option>
                                <option value="xml">HTML/XML</option>
                                <option value="java">Java</option>
                                <option value="c">C/C++/Objectiv-C</option>
                                <option value="ruby">Ruby</option>
                                <option value="csharp">C#</option>
                                <option value="css">CSS</option>
                                <option value="delphi">Delphi</option>
                                <option value="erlang">Erlang</option>
                                <option value="groovy">Groovy</option>
                                <option value="javafx">JavaFX</option>
                                <option value="perl">Perl</option>
                                <option value="php">PHP</option>
                                <option value="powershell">PowerShell</option>
                                <option value="python">Python</option>
                                <option value="scala">Scala</option>
                                <option value="sql">SQL</option>
                                <option value="vb">VB</option>
                                <option value="as3">AS3</option>
                                <option value="bash">Bash</option>
                                <option value="coldfusion">ColdFusion</option>
                                <option value="diff">Diff</option>
                                <option value="plain">Plain</option>
                                <option value="sass">Sass</option>
                            </select>
                            <label class="checkbox"><input type="checkbox" id="gutter" checked="checked"/>显示行号</label>
                            <label class="checkbox"><input type="checkbox" id="to_html"/>生成HTML</label>
                            <button type="button" class="btn btn-primary" onclick="render();"><i class="icon-chevron-down icon-white"></i>语法着色</button>
                                <label class="radio"><input type="radio" name="higilight_style" checked="checked" value="default"/>默认样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="emacs"/>Emacs样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="eclipse"/>Eclipse样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="django"/>Django样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="fadetogrey"/>FadeToGrey样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="mdultra"/>MDUltra样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="midnight"/>Midnight样式</label>
                                <label class="radio"><input type="radio" name="higilight_style" value="rdark"/>RDark样式</label>
                        </form>
                    </div>
                    <div class="bottomBar clearfix">
                        <div id='html_div'>
			                <textarea id='html' onclick='this.focus();this.select();'></textarea>
                        </div>
                        <div id="result_div">
                            <pre class='brush: js;'>
/* ---示例代码----*/

function echo (){

	var a="this is a example";

	alert("hello world "+a);

}

/* ---示例代码----*/
    	</pre>
                        </div>

                    </div>
                </div>

			</div>
		</div>
        <div class="row">
            <div class="col-md-8 col-sm-12">
                <article class="article">
                    
                </article>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/highlight/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            /**
             * Created by cjh1 on 2017/7/11.
             */

            var REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
            function encodeHtml(s){
                return (typeof s != "string") ? s :
                    s.replace(REGX_HTML_ENCODE,
                        function($0){
                            var c = $0.charCodeAt(0), r = ["&#"];
                            c = (c == 0x20) ? 0xA0 : c;
                            r.push(c); r.push(";");
                            return r.join("");
                        });
            }
            function change(type){    // 更改样式
                var css=document.getElementById("css");
                if ("default"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreDefault.css");
                if ("emacs"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreEmacs.css");
                if ("django"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreDjango.css");
                if ("eclipse"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreEclipse.css");
                if ("fadetogrey"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreFadeToGrey.css");
                if ("mdultra"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreMDUltra.css");
                if ("midnight"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreMidnight.css");
                if ("rdark"==type)
                    css.setAttribute("href","http://tool2.yunser.com/asset/lib/syntaxhighlighter_3.0.83/styles/shCoreRDark.css");
                render();
            }

            function render(){
                $("#result_div").empty();
                $("#result_div").prepend("<pre>"+encodeHtml($("#code_source").val())+"</pre>");
                var class_v="brush :"+$("#code_type").val()+";";
                if("checked"!=$("#gutter").attr("checked"))
                    class_v=class_v+"gutter: false;";
                $("#result_div pre").addClass(class_v);
                SyntaxHighlighter.highlight();
                toHTML();
            }
            function toHTML(){
                var html="<link rel='stylesheet' type='text/css' href='http://tools.oschina.net";
                html=html+$("#css").attr("href");
                html=html+"'/>";
                html=html+$(".syntaxhighlighter").parent().html();
                $("#html_div textarea").val(html);
                if($("#to_html").attr("checked"))
                {
                    $("#html_div").show();
                }
                else{
                    $("#html_div").hide();
                }
            }

            $("#html_div").hide();
            SyntaxHighlighter.all();
            $(":radio").click(function (){
                change($(this).val());
            });
            $("#to_html").click(function (){
                if($("#to_html").attr("checked")){
                    toHTML();
                    $("#html_div").show();
                }
                else{
                    $("#html_div").hide();
                }
            });
            $("#gutter").click(function (){
                render();
            });
            // $("#syntaxhh").popover({
            //     title:"SyntaxHighLighter",
            //     content:"SyntaxHighlighter是一套在浏览器上对各种代码进行语法着色的独立 JavaScript库。",
            //     placement:"bottom"
            // });
            render();
        }
    }
</script>

<style scoped>
    .topBar {
        margin-bottom: 16px;
    }
</style>
