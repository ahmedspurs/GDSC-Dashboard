<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل الشهادات</h2>
    <div class="text-center pb-4">
      
      <router-link to="/AddCetrtificate">
                <button class="px-4 py-2 bg-blue-600 text-white">اضف شهادة جديد</button>

      </router-link>
    
    </div>
    <div class="flex justify-center items-center">
      <Cetrtificate-table />
    </div>
  </div>
</template>

<script>
import CetrtificateTable from "@/components/CetrtificatePage/CetrtificateTable.vue";


export default {
  components: { CetrtificateTable },
  name: "CetrtificatePage",
  inject: ["checkCookie"],
  data(){
    return{
      showModalAdd : false
    }
  },
  created() {
    this.checkCookie();
    this.$store.dispatch("fetchCetrtificates");
  },
};
</script>

<style></style>
