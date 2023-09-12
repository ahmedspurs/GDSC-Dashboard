<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف شهادة ثانوي جديد</h2>

    <add-Course-input />
  </div>
</template>

<script>
import AddCourseInput from "@/components/AddCourse/AddCourseInput.vue";
export default {
  components: { AddCourseInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCetrtificates");
    this.checkCookie();
  },
};
</script>

<style></style>
