<template>
  <!-- fixed bottom-0 left-0 right-0 -->
  <footer
    class="grid grid-cols-12 font-family-arial"
    v-for="item in content"
    v-if="content"
  >
    <div
      class="col-span-12 xl:flex felx-row justify-between items-center w-full mx-auto border-t-2 border-gray-400 py-8"
    >
      <h1 class="text-gray-500 text-center lg:text-left w-full">
        {{ item.brand }}
        &copy;
        {{ currentYear }}
        {{ item.body.children[0].children[0].value }}
        <a :href="item.link" class="text-upgrade_gold font-semibold">
          {{ item.title }}</a
        >
      </h1>
      <div
        class="flex flex-col xl:flex-row xl:justify-end items-center gap-4 xl:gap-8 w-full"
      >
        <a
          v-for="(button, index) in item.footer_buttons"
          :key="index"
          :href="button.link"
          class="mx-2 xl:mx-0 my-1 xl:my-0 whitespace-nowrap text-sm xl:text-base text-gray-500 font-semibold hover:text-upgrade_gold"
        >
          {{ button.title }}</a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear());

const { data: content } = await useAsyncData("footer", () => {
  return queryContent("/_partials/footer").where({ _partial: true }).find();
});
</script>
