import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const apiAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

apiAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      alert(err.message);
    } else {
      alert(
        "예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주시기 바랍니다."
      );
    }
    return Promise.reject(err);
  }
);
