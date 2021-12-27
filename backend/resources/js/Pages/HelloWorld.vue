<template>
    <layout v-bind:title="title">
        <div>
            Hello World!
            <button v-on:click="settitle" class="border-gray-700 border rounded p-2">タイトル変更</button>
        </div>
    </layout>
</template>

<script>
    import Layout from '@/Pages/Layout'

    export default {
        data: function(){
            return(
                {
                    title: "初期タイトル" 
                }
            )
            
        },
        components: {
            Layout,
        },
        methods :{
            settitle : function(event){
                this.title = '変更後のタイトル'
            }
        }
    }
</script>