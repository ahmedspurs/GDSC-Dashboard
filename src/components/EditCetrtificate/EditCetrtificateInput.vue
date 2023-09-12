<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="editCetrtificate()"
    ref="form"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="full_name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="cretificate.fullName"
        required
        name="full_name"
      />
      <label
        for="full_name"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم كامل</label
      >
    </div>
        <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="email"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="cretificate.email"
        required
        name="email"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الايميل</label
      >
    </div>


    
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      الكورس   </label>
    <select
      id="countries"
      v-model="cretificate.courseId"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="course in allCourses" :key="course.id"  :value="course.id">{{course.name}}</option>
    </select>


    <div class="checkout my-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        تعديل شهادة
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: "editCetrtificateInput",
  data() {
    return {
      errors: "",
      name: "",
      imageFile: null,
      cretificate : ""
    };
  },
  methods: {
    // all components response alert
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    async getCertificate(){
      const id = this.$route.params.id
      try {
        const res = await axios.get(`/api/v1/certifications/${id}`)
        this.cretificate = res.data
      } catch (error) {
        console.log(error);
      }
    },
    async editCetrtificate() {
      // loader  //
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });

         if (this.cretificate.fullName == "" || this.cretificate.fullName === undefined) {
        this.errors = " الرجاء ادخال الاسم ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
            if (this.cretificate.email == "" || this.cretificate.email === undefined) {
        this.errors = " الرجاء ادخال الايميل ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
                 if (this.cretificate.courseId == "" || this.cretificate.courseId === undefined) {
        this.errors = " الرجاء اختيار الكورس ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }

      const data = {
        id : this.$route.params.id,
        Cetrtificate : this.cretificate
      }
      if (await this.$store.dispatch("updateCetrtificate", data)) {
        this.responseAlert("تمت إضافة الفئة بنجاح", "تم", "success");
      } else {
        this.responseAlert(" حدث خطاء اثناء اضافة الفئة ", "عفوا", "error");
      }
      loader.hide();

      this.name = "";
    },
  },
  computed:{
    ...mapGetters(["allCourses"])
  },
  async created(){
    await this.$store.dispatch("fetchCourses")
    await this.getCertificate()
  },
  provide() {
    return {
      responseAlert: this.responseAlert,
    };
  },
};
</script>

<style></style>
