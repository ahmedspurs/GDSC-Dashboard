<template>
  <form class="w-full p-4" @submit.prevent="addUser()">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="fullName"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="fullName"
      />
      <label
        for="name"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم</label
      >
    </div>


    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="userName"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="userName"
      />
      <label
        for="userName"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >اسم المستخدم</label
      >
    </div>

        <div class="floating-input mb-5 relative">
      <input
        type="date"
        id="userName"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="startDate"
      />
      <label
        for="userName"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >تاريخ البدء</label
      >
    </div>

         <div class="floating-input mb-5 relative">
      <input
        type="date"
        id="userName"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="endDate"
      />
      <label
        for="userName"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >تاريخ اﻻنتهاء</label
      >
    </div>





    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="email"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="email"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >االايميل</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="password"
        id="password"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="password"
      />
      <label
        for="password"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >كلمه السر</label
      >
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      نوع المستخدم
    </label>
    <select
      id="countries"
      v-model="role"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="core_team">Core Team</option>
      <option value="volunteer">volunteer
</option>
      <option value="teacher">Teacher</option>
      <option value="admin">Admin</option>
    </select>

    <div class="checkout py-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضف المستخدم
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddUserInput",
  data() {
    return {
      userName: "",
      fullName : "",
      email: "",
      password: "",
      role: "",
      startDate : "",
      endDate : "",
      errors: "",
    };
  },
  methods: {
    async addUser() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      if (this.userName == "" || this.userName == undefined) {
        this.errors = "الرجاء ادخال اسم المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.email == "" || this.email == undefined) {
        this.errors = "الرجاء ادخال ايميل المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.password == "" || this.password == undefined) {
        this.errors = "الرجاء ادخال كلمة سر المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }


      const formData = {
        fullName :this.fullName,
        userName: this.userName,
        email: this.email,
        password: this.password,
        startDate:this.startDate,
        endDate: this.endDate,
        role: this.role,
      };
      if (await this.$store.dispatch("register", formData)) {
        this.responseAlert("تمت إضافة المستخدم بنجاح", "تم", "success");
        loader.hide();
      } else {
        this.responseAlert("خطاء اثناء اضافة المستخدم", "خطاء", "error");
        loader.hide();
      }
      this.userName = "";
      this.fullName = ""
      this.email = "";
      this.password = "";
      this.role = "";
    },
  },

  inject: ["responseAlert"],
};
</script>

<style></style>
