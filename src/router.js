import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'patientlist',
    component: () => import('@/components/PatientList.vue'),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
