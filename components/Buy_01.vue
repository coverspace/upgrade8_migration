<template>
  <div class="grid grid-cols-12 my-16 xl:container mx-auto">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16"
        >
          <ContentDoc path="buy/block_01" v-slot="{ doc }">
            <h1
              class="text-2xl xl:text-7xl text-center font-bold bg-gradient-to-r from-[#d051b7] to-[#b3d692] inline-block text-transparent bg-clip-text"
            >
              {{ doc.label }}
            </h1>

            <ContentRenderer
              :value="doc"
              class="xl:text-3xl xl:w-2/3 mx-8 xl:text-center text-justify mb-4 font-medium text-gray-500"
            />
          </ContentDoc>
        </div>
      </div>
    </div>

    <div class="col-span-12 mx-auto xl:mx-0 xl:col-span-7">
      <NuxtImg src="buy_1.svg" />
      <a href="https://storyset.com/app" class="text-gray-600"
        >App illustrations by Storyset</a
      >
    </div>
    <div class="col-span-12 px-4 xl:mx-0 xl:col-span-5 w-full mt-4 xl:mt-0">
      <ContentDoc path="buy/block_01" v-slot="{ doc }">
        <div
          class="flex flex-col justify-start items-start gap-4 xl:gap-8 px-8 py-12 shadow-xl bg-gray-50 rounded"
        >
          <h1
            class="xl:text-4xl mx-auto h-full xl:text-center text-center font-medium text-gray-500"
          >
            {{ doc.text_1 }}
          </h1>
          <ul class="flex flex-col justify-start items-start mx-8 gap-8 my-4">
            <li v-for="item in doc.sets" :key="index" class="">
              <p
                class="text-gray-500 font-bold text-2xl flex flex-row justify-start items-start gap-4"
              >
                <IconCheck class="w-8 h-auto text-green-700" />
                {{ item.set }}
              </p>
            </li>
          </ul>
          <div class="flex flex-row justify-start items-center gap-4">
            <NuxtLink to="https://bigiba.com/">
              <button
                class="text-xs xl:text-xl text-gray-50 font-normal rounded bg-upgrade_lightgreen px-8 py-2 cursor-pointer font-family-arial"
              >
                {{ doc.button }}
              </button>
            </NuxtLink>
            <p class="text-xl text-gray-500 font-bold font-family-arial">
              {{ doc.button_text }}
            </p>
          </div>
        </div>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
import IconCheck from "@/components/icons/IconCheck.vue";
</script>
