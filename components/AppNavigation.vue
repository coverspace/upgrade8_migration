<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 bg-white shadow-md">
      <div class="xl:hidden flex flex-row justify-between items-center">
        <a href="/">
          <NuxtImg src="logo_only.png" class="w-12 h-auto my-6 mx-4" />
        </a>
        <span @click="openMenu">
          <IconMenu
            class="w-10 h-auto p-2 border rounded-lg m-8 bg-gray-50 focus:bg-gray-200 text-gray-500"
          />
        </span>
      </div>
      <Transition>
        <SideBar
          :setBar="setBar"
          @cancel="setBar = false"
          :navigationTree="navigationTree"
          class="absolute top-0 right-0 z-10 w-3/4"
        />
      </Transition>

      <div
        class="hidden xl:flex flex-row justify-between items-center w-3/5 mx-auto"
      >
        <div class="flex flex-row justify-between items-center gap-3 py-4">
          <a href="/">
            <NuxtImg src="logo_only.png" class="w-40 h-auto" />
          </a>
          <h1 class="text-3xl text-upgrade_pink font-medium">Upgrade-8</h1>
        </div>
        <ul class="flex flex-row justify-end items-center gap-8">
          <li
            v-for="(item, index) in navigationTree.slice(0, 3)"
            :key="index"
            class="text-3xl text-upgrade_pink"
          >
            <NuxtLink :to="item._path === '/main' ? '/' : item._path">
              {{ item.children[0].title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconMenu from "@/components/icons/IconMenu.vue";
import SideBar from "@/components/partials/SideBar.vue";

const props = defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

const setBar = ref(false);

const openMenu = () => {
  console.log("openMenu");
  setBar.value = !setBar.value;
};

onMounted(() => {
  // console.log("navigationTree", props.navigationTree);
  // console.log("title", props.navigationTree[0].children[0].title);
});
</script>

<style lang="css" scoped>
.router-link-exact-active {
  border-bottom: 1px solid gray;
}

.router-link-exact-inactive {
  border-bottom: 1px solid transparent;
}

.v-enter-active,
.v-leave-active {
  right: 0;
  transition: right 200ms ease;
}

.v-enter-from,
.v-leave-to {
  right: -75%;
}
</style>
