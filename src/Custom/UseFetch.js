import axios from "axios";
import { useState, useEffect } from "react";

function useFeatch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAPI();
  }, [url]);
  return { data, error, isLoading };
}
export default useFeatch;
