<template>
  <div class="grid grid-cols-12 my-8">
    <div class="col-span-12">
      <div class="flex flex-col justify-start items-center relative">
        <ContentDoc path="main/block_02.hu" v-slot="{ doc }">
          <ContentRenderer
            :value="doc"
            class="text-4xl xl:text-7xl w-3/5 xl:w-1/2 py-2 my-16 text-center font-bold bg-upgrade_gradient"
          />
          <ul class="miletstones font-family-arial text-xl text-gray-500">
            <li style="--accent-color: #b3d692">
              <div class="date">1.</div>
              <div class="title">
                {{ doc.section_1_text }}
              </div>
              <div
                class="descr shadow-lg flex flex-wrap justify-start items-start gap-4"
              >
                <div
                  v-for="item in doc.section_1_items"
                  :key="item"
                  class="flex flex-row justify-start items-center text-gray-500 text-lg border border-gray-300 rounded-full"
                >
                  <IconArrowRightItem
                    class="w-8 h-auto text-upgrade_lightgreen"
                  />
                  <p class="whitespace-nowrap mx-2">{{ item.item }}</p>
                </div>
              </div>
            </li>
            <li style="--accent-color: #b3d692">
              <div class="date">2.</div>
              <div class="title">
                {{ doc.section_2_text }}
              </div>
              <div
                class="descr shadow-lg flex flex-wrap justify-start items-start gap-4"
              >
                <div
                  v-for="item in doc.section_2_items"
                  :key="item"
                  class="flex flex-row justify-start items-center text-gray-500 text-lg border border-gray-300 rounded-full"
                >
                  <IconArrowRightItem
                    class="w-8 h-auto text-upgrade_lightgreen"
                  />
                  <p class="whitespace-nowrap mx-2">{{ item.item }}</p>
                </div>
              </div>
            </li>
            <li style="--accent-color: #b3d692">
              <div class="date">3.</div>
              <div class="title text-justify">
                {{ doc.section_3_text }}
              </div>
            </li>
            <li style="--accent-color: #b3d692">
              <div class="date">4.</div>
              <div class="title text-justify">
                {{ doc.section_4_text }}
              </div>
            </li>
            <li style="--accent-color: #b3d692">
              <div class="date">5.</div>
              <div class="title text-justify">
                {{ doc.section_5_text }}
              </div>
              <div
                class="descr shadow-lg flex flex-wrap justify-start items-start gap-4"
              >
                <div
                  v-for="item in doc.section_5_items"
                  :key="item"
                  class="flex flex-row justify-start items-center text-gray-500 text-lg"
                >
                  <p class="bg-gray-100 rounded-md py-1 px-2">
                    {{ item.item }}
                  </p>
                </div>
              </div>
            </li>
            <li style="--accent-color: #b3d692">
              <div class="mx-auto text-center">
                <NuxtImg
                  :src="doc.profile"
                  :alt="doc.profile_name"
                  class="w-full xl:w-1/2 h-auto profile_image"
                />
                <!-- <h1 class="mt-8 text-5xl text-upgrade_pink font-family-dancing">
                  {{ doc.profile_name }}
                </h1> -->
              </div>
            </li>
          </ul>
          <IconArrowDown
            class="w-14 h-auto -mt-2 text-upgrade_lightgreen bg-gray-50 rounded-full invisible xl:visible"
          />

          <div
            class="container flex flex-col xl:flex-row justify-start items-center gap-4 my-16"
          >
            <div
              v-for="item in doc.section_6_items"
              :key="item"
              class="flex flex-col justify-start items-end gap-4 bg-gray-50 px-6 py-4 rounded-lg shadow-lg"
            >
              <p class="font-family-arial text-gray-500 text-justify text-lg">
                <IconQuote class="w-8 h-auto text-upgrade_gold" />
                {{ item.comment }}
              </p>
              <p class="font-family-dancing bg-upgrade_gradient text-2xl">
                {{ item.name }}
              </p>
            </div>
          </div>
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowRightItem from "@/components/icons/IconArrowRightItem.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconQuote from "@/components/icons/IconQuote.vue";
const langGlobal = useState("langGlobalState");
</script>

<style lang="scss" scoped>
ul.miletstones {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(70%);
  margin-inline: auto;

  &::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: rgb(225, 225, 225);
    border-radius: calc(var(--line-w) / 2);
  }

  li {
    &:not(:last-child) {
      margin-bottom: var(--row-gap);
    }

    grid-column: 2;
    --inlineP: 1.5rem;
    margin-inline: var(--inlineP);
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;

    .date {
      --dateH: 3rem;
      height: var(--dateH);
      margin-inline: calc(var(--inlineP) * -1);
      text-align: center;
      background-color: var(--accent-color);
      color: #d051b7;
      font-size: 1.25rem;
      font-weight: 700;
      display: grid;
      place-content: center;
      position: relative;
      border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);

      &::before {
        content: "";
        width: var(--inlineP);
        aspect-ratio: 1;
        background: var(--accent-color);
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
        position: absolute;
        top: 100%;
        clip-path: polygon(0 0, 100% 0, 0 100%);
        right: 0;
      }

      &::after {
        --bgColor: #b3d692;
        content: "";
        position: absolute;
        width: 2rem;
        aspect-ratio: 1;
        background: var(--bgColor);
        border: 0.3rem solid var(--accent-color);
        border-radius: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        right: calc(100% + var(--col-gap) + var(--line-w) / 2);
      }
    }

    .title,
    .descr {
      --bgColor: white;
      background: var(--bgColor);
      position: relative;
      padding-inline: 1.5rem;
    }

    .title {
      overflow: hidden;
      padding-block-start: 1.5rem;
      padding-block-end: 1rem;
      font-weight: 500;
    }

    .descr {
      padding-block-end: 1.5rem;
      font-weight: 300;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    .title::before,
    .descr::before {
      content: "";
      position: absolute;
      width: 90%;
      height: 0.5rem;
      background: rgba(0, 0, 0, 0.5);
      left: 50%;
      border-radius: 50%;
      filter: blur(4px);
      transform: translate(-50%, 50%);
    }

    .title::before {
      bottom: calc(100% + 0.125rem);
    }

    .descr::before {
      z-index: -1;
      bottom: 0.25rem;
    }
  }
}

@media (min-width: 1280px) {
  ul.miletstones {
    grid-template-columns: 1fr var(--line-w) 1fr;

    &::before {
      grid-column: 2;
    }

    li {
      &:nth-child(odd) {
        grid-column: 1;
      }

      &:nth-child(even) {
        grid-column: 3;
      }

      &:nth-child(2) {
        grid-row: 2/4;
      }

      &:nth-child(odd) .date {
        &::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          left: 0;
        }

        &::after {
          transform: translate(-50%, -50%);
          left: calc(100% + var(--col-gap) + var(--line-w) / 2);
        }

        border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
      }
    }
  }
}

@media (max-width: 640px) {
  ul.miletstones {
    display: block;
    width: 100%;
    padding: 0 1rem;

    li {
      display: block;
      .date {
        &::after {
          display: none;
        }
      }

      &::after {
        display: none;
      }
    }
  }
}

.credits {
  margin-top: 1rem;
  text-align: right;

  a {
    color: var(--color);
  }
}
.profile_image {
  margin: auto;
  background: #fff;
  padding: 30px;
  border-style: solid;
  border-width: 15px;
  border-top-color: lighten(#698f43, 20%);
  border-right-color: lighten(#698f43, 0%);
  border-bottom-color: lighten(#698f43, 20%);
  border-left-color: lighten(#698f43, 0%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
</style>
