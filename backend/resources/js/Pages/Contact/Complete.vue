<template>
    <layout>
        <h2 class="text-lg border-b p-1">
            <inertia-link :href="route('contact.index')" class="text-blue-700 underline">
            お問い合わせ
            </inertia-link>
        </h2>

        <h3 class="border-l-4 p-1">お問い合わせが送信されました</h3>
    </layout>
</template>

<script>
    import Layout from '@/Pages/Layout'

    export default {
        components: {
            Layout,
        },
        mounted: function(){
            document.title = "お問い合わせ完了";
        }
    }
</script>