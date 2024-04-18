<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div
        class="flex flex-col justify-start items-center relative landing-page"
      >
        <ContentDoc path="main/block_01" v-slot="{ doc }">
          <ContentRenderer
            :value="doc"
            class="text-base xl:text-6xl w-3/5 xl:w-1/2 text-center font-light text-gray-500 uppercase"
          />
          <h1
            class="text-xs xl:text-xl w-3/5 xl:w-1/2 text-center font-medium text-gray-50"
          >
            {{ doc.description }}
          </h1>
        </ContentDoc>
      </div>
    </div>
  </div>
</template>
