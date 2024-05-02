<template>
  <div
    v-show="setBar"
    class="h-full overflow-hidden rounded-l-xl border border-gray-100 bg-upgrade_lightgreen"
  >
    <div class="relative flex flex-col justify-start items-start w-full h-full">
      <div
        class="flex flex-row justify-between items-center border-b-2 border-[#d051b7] w-full"
      >
        <div
          class="flex flex-row justify-start items-center ml-6 gap-x-2 w-full"
        >
          <IconSidebar class="w-8 h-auto text-upgrade_pink" />
          <h1 class="text-3xl text-upgrade_pink font-bold">Sidebar</h1>
        </div>
        <span @click="$emit('cancel')" class="ml-auto mr-0">
          <IconClose
            class="w-10 h-auto p-2 m-8 text-gray-500 border-2 rounded-lg bg-slate-50 active:bg-slate-200"
          />
        </span>
      </div>
      <ul class="m-4">
        <li
          v-for="(item, index) in navigationTree.slice(0, 3)"
          :key="index"
          class="flex flex-row justify-start items-center w-full px-4 py-2"
        >
          <NuxtLink
            :to="item._path === '/main' ? '/' : item._path"
            class="text-upgrade_pink font-bold text-2xl pb-1"
          >
            {{ item.children[0].title }}
          </NuxtLink>
        </li>
        <hr class="border-b border-[#d051b7] w-full" />
        <li
          v-for="(item, index) in navigationTree.slice(3)"
          :key="index"
          class="flex flex-row justify-start items-center w-full px-4 py-2"
        >
          <NuxtLink
            :to="item._path === '/main' ? '/' : item._path"
            class="text-upgrade_pink font-bold text-2xl pb-1"
          >
            {{ item.children[0].title }}
          </NuxtLink>
        </li>
        <hr class="border-b border-[#d051b7] w-full" />
        <div v-for="item in langData" class="font-family-arial mt-4">
          <ul
            v-for="(lang, index) in item.languages"
            :key="index"
            class="flex flex-col justify-start items-start"
          >
            <li
              @click="pickLang(index, lang.short), $emit('cancel')"
              class="flex flex-row justify-start items-center whitespace-nowrap text-lg text-left text-gray-600 my-1 mx-1 cursor-pointer"
            >
              <IconArrowItem
                class="w-4 h-auto mr-2"
                :class="
                  index === activeLang
                    ? 'text-upgrade_pink'
                    : 'text-transparent'
                "
              />
              {{ lang.flag }}
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconClose from "@/components/icons/IconClose.vue";
import IconSidebar from "@/components/icons/IconSidebar.vue";
import IconArrowItem from "@/components/icons/IconArrowItem.vue";

const langGlobal = useState("langGlobalState");

const props = defineProps({
  setBar: {
    type: Boolean,
  },
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["cancel"]);

const activeLang = ref(0);

const pickLang = (index, langShort) => {
  activeLang.value = index;
  // langGlobal.value = langShort;
  // localStorage.setItem("langState", langGlobal.value);
};

const { data: langData } = await useAsyncData("languages", () => {
  return queryContent("/_partials/languages").where({ _partial: true }).find();
});

onMounted(() => {
  // if (localStorage.getItem("langState")) {
  //   langGlobal.value = localStorage.getItem("langState");
  // } else {
  //   localStorage.setItem("langState", "");
  // }
  // if (localStorage.getItem("langState") === "") {
  //   activeLang.value = 0;
  // } else if (localStorage.getItem("langState") === ".ge") {
  //   activeLang.value = 1;
  // } else if (localStorage.getItem("langState") === ".hu") {
  //   activeLang.value = 2;
  // }
});
</script>

<style lang="css" scoped>
.router-link-exact-active::before {
  content: "•";
  margin-left: -16px;
  position: absolute;
  color: #d051b7;
}

.router-link-exact-inactive::before {
  content: "•";
  margin-left: -16px;
  position: absolute;
  color: transparent;
}
</style>
