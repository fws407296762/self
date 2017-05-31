<template>
    <router-view></router-view>
</template>
<style>
    @import url("./style.css");
    body{background:#000;}
    .a{width:100px;}
</style>

<script>
    export default {
        a:function(){
            console.log("你好...");
        }
    }
</script>