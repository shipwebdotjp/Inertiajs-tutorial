<template>
    <layout>
        <h2 class="text-lg border-b p-1">
            <inertia-link :href="route('contact.index')" class="text-blue-700 underline">
            お問い合わせ
            </inertia-link>
        </h2>

        <form @submit.prevent="submit">
            <h3 class="border-l-4 p-1">ご入力いただいた内容をご確認ください</h3>
            <div class="w-40 border-l-4 text-sm p-1 m-1">メールアドレス</div>
            <div class="w-40">
                <div class="p-1 m-1 text-sm w-full">
                    {{ form.mail }}
                </div>
                <input type=hidden name=mail v-model="form.mail" size=25 />
            </div>
            <div class="w-40 border-l-4 text-sm p-1 m-1">お問い合わせ内容</div>
            <div class="w-40">
                <pre class="p-1 m-1 text-sm w-full">{{ form.message }}</pre>
                <input type=hidden name=message v-model="form.message" />
            </div>
            <button type="submit" class="border bg-green-200 m-1 p-1 text-sm" :disabled="form.processing" v-bind:class="{'cursor-not-allowed': form.processing}">お問い合わせを送信</button>
            <button @click="back" type="button" class="border bg-gray-200 m-1 p-1 text-sm">入力画面へ戻る</button>
            <button v-if="form.processing" @click="form.cancel()" type="button" class="border bg-red-200 m-1 p-1 text-sm">送信中止</button>
        </form>
    </layout>
</template>

<script>
    import Layout from '@/Pages/Layout'

    export default {
        components: {
            Layout,
        },
        data: function() {
            return {
                form: this.$inertia.form({
                    mail: this.mail,
                    message: this.message,
                }),
            }
        },
        props:{
            mail: {
                type: String,
            },
            message: {
                type: String,
            }
        },
        mounted: function(){
            document.title = "お問い合わせ内容の確認";
        },
        methods: {
            submit() {
                this.form.post(route('contact.send'))
            },
            back(){
                window.history.back()
            }
        },
    }
</script>