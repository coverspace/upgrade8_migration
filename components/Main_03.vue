<template>
  <div class="grid grid-cols-12 my-8">
    <div class="col-span-12">
      <div class="flex flex-col justify-start items-center relative">
        <ContentDoc path="main/block_03" v-slot="{ doc }">
          <ContentRenderer
            :value="doc"
            class="text-lg md:text-2xl xl:text-3xl w-3/5 xl:w-1/2 text-center py-1 font-bold text-upgrade_pink font-family-arial"
          />
          <h1
            class="text-center text-4xl font-bold my-4 text-upgrade_darkgreen mx-4"
          >
            {{ doc.text_1 }}
          </h1>
          <div
            class="flex flex-col 2xl:flex-row justify-between items-center gap-8 mx-4"
          >
            <ul
              class="flex flex-col justify-start items-start gap-4 bg-gray-50 p-8 rounded-xl shadow-lg my-8"
            >
              <li
                v-for="item in doc.list_1"
                :key="index"
                class="flex items-center gap-4 text-gray-500 text-2xl font-family-arial"
              >
                <span class="">
                  <IconQuestion class="w-8 h-auto text-upgrade_darkgreen" />
                </span>
                {{ item.item }}
              </li>
            </ul>
            <span
              class="bg-gray-50 p-4 rounded-full shadow-lg rotate-90 2xl:rotate-0"
            >
              <IconArrowRight class="w-14 h-auto" />
            </span>
            <ul
              class="flex flex-col justify-start items-start gap-4 bg-gray-50 p-8 rounded-xl shadow-lg my-8"
            >
              <li
                v-for="item in doc.list_2"
                :key="index"
                class="flex items-center gap-4 text-gray-500 text-2xl font-family-arial"
              >
                <span>
                  <IconCheck class="w-8 h-auto text-upgrade_pink" />
                </span>
                {{ item.item }}
              </li>
            </ul>
          </div>
          <h1
            class="text-center text-4xl font-bold my-4 bg-upgrade_gradient mx-4"
          >
            {{ doc.text_2 }}
          </h1>
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCheck from "@/components/icons/IconCheck.vue";
import IconQuestion from "@/components/icons/IconQuestion.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
</script>
