<template>
  <div class="grid grid-cols-12 my-8">
    <div class="col-span-12">
      <div
        class="flex flex-col justify-start items-center relative border border-red-500"
      >
        <ContentDoc path="main/block_04" v-slot="{ doc }">
          <ContentRenderer
            :value="doc"
            class="text-base xl:text-6xl w-3/5 xl:w-1/2 text-center font-light text-gray-500 uppercase"
          />
        </ContentDoc>
      </div>
    </div>
  </div>
</template>
