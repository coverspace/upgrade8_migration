<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16 h-full"
        >
          <ContentDoc path="main/block_04" v-slot="{ doc }">
            <h1
              class="text-4xl xl:text-7xl text-center font-bold bg-upgrade_gradient py-2"
            >
              {{ doc.label }}
            </h1>

            <div class="grid grid-cols-12 w-full xl:w-[75vw]">
              <div
                v-for="(item, index) in doc?.questions[activeTab]"
                :key="question"
                class="col-span-12 mx-4 xl:mx-0"
              >
                <div v-for="(set, index) in item" :key="set">
                  <div v-for="element in set" :key="element">
                    <template v-if="index > 0">
                      <div
                        class="flex flex-col items-center mb-4 font-family-arial"
                      >
                        <div
                          @click="pickItem(index)"
                          class="flex flex-row justify-between items-center bg-gray-50 shadow-lg cursor-pointer w-full py-2 xl:py-0"
                          :class="
                            index === activeItem
                              ? 'rounded-t-xl border-b'
                              : 'rounded-xl'
                          "
                        >
                          <h1
                            class="px-3 xl:px-6 py-2 xl:py-4 text-sm xl:text-lg font-bold text-gray-500 rounded-t-sm w-full"
                          >
                            {{ element.question }}
                          </h1>
                          <IconArrow
                            class="w-10 h-auto text-upgrade_darkgreen p-2 mx-2 border rounded-full bg-white hover:bg-gray-50"
                            :class="{ 'rotate-180': index === activeItem }"
                          />
                        </div>
                        <p
                          v-show="index === activeItem"
                          class="bg-white px-3 xl:px-6 py-2 xl:py-4 text-justify text-sm xl:text-lg text-gray-500 font-medium shadow-lg rounded-b-sm w-full"
                          :class="
                            index === activeItem ? 'rounded-b-xl' : 'rounded-xl'
                          "
                        >
                          {{ element.answer }}
                        </p>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconArrow from "./../components/icons/IconArrow.vue";
const activeTab = ref<number>(0);
const activeItem = ref<number>(0);

const pickItem = (index: number) => {
  activeItem.value = index;
};
</script>
<style lang="css" scoped>
div::after {
  content: "";
}
</style>
