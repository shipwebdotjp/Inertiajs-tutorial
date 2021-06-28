<template>
    <layout>
        <h2 class="text-lg border-b p-1">
            <inertia-link :href="route('contact.index')" class="text-blue-700 underline">
            お問い合わせ
            </inertia-link>
        </h2>

        <form @submit.prevent="submit">
            <h3 class="border-l-4 p-1">メールアドレスとお問い合わせ内容をご入力ください</h3>
            
            <div v-if="form.hasErrors" class="border border-red-100 p-1 m-1 text-sm text-red-600">
                入力された値をもう一度確認してください。
                <ul class="list-disc list-inside">
                    <li v-for="error in form.errors" >{{error}}</li>
                </ul>
            </div>

            <div class="w-40 border-l-4 text-sm p-1 m-1">メールアドレス</div>
            <div class="w-80">
                <input type=text name=mail v-model="form.mail" class="p-1 m-1 text-sm w-full" v-bind:class="{'border-red-300': form.errors.mail}"/>
            </div>
            <div v-show="form.errors.mail" class="p-1 m-1 text-sm text-red-400">{{ form.errors.mail }}</div>
        
            <div class="w-40 border-l-4 text-sm p-1 m-1">お問い合わせ内容</div>
            <div class="w-80">
                <textarea name=message v-model="form.message" class="p-1 m-1 text-sm w-full h-32" v-bind:class="{'border-red-300': form.errors.message}" />
            </div>
            <div v-show="form.errors.message" class="p-1 m-1 text-sm text-red-400">{{ form.errors.message }}</div>
            
            <button type="submit" class="border bg-green-200 m-1 p-1 text-sm" :disabled="form.processing" v-bind:class="{'cursor-not-allowed': form.processing}">確認画面へ進む</button>
            <button @click="form.reset()" type="reset" class="border bg-gray-200 m-1 p-1 text-sm" :disabled="!form.isDirty" v-bind:class="{'cursor-not-allowed': !form.isDirty}">リセット</button>
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
                form: this.$inertia.form("Contact",{
                    mail: null,
                    message: null,
                })
            }
        },
        mounted: function(){
            document.title = "お問い合わせ";
        },
        methods: {
            submit() {
                this.form.post(route('contact.confirm'),{
                    preserveState: true,
                })
            },
        },
    }
</script>