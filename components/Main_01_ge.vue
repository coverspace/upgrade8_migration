<template>
  <div class="grid grid-cols-12 my-8">
    <div class="col-span-12">
      <div class="flex flex-col justify-start items-center">
        <ContentDoc path="main/block_01.ge" v-slot="{ doc }">
          <div
            class="relative flex flex-col justify-center items-center w-full h-full"
          >
            <NuxtImg
              :src="doc.image_0"
              :alt="doc.image_0"
              class="md:rounded-full xl:h-[80vh]"
            />

            <div class="absolute top-0 md:top-8 text-center font-family-arial">
              <h1
                class="border border-gray-300 rounded-xl mx-auto px-4 py-1 bg-upgrade_lightgreen text-upgrade_pink font-bold w-fit text-base lg:text-lg"
              >
                {{ doc.label_1 }}
              </h1>
              <h1
                class="border border-gray-300 rounded-xl mx-auto px-4 py-1 bg-upgrade_lightgreen text-upgrade_pink font-bold w-fit text-base lg:text-lg my-3"
              >
                {{ doc.label_2 }}
              </h1>
              <h1
                class="border border-gray-300 rounded-xl mx-auto px-4 py-1 bg-upgrade_lightgreen text-upgrade_pink font-bold w-fit text-base lg:text-lg"
              >
                {{ doc.label_3 }}
              </h1>
            </div>

            <h1
              class="absolute bottom-4 md:bottom-8 text-center border border-gray-300 rounded-xl mx-auto px-4 py-1 bg-upgrade_lightgreen text-upgrade_pink font-bold w-fit text-base xl:text-2xl font-family-arial"
            >
              {{ doc.label_4 }}
            </h1>

            <div
              v-for="(item, index) in doc.sets"
              :key="item"
              class="hidden md:block upgrade_portions"
            >
              <div
                v-for="e in item"
                :key="item"
                @click="openModal(index)"
                class="absolute transform hover:scale-110 cursor-pointer"
                :class="[
                  {
                    'top-[0%] md:left-[15%] lg:left-[20%] xl:left-[25%] 2xl:left-[30%]':
                      index === 0,
                  },
                  {
                    'top-[23%] md:left-[8%] lg:left-[13%] xl:left-[18%] 2xl:left-[23%]':
                      index === 1,
                  },
                  {
                    'top-[50%] md:left-[5%] lg:left-[10%] xl:left-[15%] 2xl:left-[20%]':
                      index === 2,
                  },
                  {
                    'top-[75%] md:left-[10%] lg:left-[15%] xl:left-[20%] 2xl:left-[25%]':
                      index === 3,
                  },
                  {
                    'top-[0%] md:right-[15%] lg:right-[20%] xl:right-[25%] 2xl:right-[30%]':
                      index === 4,
                  },
                  {
                    'top-[23%] md:right-[8%] lg:right-[13%] xl:right-[18%] 2xl:right-[23%]':
                      index === 5,
                  },
                  {
                    'top-[50%] md:right-[5%] lg:right-[10%] xl:right-[15%] 2xl:right-[20%]':
                      index === 6,
                  },
                  {
                    'top-[75%] md:right-[10%] lg:right-[15%] xl:right-[20%] 2xl:right-[25%]':
                      index === 7,
                  },
                ]"
              >
                <NuxtImg
                  :src="e.image"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px] text-base lg:text-xl xl:text-2xl text-upgrade_gold font-bold"
                >
                  {{ e.element }}
                </p>
              </div>
            </div>
          </div>

          <div
            v-for="item in doc.sets"
            :key="item"
            class="flip-card flex flex-wrap justify-center items-center gap-4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] my-8 md:hidden"
          >
            <div v-for="e in item" :key="item" class="flip-card-inner">
              <div class="flip-card-front">
                <NuxtImg
                  :src="e.image"
                  class="m-[15%] w-[250px] sm:w-[350px] shadow-xl"
                />
              </div>
              <div class="flip-card-back font-family-arial">
                <h1 class="my-8 text-base sm:text-xl font-bold">
                  {{ e.element }}
                </h1>
                <p class="mx-8 text-xs sm:text-lg text-justify">
                  {{ e.description }}
                </p>
              </div>
            </div>
          </div>
        </ContentDoc>
      </div>
    </div>

    <Transition>
      <div>
        <ContentDoc path="main/block_01.ge" v-slot="{ doc }">
          <ModalBar
            :setModal="setModal"
            @cancel="setModal = false"
            :desData="doc.sets[setModalNumber]"
          />
        </ContentDoc>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import ModalBar from "@/components/partials/ModalBar.vue";
const langGlobal = useState("langGlobalState");
const setModal = ref(false);
const setModalNumber = ref(null);

const openModal = (index) => {
  setModalNumber.value = index;
  setModal.value = !setModal.value;
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  border-bottom: 2px solid gray;
}

.router-link-exact-inactive {
  border-bottom: 2px solid transparent;
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

.upgrade_portions {
  div {
    background-color: #bc9e43;
    border: 2px solid #bc9e43;
    -webkit-clip-path: polygon(
      50% 0,
      90% 20%,
      100% 60%,
      75% 100%,
      25% 100%,
      0% 60%,
      10% 20%
    );
    clip-path: polygon(
      50% 0,
      90% 20%,
      100% 60%,
      75% 100%,
      25% 100%,
      0% 60%,
      10% 20%
    );

    &:hover {
      background-color: white;
      border: 2px solid white;
    }

    img {
      -webkit-clip-path: polygon(
        50% 0,
        90% 20%,
        100% 60%,
        75% 100%,
        25% 100%,
        0% 60%,
        10% 20%
      );
      clip-path: polygon(
        50% 0,
        90% 20%,
        100% 60%,
        75% 100%,
        25% 100%,
        0% 60%,
        10% 20%
      );
    }

    p {
      display: none;
    }

    &:hover p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:hover img {
      display: none;
    }
  }
}

$color_1: black;
$color_2: #d051b7;
$background-color_1: transparent;
$background-color_2: #fff;
$background-color_3: #b3d692;

.flip-card {
  background-color: $background-color_1;
  perspective: 1000px;
  &:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.flip-card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: $background-color_2;
  color: $color_1;
}
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: $background-color_3;
  color: $color_2;
  transform: rotateY(180deg);
}
</style>
