<template>
    <div>
        <h2 class="text-lg border-b p-1">
            <Link :href="route('contact.index')" class="text-blue-700 underline">
            お問い合わせ
            </Link>
        </h2>

        <h3 class="border-l-4 p-1">お問い合わせが送信されました</h3>
    </div>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3'

    export default {
        components: {
            Link,
        },
    }
</script>