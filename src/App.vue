<template>
  <div class="dashboard">
    <Sidebar />
    <main>
      <div class="content">
        <PatientList />
        <DiagnosisHistory />
        <PatientDetails :patient="selectedPatient" />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/AppSidebar.vue";
import PatientList from "@/components/PatientList.vue";

export default {
  components: { Sidebar, PatientList },
  data() {
    return {
      selectedPatient: {
        name: "Jessica Taylor",
        dob: "August 23, 1996",
        gender: "Female",
      },
    };
  },
};
</script>

<style scoped>

.dashboard{
  font: manrope;
}

/* .dashboard {
  display: flex;
}
main {
  flex: 1;
  padding: 20px;
} */
.content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-direction: row;

}
</style>
