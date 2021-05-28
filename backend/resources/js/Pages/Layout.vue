<template>
    <html>
        <header class="bg-gray-100">
            <inertia-link href="/" class="text-blue-700 underline m-2">Home</inertia-link>
            <inertia-link href="/HelloWorld" class="text-blue-700 underline m-2">HelloWorld</inertia-link>
            <inertia-link :href="route('bookmark.index')" class="text-blue-700 underline m-2">ブックマーク一覧</inertia-link>
            <input type=text name=search v-model="searchWord" size=15 class="p-1 m-1 text-sm" />
            <inertia-link as="button" method="get" :href="route('bookmark.search',{queryWord: searchWord})" class="border border-gray-400 m-1 p-1 text-sm">ブックマーク検索</inertia-link>
        </header>
        <article>
            <slot />
        </article>
    </html>
</template>

<script>
  export default {
      data:function(){
          return {
              searchWord: ''
          }
      }
  }
</script>