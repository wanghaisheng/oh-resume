<template>
  <BaseButton
    text="File"
    styles="bg-blue-500 text-white"
    active-styles="bg-blue-600 text-white"
  >
    <template #icon>
      <span class="iconify text-sm sm:text-base" data-icon="mdi:file-outline" />
    </template>

    <template #dropdown>
      <ul class="w-32">
        <li class="menu-li rounded-t" @click="toggleImport(true)">
          <span class="iconify text-sm sm:text-base" data-icon="mdi:upload" />
          <span class="text-xs sm:text-sm">Import MD</span>
        </li>
        <li class="menu-li rounded-b" @click="generatePDF">
          <span
            class="iconify text-sm sm:text-base"
            data-icon="mdi:progress-download"
          />
          <span class="text-xs sm:text-sm">Export PDF</span>
        </li>
      </ul>
    </template>
  </BaseButton>

  <Import v-if="isImportOpen" @close-import="toggleImport(false)" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseButton from "../tools/BaseButton.vue";
import Import from "./Import.vue";

const generatePDF = () => {
  window.print();
};

// Import menu
const isImportOpen = ref(false);

const toggleImport = (to?: boolean): void => {
  isImportOpen.value = typeof to === "boolean" ? to : !isImportOpen.value;
};
</script>
