<template>
  <BaseButton>
    <template #icon>
      <span
        class="iconify text-sm sm:text-base"
        data-icon="icon-park-outline:paragraph-break-two"
      />
    </template>

    <template #dropdown>
      <div class="w-7 sm:w-8 py-3">
        <Slider
          v-model="paragraphSpace"
          :max="50"
          orientation="vertical"
          class="mx-auto"
        />
      </div>
    </template>
  </BaseButton>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import BaseButton from "./BaseButton.vue";
import { setStoreState } from "../../store";
import { onStylesUpdate } from "../../utils";

const store = useStore();

const paragraphSpace = computed({
  get() {
    return store.state.styles.paragraphSpace;
  },
  set(value: number) {
    setStoreState("styles", "paragraphSpace", value);
    onStylesUpdate(store.state.styles);
  }
});
</script>
