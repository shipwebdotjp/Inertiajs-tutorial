<template>
    <div>
        <h2 class="text-lg border-b p-1">
            <Link href="/Upload" class="text-blue-700 underline">
            アップロード
            </Link>
        </h2>
        <img v-if="imageSrc" :src="imageSrc" />
        <form @submit.prevent="submit">
            <h3 class="border-l-4 p-1">ファイルアップロード</h3>
            <div class="flex w-full">
                <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">ファイル</div>
                <div class="w-80">
                    <input type=file name=file ref=file @input="form.file = $event.target.files[0]"  class="p-1 m-1 text-sm w-full" />
                </div>
                <div v-show="form.errors.file" class="p-1 m-1 text-sm text-red-400">{{ form.errors.file }}</div>
            </div>
            <button type="submit" class="border border-gray-400 m-1 p-1 text-sm" :disabled="form.processing" v-bind:class="{'cursor-not-allowed': form.processing}">アップロード</button>
            <button v-if="form.processing" @click="form.cancel()" type="button" class="border bg-red-200 m-1 p-1 text-sm">送信中止</button>
            <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
            <div v-if="form.recentlySuccessful" class="p-1 m-1 bg-green-200">アップロードが完了しました。</div>
        </form>
    </div>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3'

    export default {
        components: {
            Link,
        },
        data: function() {
            return {
                form: this.$inertia.form({
                    file: null,
                }),
            }
        },
        props:{
            imageSrc:{
                type: String,
            }
        },
        methods: {
            submit() {
                this.form.post('/Upload',{
                    onSuccess: (page) => {
                        this.$refs.file.value = '';
                    }
                })
            },
        },
    }
</script>