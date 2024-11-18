<template>
    <div class="dashboard">
      <Sidebar />
      <main>
        <Header />
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
  import Header from "@/components/AppHeader.vue";
  import PatientList from "@/components/PatientList.vue";
  import DiagnosisHistory from "@/components/DiagnosisHistory.vue";
  import PatientDetails from "@/components/PatientDetails.vue";
  
  export default {
    components: { Sidebar, Header, PatientList, DiagnosisHistory, PatientDetails },
    data() {
      return {
        selectedPatient: {
          name: "Jessica Taylor",
          dob: "August 23, 1996",
          gender: "Female",
          // Add more fields
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    /* display: flex; */
  }
  main {
    /* flex: 1;
    padding: 20px; */
  }
  .content {
    /* display: flex;
    justify-content: space-between;
    gap: 20px; */
  }
  </style>
  