<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
      stroke-width="0"
      fill="currentColor"
    >
      <animate
        attributeName="fill"
        values="#d051b7;#bc9e43;#698f43;#bc9e43;#d051b7"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
      stroke-width="0"
      fill="currentColor"
    >
      <animate
        attributeName="fill"
        values="#d051b7;#bc9e43;#698f43;#bc9e43;#d051b7"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
      stroke-width="0"
      fill="currentColor"
    >
      <animate
        attributeName="fill"
        values="#d051b7;#bc9e43;#698f43;#bc9e43;#d051b7"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  set: String,
});
</script>
