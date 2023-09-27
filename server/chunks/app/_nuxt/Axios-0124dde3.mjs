import { computed } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';

const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props, $q) {
  return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
const baseURL = "https://beta.canada777.com";
const AxiosWithAuth = (meth, suburl, store, router, data) => {
  const instance = axios.create();
  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        Cookies.remove("token");
        store.commit("handleLogin", false);
        router == null ? void 0 : router.push("/");
      }
      return Promise.reject(error);
    }
  );
  return instance({
    method: meth,
    url: `${baseURL + suburl}`,
    headers: { "Authorization": "Bearer " + Cookies.get("token") },
    data
  });
};
const Axios = (meth, suburl, data) => {
  return axios({
    method: meth,
    url: `${baseURL + suburl}`,
    data
  });
};

export { AxiosWithAuth as A, Axios as a, useDark as b, useDarkProps as u };
//# sourceMappingURL=Axios-0124dde3.mjs.map
