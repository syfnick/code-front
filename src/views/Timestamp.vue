<template>
    <my-page title="时间戳转换">
        <section class="input-box">
            <p>现在：<a id="js_timestamp_now" href="javascript:;">-</a> 控制：<a id="js_timer_start" href="javascript:;"><i
                    class="fa fa-play">播放</i></a> <a id="js_timer_stop" href="javascript:;"><i class="fa fa-stop">停止</i></a>
            </p>
            <ui-card class="card">
                <ui-text-field v-model="timestamp" label="时间戳" />
                <div>
                    <ui-raised-button class="btn" label="转换" primary @click="convert" />
                </div>
                <input class="form-control result" type="text" v-model="time" v-if="time">
            </ui-card>
            <ui-card class="card">
                <ui-text-field v-model="time2" label="时间" />
                <div>
                    <ui-raised-button class="btn" label="转换" primary @click="convert2" />
                </div>
                <!--<button class="btn btn-primary" type="button" @click="convert2">转换</button>-->
                <input class="form-control result" type="text" v-model="timestamp2" v-if="timestamp2">
            </ui-card>
        </section>
        <ui-article>
            <h3>获取当前时间戳</h3>
            <h3></h3>
        </ui-article>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const $ = window.$

    function format(timestamp) {
        var time = new Date(timestamp);
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time.getMonth() + 1))
        var date = time.getDate() > 9 && time.getDate() || ('0' + time.getDate())
        var hour = time.getHours() > 9 && time.getHours() || ('0' + time.getHours())
        var minute = time.getMinutes() > 9 && time.getMinutes() || ('0' + time.getMinutes())
        var second = time.getSeconds() > 9 && time.getSeconds() || ('0' + time.getSeconds())
        var YmdHis = year + '-' + month + '-' + date
            + ' ' + hour + ':' + minute + ':' + second;
        return YmdHis;
    }

    export default {
        data () {
            return {
                timestamp: '123',
                time: '',

                timestamp2: '',
                time2: '',
            }
        },
        mounted() {
            var now = Math.round(new Date() / 1000);
            this.timestamp = now;
            this.time2 = format(now * 1000);
            this.initTimer()
        },
        methods: {
            initTimer() {
                var js_timestamp_now = $('#js_timestamp_now');
                var js_timestamp = $('#js_timestamp');
                var js_datetime_o = $('#js_datetime_o');
                var js_timer_stop = $('#js_timer_stop');
                var js_timer_start = $('#js_timer_start');

                var now = Math.round(new Date() / 1000);
                js_timestamp.val(now);
                js_datetime_o.val(format(now * 1000));

                var timer = setInterval(function () {
                    var now = Math.round(new Date() / 1000);
                    js_timestamp_now.text(now);
                }, 1000);
                js_timestamp_now.on('click', function (e) {
                    e.preventDefault();
                    js_timestamp.val($(this).text());
                });

                js_timer_stop.on('click', function (e) {
                    e.preventDefault();
                    if (timer) clearInterval(timer);
                });

                js_timer_start.on('click', function (e) {
                    e.preventDefault();
                    if (timer) clearInterval(timer);
                    timer = setInterval(function () {
                        var now = Math.round(new Date() / 1000);
                        js_timestamp_now.text(now);
                    }, 1000);
                });
            },
            convert: function () {
                var timestamp = '' + this.timestamp;
                timestamp = timestamp.replace(/^\s+|\s+$/, '');
                if (/^\d{10}$/.test(timestamp)) {
                    timestamp *= 1000;
                } else if (/^\d{13}$/.test(timestamp)) {
                    timestamp = parseInt(timestamp);
                } else {
                    alert('时间戳格式不正确！');
                    return;
                }
                var YmdHis = format(timestamp);

                this.time = YmdHis;
            },
            convert2: function () {
                var time = new Date(this.time2);
                this.timestamp2 = Math.round(time / 1000);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        max-width: 400px;
        padding: 16px;
        margin-bottom: 16px;
        .result {
            margin-top: 16px;
        }
    }
    /**/
    .input-box {

    }
    .input-box .btns {
        margin-bottom: 16px;
    }
    .input-box .form-control {
        margin-bottom: 16px;
    }
    .input-box .result {
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

    /**/
    .control-label {
        width: 80px;
    }
    .form-control {
        display: inline-block;
        width: 240px;
    }
</style>
