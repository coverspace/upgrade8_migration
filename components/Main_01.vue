<template>
  <div class="grid grid-cols-12 my-8">
    <div class="col-span-12">
      <div class="flex flex-col justify-start items-center">
        <ContentDoc path="main/block_01" v-slot="{ doc }">
          <div
            class="relative flex flex-col justify-center items-center w-full h-full"
          >
            <NuxtImg
              :src="doc.image_0"
              :alt="doc.image_0"
              class="md:rounded-full"
            />

            <div class="absolute top-0 md:top-8 text-center">
              <h1>{{ doc.label_1 }}</h1>
              <h1>{{ doc.label_2 }}</h1>
              <h1>{{ doc.label_3 }}</h1>
            </div>

            <div class="absolute bottom-4 md:bottom-8 text-center">
              <h1>{{ doc.label_4 }}</h1>
            </div>

            <div class="hidden md:block upgrade_portions">
              <div
                class="absolute top-[0%] md:left-[15%] lg:left-[20%] xl:left-[25%] 2xl:left-[30%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[25%] md:left-[8%] lg:left-[13%] xl:left-[18%] 2xl:left-[23%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[50%] md:left-[5%] lg:left-[10%] xl:left-[15%] 2xl:left-[20%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[75%] md:left-[10%] lg:left-[15%] xl:left-[20%] 2xl:left-[25%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[0%] md:right-[15%] lg:right-[20%] xl:right-[25%] 2xl:right-[30%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[25%] md:right-[8%] lg:right-[13%] xl:right-[18%] 2xl:right-[23%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[50%] md:right-[5%] lg:right-[10%] xl:right-[15%] 2xl:right-[20%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
              <div
                class="absolute top-[75%] md:right-[10%] lg:right-[15%] xl:right-[20%] 2xl:right-[25%] transform hover:scale-110 cursor-pointer"
              >
                <NuxtImg
                  src="https://picsum.photos/150"
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                />
                <p
                  class="md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] md:h-[110px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]"
                >
                  Kolbász
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex flex-wrap justify-center items-center gap-4 my-4 w-full md:hidden"
          >
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
            <NuxtImg
              src="https://picsum.photos/150"
              class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
            />
          </div>

          <!-- <ContentRenderer
            :value="doc"
            class="text-base xl:text-6xl w-3/5 xl:w-1/2 text-center font-light text-gray-500 uppercase"
          /> -->
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
