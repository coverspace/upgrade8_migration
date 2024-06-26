<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 bg-white shadow-md">
      <div class="xl:hidden flex flex-row justify-between items-center">
        <a :href="currentLangPath">
          <NuxtImg src="logo_only.png" class="w-32 h-auto my-6 mx-4" />
        </a>
        <h1 class="text-xl sm:text-3xl text-upgrade_pink font-bold">
          Upgrade-8
        </h1>
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
          <a :href="currentLangPath">
            <NuxtImg src="logo_only.png" class="w-40 h-auto" />
          </a>
          <h1 class="text-3xl text-upgrade_pink font-bold">Upgrade-8</h1>
        </div>
        <ul class="flex flex-row justify-end items-center gap-8">
          <li
            v-for="(item, index) in navMenu[navMenuNumber]"
            :key="item"
            class="text-3xl text-upgrade_pink hover:text-upgrade_gold"
          >
            <NuxtLink :to="item.link">
              {{ item.menu }}
            </NuxtLink>
          </li>

          <li class="relative">
            <IconLanguage
              @click="langs = !langs"
              class="w-10 h-auto p-2 border rounded-lg cursor-pointer bg-gray-50 focus:bg-gray-200 text-gray-500"
            />
            <div
              v-for="item in langData"
              class="absolute top-0 left-12 border rounded-lg bg-gray-50 p-2 font-family-arial shadow-lg"
              :class="langs === true ? 'hidden' : 'block'"
            >
              <ul
                v-for="(lang, index) in item.languages"
                :key="index"
                class="flex flex-col justify-start items-start"
              >
                <li
                  @click="pickLang(index, lang.path, lang.number)"
                  class="flex flex-row justify-start items-center whitespace-nowrap text-lg text-left text-gray-600 my-1 mx-1 cursor-pointer"
                >
                  <!-- <IconArrowItem
                    class="w-4 h-auto mr-2"
                    :class="
                      index === activeLang
                        ? 'text-upgrade_darkgreen'
                        : 'text-transparent'
                    "
                  /> -->
                  {{ lang.flag }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconMenu from "@/components/icons/IconMenu.vue";
import SideBar from "@/components/partials/SideBar.vue";
import IconLanguage from "@/components/icons/IconLanguage.vue";
import IconArrowItem from "@/components/icons/IconArrowItem.vue";

const langGlobal = useState("langGlobalState");
const { locale, setLocale } = useI18n();
const router = useRouter();

const props = defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

const setBar = ref(false);
const langs = ref(true);
const activeLang = ref();
const currentLangPath = ref("");
const navMenuNumber = ref(0);
const navMenu = ref([
  [
    {
      link: "/",
      menu: "Home",
    },
    {
      link: "/guide",
      menu: "Guide",
    },
    {
      link: "/contact",
      menu: "About",
    },
    {
      link: "/buy",
      menu: "Buy",
    },
  ],
  [
    {
      link: "/ge",
      menu: "Startseite",
    },
    {
      link: "/ge/guide",
      menu: "Führung",
    },
    {
      link: "/ge/contact",
      menu: "Über",
    },
    {
      link: "/ge/buy",
      menu: "Kaufen",
    },
  ],
  [
    {
      link: "/hu",
      menu: "Kezdőlap",
    },
    {
      link: "/hu/guide",
      menu: "Útmutató",
    },
    {
      link: "/hu/contact",
      menu: "Rólunk",
    },
    {
      link: "/hu/buy",
      menu: "Vásárlás",
    },
  ],
]);

const pickLang = (index, langPath, langNumber) => {
  activeLang.value = index;
  langs.value = !langs.value;
  navMenuNumber.value = langNumber;
  router.push(langPath);
  langGlobal.value = langPath;

  // console.log("navMenuNumber.value", navMenuNumber.value);

  // if (langNumber === 0) {
  //   currentLangPath.value = "/";
  // } else if (langNumber === 1) {
  //   currentLangPath.value = "/ge";
  // } else if (langNumber === 2) {
  //   currentLangPath.value = "/hu";
  // }

  // langGlobal.value = langShort;
  // localStorage.setItem("langState", langGlobal.value);
};

const openMenu = () => {
  console.log("openMenu");
  setBar.value = !setBar.value;
};

const { data: langData } = await useAsyncData("languages", () => {
  return queryContent("/_partials/languages").where({ _partial: true }).find();
});

watchEffect(() => {
  if (router.currentRoute.value.fullPath === "/") {
    currentLangPath.value = "/";
    navMenuNumber.value = 0;
  } else if (router.currentRoute.value.fullPath.includes("/ge")) {
    currentLangPath.value = "/ge";
    navMenuNumber.value = 1;
  } else if (router.currentRoute.value.fullPath.includes("/hu")) {
    currentLangPath.value = "/hu";
    navMenuNumber.value = 2;
  }
});

onMounted(() => {
  // console.log("navMenu", navMenu);
  //   if (localStorage.getItem("langState")) {
  //     langGlobal.value = localStorage.getItem("langState");
  //   } else {
  //     localStorage.setItem("langState", "");
  //   }
  //   if (localStorage.getItem("langState") === "") {
  //     activeLang.value = 0;
  //   } else if (localStorage.getItem("langState") === ".ge") {
  //     activeLang.value = 1;
  //   } else if (localStorage.getItem("langState") === ".hu") {
  //     activeLang.value = 2;
  //   }
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
