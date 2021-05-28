<template>
    <layout>
        Hello World!
    </layout>
</template>

<script>
        import Layout from '@/Pages/Layout'

    export default {
        components: {
            Layout,
        },
        mounted: function(){
            document.title = "HelloWorld!";
        }
    }
</script>