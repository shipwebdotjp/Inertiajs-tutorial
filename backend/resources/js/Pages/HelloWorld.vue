<template>
    <div>
        Hello world!
        <inertia-link href="/" class="text-sm text-blue-700 underline">
                ホームへ戻る
        </inertia-link>
    </div>
</template>

<script>
import { InertiaLink } from '@inertiajs/inertia-vue3'

export default {
    components: {
        InertiaLink,
    }
}
</script>
