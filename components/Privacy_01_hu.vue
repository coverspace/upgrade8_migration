<template>
  <div class="grid grid-cols-12 lg:container mx-auto">
    <div class="col-span-12">
      <div
        class="flex flex-col justify-start items-start w-full my-8 shadow-lg"
      >
        <ContentDoc path="privacy/block_01.hu" v-slot="{ doc }">
          <ContentRenderer :value="doc" class="marked" />
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script setup>
const langGlobal = useState("langGlobalState");
</script>
