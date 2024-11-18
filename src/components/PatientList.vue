<template>
  <div class="container">
    <!-- Patient List -->
    <div class="patient-list">
      <h2>Patients</h2>
      <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.png" alt="Search Icon" class="search-icon" />
      <ul>
        <li
          v-for="patient in filteredPatients"
          :key="patient.name"
          @click="selectPatient(patient)"
        >
          <div  style="background-color: none; width: 25vw;" class="patient-dets">
            <img style="margin-right: 15px;" :src="patient.profile_picture" alt="Patient" />
            <div class="patient-details">
              <p>{{ patient.name }}</p>
              <span>{{ patient.gender }}, {{ patient.age }}</span>
            </div>
            <img
              class="more"
              src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.png"
              alt="More"
            />
          </div>
        </li>
      </ul>
    </div>

    <div class="diagnosis-history" v-if="selectedPatient">
      <h3>Diagnosis History</h3>

      <!-- <select v-model="selectedMonth" @change="applyMonthFilter">
  <option v-for="month in last6Months" :key="month.value" :value="month.value">
    {{ month.label }}
  </option>
</select> -->

      <canvas id="diagnosisChart"></canvas>

      <div>
    <!-- Patient Diagnosis Stats -->
    <div class="stats-container" v-for="(diagnosis, index) in selectedPatient.diagnosis_history" :key="index">
   
      <!-- Respiratory Rate -->
      <div class="stat-card green" v-if="selectedPoint === index">
        <img src="/assets/respiratory rate.png">
        <p>Respiratory Rate</p>
        <h4>{{ diagnosis.respiratory_rate.value }} bpm</h4>
        <p>
          <br><span>{{ diagnosis.respiratory_rate.levels }}</span>
        </p>
      </div>

      <!-- Temperature -->
      <div class="stat-card red" v-if="selectedPoint === index">
        <img src="/assets/temperature.png">
        <p>Temperature</p>
        <h4>{{ diagnosis.temperature.value }}°F</h4>
        <p>
          <br> <span>{{ diagnosis.temperature.levels }}</span>
        </p>
      </div>

      <div class="stat-card pink" v-if="selectedPoint === index">
        <img src="/assets/HeartBPM.png">
        <p>Heart Rate</p>
        <h4>{{ diagnosis.heart_rate.value }} bpm</h4>
        <p>
          <br><span>{{ diagnosis.heart_rate.levels }}</span>
        </p>
      </div>

    </div>
    <div v-if="selectedPatient" class="diagnostic-history">
  <h3>Diagnostic List</h3>
  <table class="diagnostic-history-table">
    <thead >
      <tr>
        <th>Problem/Diagnosis</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(diagnostic, index) in selectedPatient.diagnostic_list" :key="index">
        <td>{{ diagnostic.name }}</td>
        <td>{{ diagnostic.description }}</td>
        <td>{{ diagnostic.status }}</td>
      </tr>
    </tbody>
  </table>
</div>
    <!-- Diagnosis Chart -->
  </div>
  

   
</div>
      
    <!-- Patient Details -->
     <div>
    <div style="text-align: left;" class="patient-details" v-if="selectedPatient">
      <div class="patient-details-container">
        <img
          :src="selectedPatient.profile_picture"
          alt="Patient Profile"
          class="patient-profile-img"
        />
        <h2 style="text-align: center;" >{{ selectedPatient.name }}</h2>

        <div class="pt2">
          <img class="icon" src="/assets/BirthIcon.png" />
          <div>
            <p>Date Of Birth:</p>
            <p>{{ formatDate(selectedPatient.date_of_birth) }}</p>
          </div>
        </div>

        <div class="pt1">
          <img class="icon" src="/assets/FemaleIcon.png" />
          <div>
            <p>Gender:</p>
            <p>{{ selectedPatient.gender }}</p>
          </div>
        </div>

        <div class="pt3">
          <img class="icon" src="/assets/PhoneIcon.png" />
          <div>
            <p>Contact Lines:</p>
            <p>{{ selectedPatient.phone_number }}</p>
          </div>
        </div>

        <div class="pt4">
          <img class="icon" src="/assets/PhoneIcon.png" />
          <div>
            <p>Emergency Contacts:</p>
            <p>{{ selectedPatient.emergency_contact }}</p>
          </div>
        </div>

        <div class="pt5">
          <img class="icon" src="/assets/InsuranceIcon.png" />
          <div>
            <p>Insurance:</p>
            <p>{{ selectedPatient.insurance_type }}</p>
          </div>
        </div>

        <button class="static-button">Show All Information</button>
      </div>
    </div>
    <div v-else class="no-selection">No patient selected.</div>
    <div v-if="selectedPatient" class="patient-details-container2" >
        <h3>Lab Results</h3>
        <ul class="tests">
          <div v-for="(result, index) in selectedPatient.lab_results" :key="index">
            <p>{{ result }}</p>
            <img class="download-icon" src="/assets/icons8-download-64.png" alt="Download Icon" />
          </div>
        </ul>
      </div>
    </div>
 </div>
</template>


<script>
import { Chart, LineController, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

export default {
  data() {
    return {
      searchQuery: '',
      patients: [], // All fetched patients
      selectedPatient: null, // Current selected patient
      filteredDiagnosisHistory: [],
      selectedPoint: null, // Store the selected point index
      chart: null, // Store the chart instance
      selectedMonth: '', // Store selected month
    last6Months: [], // Store the last 6 months
    };
  },
  created() {
  this.calculateLast6Months();
  this.renderDiagnosisChart(); // Initial rendering
},
  computed: {
    filteredPatients() {
      return this.patients.filter((patient) =>
        patient.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    async fetchPatientDetails() {
      const username = 'coalition';
      const password = 'skills-test';
      const credentials = `${username}:${password}`;
      const base64Credentials = btoa(credentials);

      try {
        const response = await fetch(
          'https://fedskillstest.coalitiontechnologies.workers.dev',
          {
            method: 'GET',
            headers: {
              Authorization: `Basic ${base64Credentials}`,
            },
          }
        );
        const data = await response.json();
        this.patients = data;
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit', year: 'numeric' }).format(date);
    },
    selectPatient(patient) {
      this.selectedPatient = patient; // Set the selected patient
      this.renderDiagnosisChart(); // Render chart when patient is selected
    },
    calculateLast6Months() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const now = new Date();
    const last6Months = [];

    for (let i = 0; i < 6; i++) {
      const month = new Date();
      month.setMonth(now.getMonth() - i);
      last6Months.push({
        label: `${months[month.getMonth()]} ${month.getFullYear()}`,
        value: `${months[month.getMonth()]} ${month.getFullYear()}`,
      });
    }

    this.last6Months = last6Months.reverse(); // Ensure months are in the correct order
    this.selectedMonth = this.last6Months[0].value; // Set the default selected month
  },

  // Filter the diagnosis history based on the selected month
  applyMonthFilter() {
    // Filter the diagnosis history based on the selected month
    this.filteredDiagnosisHistory = this.selectedPatient.diagnosis_history.filter(diagnosis => {
      const diagnosisMonthYear = `${diagnosis.month} ${diagnosis.year}`;
      return diagnosisMonthYear === this.selectedMonth;
    });
    this.renderDiagnosisChart();
  },

  renderDiagnosisChart() {
    this.$nextTick(() => {
      if (this.selectedPatient && this.selectedPatient.diagnosis_history && this.selectedPatient.diagnosis_history.length > 0) {
        // Use the filtered diagnosis history to generate chart data
        const filteredDiagnosisHistory = this.filteredDiagnosisHistory.length > 0 ? this.filteredDiagnosisHistory : this.selectedPatient.diagnosis_history;

        // Limit to the last 6 months
        const last6DiagnosisHistory = filteredDiagnosisHistory.slice(-6);

        // Extract data for heartRates, respiratoryRates, and temperatures
        const heartRates = last6DiagnosisHistory.map(diagnosis => diagnosis.heart_rate.value || 0);
        const respiratoryRates = last6DiagnosisHistory.map(diagnosis => diagnosis.respiratory_rate.value || 0);
        const temperatures = last6DiagnosisHistory.map(diagnosis => diagnosis.temperature.value || 0);

        // Format the labels to be "MMM. YYYY"
        const labels = last6DiagnosisHistory.map(diagnosis => {
          const month = new Date(`${diagnosis.month} 1, ${diagnosis.year}`).toLocaleString('en-US', { month: 'short', year: 'numeric' });
          return month;
        });

        const canvasElement = document.getElementById('diagnosisChart');
        if (!canvasElement) {
          console.error('Canvas element not found');
          return;
        }

        const ctx = canvasElement.getContext('2d');
        if (!ctx) {
          console.error('Canvas context could not be obtained');
          return;
        }

        // Destroy the previous chart to avoid conflicts
        if (this.chart) {
          this.chart.destroy();
        }

        Chart.register(
        LineController, 
        LineElement, 
        CategoryScale, 
        LinearScale, 
        PointElement, 
        Title, 
        Tooltip, 
        Legend
      );
        // Create the chart
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Heart Rate (bpm)',
                data: heartRates,
                borderColor: 'pink',
                backgroundColor: 'rgba(255, 105, 180, 0.5)',
                fill: true,
              },
              {
                label: 'Respiratory Rate (breaths/min)',
                data: respiratoryRates,
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              {
                label: 'Temperature (°F)',
                data: temperatures,
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              }
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Blood Pressure',
                align: 'start', 
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
            },
            scales: {
              x: {
                type: 'category',
                labels: labels,
                ticks: {
                  autoSkip: false, // Prevent auto-skipping of labels
                  maxRotation: 0,  // Ensure the labels are horizontal
                  minRotation: 0,  // Prevent rotating labels
                },
              },
            },
            layout: {
              padding: 20,  // Adds padding around the chart
            },
            elements: {
              line: {
                tension: 0.4, // Make the lines smoother
              },
            },
            backgroundColor: 'rgba(240, 240, 240, 0.2)', // Set chart background color
            onClick: (event) => {
              const activePoints = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
              if (activePoints.length) {
                const index = activePoints[0].index;
                this.selectedPoint = index;
              }
            },
                    },
        });
      }
    });
  },
    getDiagnosisHistory() {
      return this.selectedPatient && this.selectedPatient.diagnosis_history ? this.selectedPatient.diagnosis_history : [];
    },
  },
  mounted() {
    this.fetchPatientDetails();
  },
};
</script>


<style scoped>
/* Main container */
.container {
  display: flex;
  margin-top: 10px;
  gap: 20px; /* Spacing between the sections */
  justify-content: space-between;
}

.more{
        margin-top: 15px;
        position: relative;
        align-items: self-end;
        margin-left: 50px;
width: 12px;
height: 4px;
opacity: 1;
    }

    .search-icon {
      width: 15px;
      position: relative;
      left: 90%;
      top: -40px;
    }
/* Patient list styling */
.patient-list {
  font: manrope;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 18vw; /* Increase width to make it wider */
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 10px;
  left: 20px;
  z-index: 10;
  border-radius: 10px;
  height: 149vh; /* Fixed height (adjust as needed) */
  overflow-y: auto; /* Enable vertical scrolling */
}


.patient-details-container2 {
  width: 90%; /* Same width as patient-details */
  margin-top: -25px; /* Add some spacing */   
   top: 50px;
    position: relative;
    right: 20px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-left: 3vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 38vh;
        overflow-y: auto;
        font-size: 14px;
  }

  .patient-details-container2 h3{
  margin-left: 10px; 
  }

   .patient-details-container2 p{
   margin-bottom: 0px;
   margin-left: 10px;
   padding: 17px;
   }

     .patient-details-container2 img{
width: 15px ;
height: 15px ; 
display: block;
margin-top: -40px;
margin-left: auto;
     }  


.patient-dets {
  display: flex;
  height: 10vh;
  background-color: none;
}

.patient-list h2 {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

ul li:hover {
  background-color: #f1f1f1;
}

ul li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

ul li p {
  margin: 0;
  font-weight: bold;
}

/* Patient details styling */
.patient-details {
  border-radius: 10px;
  text-align: left;
}

.patient-details-container {
  background-color: #ffffff;
  padding: 20px;
  width: 22vw;
  left: 90vw;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 3vw;
  height: 103vh;
text-align: left;
  overflow-y: auto;
}

.patient-details-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin-top: 19px;
  justify-items: center;
}

.patient-profile-img{
  justify-items: center;
  margin-left: 32%;
  justify-content: center;
  align-items: center;
}

.patient-details-container h2 {
  text-align: center;
justify-items: center;

}

.patient-details-container h2 {
  margin-bottom: 10px;
  margin-right: 10px;
}

.pt1,
.pt2,
.pt3,
.pt4,
.pt5 {
  display: flex;
  align-items: left;
  margin-top: 0px;
  text-align: left;
}

.pt1 img,
.pt2 img,
.pt3 img,
.pt4 img,
.pt5 img {
  width: 30px;
  height: 30px;
  margin-right: 20px;
}

.static-button {
  background-color: #01F0D0;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  align-self: center;
  margin-top: 20px;
  margin-left: 90px;
}

.patient-details-container li p {
    margin: 5px 0;
    
  }

  .no-selection {
  font-size: 18px;
  color: #aaa;
  text-align: center;
  padding: 50px;
}

.diagnostic-history {
  width: 100%;
  margin: 20px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: -20px;
  height: 40vh;
  overflow-y: auto;
  margin-right: 0%;
  margin-top: 16vh;
  text-align: left;

}

.diagnostic-history h3 {
  font-size: 1.5rem;
  font-weight: 600;
  font-size: 18px;
  color: #1c1e21; /* Dark text for the heading */
  margin-bottom: 15px;
}

.diagnostic-history-table {
  width: 100%;
  border-collapse: separate; /* Separate borders for the table */
  border-spacing: 0; /* No additional spacing */
  overflow: hidden;
  border-radius: 8px; /* Rounded corners for the table */
}

.diagnostic-history-table th {
  background-color: #f8f9fa; /* Light gray background for the header */
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  color: #000000; /* Subtle gray color for the text */
  padding: 15px;
  border-bottom: 1px solid #ddd; /* Light border below the header */
}

.diagnostic-history-table td {
  padding: 15px;
  font-size: 12px;
  color: #072635; /* Slightly darker gray for content */
  border-bottom: 1px solid #f1f3f5; /* Light border between rows */
}

.diagnostic-history-table tr:last-child td {
  border-bottom: none; /* Remove border for the last row */
}

.diagnostic-history-table tr:hover {
  background-color: #f8f9fa; /* Highlight row on hover */
}

.diagnostic-history-table th:first-child,
.diagnostic-history-table td:first-child {
  border-top-left-radius: 20px; /* Rounded top-left corner */
  border-bottom-left-radius: 20px; /* Rounded bottom-left corner */
}

.diagnostic-history-table th:last-child,
.diagnostic-history-table td:last-child {
  border-top-right-radius: 20px; /* Rounded top-right corner */
  border-bottom-right-radius: 20px; /* Rounded bottom-right corner */
}


.diagnosis-history {
  margin: 10px;
  margin-left: 30px;
  padding: 20px;
  width: 38vw;
  margin-bottom: -40px;
  height: 90vh;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.diagnosis-history h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1c1e21;
  margin-bottom: 15px;
}

/* Chart Section */
.chart-container {
  background-color: #f9f6ff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.chart-header h4 {
  font-weight: 600;
  font-size: 1.2rem;
}

.chart {
  height: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 15px;
}

.chart-legend {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  font-size: 0.9rem;
  color: #6c757d;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend-dot.systolic {
  background-color: #c088fc;
}

.legend-dot.diastolic {
  background-color: #7986ff;
}

.chart-values {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.chart-values h5 {
  font-size: 1.5rem;
  font-weight: 700;
}

.chart-values p {
  color: #6c757d;
  font-size: 0.9rem;
}

/* Stats Section */
.stats-container {
  display: flex;
  gap: 20px;
  margin-top: 5px;
  margin-left: 0vw;
  width: 70vw;
}

.stat-card {
display: flex;
  flex-direction: column;
  width: 120px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  color: #000000;
}

.stat-card img {
  width: 60px;
  margin-bottom: 10px;
}

.stat-card.pink {
  background-color: #FFE6F1;
  text-align: left;

}

.stat-card.red {
  background-color: #FFE6E9;
  text-align: left;

}

.stat-card.green {
  background-color: #E0F3FA;
  text-align: left;

}

.stat-card h4 {
  margin-bottom: 5px;
  font-size: 22px;
  text-align: left;
  text-decoration: none;
  margin-top: -2px;
}

.stat-card p {
  margin: 5px 0;
  font-size: 0.9rem;
  text-align: left;
  margin-top: 0px;
}



</style>
