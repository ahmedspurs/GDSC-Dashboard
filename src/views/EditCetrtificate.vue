<template>
  <div class="p-4 w-full">
    <h2 class="text-center">تعديل شهادة</h2>
    <edit-Cetrtificate-input />
  </div>
</template>

<script>
import EditCetrtificateInput from "@/components/EditCetrtificate/EditCetrtificateInput.vue";
export default {
  components: { EditCetrtificateInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCetrtificates");
    this.checkCookie();
  },
};
</script>

<style></style>
