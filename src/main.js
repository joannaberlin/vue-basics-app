import { createApp } from 'vue';
import App from './App.vue';
import WorkoutDetail from './components/WorkoutDetail.vue';

const app = createApp(App);
app.component('workout-detail', WorkoutDetail);

app.mount('#app');
