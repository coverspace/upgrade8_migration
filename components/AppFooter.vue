<template>
  <footer
    v-for="item in content"
    v-if="content"
    class="flex flex-col lg:flex-row justify-between items-center w-full mx-auto font-family-arial border-t-2 border-gray-400 py-8"
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
      class="flex flex-col lg:flex-row lg:justify-end items-center gap-4 lg:gap-8 w-full"
    >
      <a
        v-for="(button, index) in item.footer_buttons"
        :key="index"
        :href="button.link"
        class="mx-2 lg:mx-0 my-1 lg:my-0 whitespace-nowrap text-sm lg:text-base text-gray-500 font-semibold hover:text-upgrade_gold"
      >
        {{ button.title }}</a
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear());

const { data: content } = await useAsyncData("footer", () => {
  return queryContent("/_partials/footer").where({ _partial: true }).find();
});
</script>
