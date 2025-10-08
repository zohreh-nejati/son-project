import axios from "axios";
import { useCallback, useState } from "react";
// const BASE_U = "http://localhost:5000/users"

export function useAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(
    async (url, method = "GET", requestData = null) => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios({
          method,
          url: url,
          data: requestData,
        });

        setData(response.data);
        return response.data;
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || err.message || "Something went wrong";
        setError(errorMessage);
        console.log(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const get = useCallback((url) => makeRequest(url, "GET"), [makeRequest]);
  const post = useCallback(
    (url, data) => makeRequest(url, "POST", data),
    [makeRequest]
  );
  const put = useCallback(
    (url, data) => makeRequest(url, "PUT", data),
    [makeRequest]
  );
  const del = useCallback((url) => makeRequest(url, "DELETE"), [makeRequest]);

  const clear = () => {
    setData(null);
    setError(null);
  };

  return {
    data,
    loading,
    error,
    get,
    post,
    put,
    delete: del,
    clear,
  };
}
