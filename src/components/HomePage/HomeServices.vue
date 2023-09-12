<template>
  <div class="grid md:grid-cols-2 grid-cols-1 p-4">
    <!-- firt col -->
    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow">
      <div
        class="bg-green-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">الشهادات</div>
        <div class="text-center text-3xl">{{ allCetrtificates?.length }}</div>
      </div>
    </div>

    <!-- third col -->
    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow">
      <div
        class="bg-violet-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>


      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">الكورسات</div>
        <div class="text-center text-3xl">{{ allCourses?.length }}</div>
      </div>
    </div>

    <!-- forth col -->

    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow my-8">
      <div
        class="bg-amber-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
           <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">المستخدمين</div>
            <div class="text-center text-3xl">{{ allUsers?.length }}</div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeServices",
  computed: mapGetters(["allCetrtificates" , "allUsers" , "allCourses"]),
  async created() {
    this.checkCookie();
    await this.$store.dispatch("fetchUsers");
    await this.$store.dispatch("fetchCourses");
    await this.$store.dispatch("fetchCetrtificates");
  },
  inject: ["checkCookie"],
};
</script>

<style></style>
