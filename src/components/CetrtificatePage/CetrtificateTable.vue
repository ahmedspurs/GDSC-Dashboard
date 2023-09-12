<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

    <!-- search -->
    <div class="py-2 w-full">
      <label
        for="search3"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >بحث</label
      >
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search3"
          v-model="search"
          class="block p-4 pl-5 w-full text-left text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="البحث"
          required
        />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">رقم الشهادة</th>
          <th scope="col" class="px-6 py-3">اسم المستخدم</th>
          <th scope="col" class="px-6 py-3">اسم الكورس</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          :key="Cetrtificate.id"
          v-for="(Cetrtificate, index) in filtered"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ index + 1 }}
          </th>
          <td class="px-6 py-4">{{ Cetrtificate.fullName }}</td>
          
          <td class="px-6 py-4">{{ Cetrtificate.course.name }}</td>

          <td class="px-6 py-4">
            <router-link
              :to="{ name: 'EditCetrtificate', params: { id: Cetrtificate.id || 1 } }"
            >
              <a
                type="button"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                data-modal-toggle="EditCat"
                >تعديل
              </a>
            </router-link>
          </td>
          <td class="px-6 py-4">
            <a
              type="button"
              @click="deleteCetrtificate(Cetrtificate.id)"
              class="deleteBtn font-medium text-red-600 dark:text-blue-500 hover:underline"
              >حذف
            </a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OrdersTable",
  data() {
    return {
      success: false,
      failed: false,
      showModal: false,
      showModalAdd: false,
      CetrtificateId: "",
      search: "",
    };
  },
  computed: {
    ...mapGetters(["allCetrtificates"]),
    filtered() {
      return this.allCetrtificates.filter((item) => {
        return item?.fullName?.includes(this.search);
      });
    },
  },
  async created(){
    await this.$store.dispatch("fetchCetrtificates")
    console.log(this.allCetrtificates , this.filtered);
  },
  methods: {
    deleteCetrtificate(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذا المنتج مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteCetrtificate", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف المنتج بنجاح ",
              confirmButtonColor: "#16a34a",
            });
          } else {
            this.$swal.fire({
              icon: "error",
              title: " الغاء ",
              text: " تم الغاء عملية الحذف ",
              confirmButtonColor: "#16a34a",
              confirmButtonText: "حسنا",
            });
          }
        });
    },

  },
};
</script>

<style>
.deleteBtn {
  cursor: pointer;
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
