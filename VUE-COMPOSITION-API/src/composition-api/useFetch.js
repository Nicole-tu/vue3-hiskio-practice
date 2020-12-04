import axios from 'axios';
import { ref, reactive } from 'vue';

export function Fetches(API_URL = '') {

  const isLoading = ref(false);
  const fetchData = reactive({ data: [] });
  const errMsg = ref('');

  axios.get(API_URL).then(res => {
    isLoading.value = true;
    fetchData.data = res.data;
  }).catch(error => {
    console.dir(error);
    errMsg.value = error.request.statusText;
  });

  return { isLoading, fetchData, errMsg };
}