<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف شهادة جديد</h2>

    <add-Cetrtificate-input />
  </div>
</template>

<script>
import AddCetrtificateInput from "@/components/AddCetrtificate/AddCetrtificateInput.vue";
export default {
  components: { AddCetrtificateInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCetrtificates");
    this.checkCookie();
  },
};
</script>

<style></style>
