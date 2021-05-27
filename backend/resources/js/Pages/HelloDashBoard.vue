<template>
    <header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Hello Dashboard
        </h2>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden border sm:rounded-lg">
                    <slot />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'

    export default {
        components: {
            AppLayout,
        },
    }
</script>
