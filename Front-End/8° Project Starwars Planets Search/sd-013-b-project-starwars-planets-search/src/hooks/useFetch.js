import { useCallback, useEffect, useState } from 'react';

// useCallback https://www.youtube.com/watch?v=jMWNNSx-mcU&ab_channel=Rocketseat

const useFetch = (callback) => {
  const [data, setData] = useState({});

  const fetchApi = useCallback(async () => {
    const dataFetch = await callback();
    setData(dataFetch);
  }, [callback]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return data;
};

export default useFetch;
