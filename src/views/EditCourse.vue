<template>
  <div class="p-4 w-full">
    <h2 class="text-center">تعديل شهادة</h2>
    <edit-Course-input />
  </div>
</template>

<script>
import EditCourseInput from "@/components/EditCourse/EditCourseInput.vue";
export default {
  components: { EditCourseInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCetrtificates");
    this.checkCookie();
  },
};
</script>

<style></style>
