<template>
  <div class="grid grid-cols-12 my-16 xl:container mx-auto">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16"
        >
          <ContentDoc path="contact/block_01.en" v-slot="{ doc }">
            <h1
              class="text-3xl md:text-5xl xl:text-7xl py-2 text-center font-bold bg-upgrade_gradient"
            >
              {{ doc.label }}
            </h1>
            <ContentRenderer
              :value="doc"
              class="text-3xl xl:text-4xl xl:w-2/3 mx-8 xl:text-center text-justify mb-4 font-medium text-upgrade_pink"
            />
          </ContentDoc>
        </div>
      </div>
    </div>

    <div class="col-span-12 mx-auto xl:mx-0 xl:col-span-7 w-2/3 xl:w-full">
      <NuxtImg src="contact_1.svg" />
      <a href="https://storyset.com/app" class="text-gray-600"
        >App illustrations by Storyset</a
      >
    </div>
    <div class="col-span-12 px-4 xl:mx-0 xl:col-span-5 w-full mt-4 xl:mt-0">
      <ContentDoc path="contact/block_01.en" v-slot="{ doc }">
        <form
          method="POST"
          action="/.netlify/functions/sendMail"
          class="flex flex-col justify-start items-start gap-4 xl:gap-8 px-8 py-12 shadow-xl bg-gray-50 rounded mx-auto sm:w-3/4 xl:w-full"
        >
          <h1 class="text-upgrade_pink font-bold text-2xl mx-auto">
            {{ doc.form_title }}
          </h1>
          <div class="flex flex-col justify-start items-start w-full">
            <label for="name" class="text-upgrade_pink font-family-arial"
              >Name <small class="text-smart_orange_01">&ast;</small></label
            >
            <input
              type="text"
              id="name"
              name="name"
              required
              minlength="3"
              class="border bg-gray-50 w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500 font-family-arial"
            />
          </div>
          <div class="flex flex-col justify-start items-start w-full">
            <label for="email" class="text-upgrade_pink font-family-arial"
              >Email <small class="text-smart_orange_01">&ast;</small></label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              minlength="3"
              class="border bg-gray-50 w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500 font-family-arial"
            />
          </div>
          <div class="flex flex-col justify-start items-start w-full">
            <label for="comment" class="text-upgrade_pink font-family-arial"
              >Message <small class="text-smart_orange_01">&ast;</small></label
            >
            <textarea
              id="comment"
              name="comment"
              required
              minlength="3"
              class="border bg-gray-50 w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500 font-family-arial"
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-xs xl:text-xl text-upgrade_pink font-normal rounded bg-upgrade_lightgreen px-8 py-2 mx-auto xl:mx-0 cursor-pointer font-family-arial"
          >
            {{ doc.form_button }}
          </button>
        </form>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
const langGlobal = useState("langGlobalState");
</script>
