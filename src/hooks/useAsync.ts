import { useCallback, useEffect, useState } from "react";

export const useAsync = function (func: () => Promise) {
  const { executeFn, ...state } = useAsyncInternal(func, [], true);

  useEffect(
    function () {
      executeFn();
    },
    [executeFn]
  );

  return state;
};

export const useAsyncFn = function (func: () => Promise, dependencies = []) {
  return useAsyncInternal(func, dependencies, false);
};

/**
 *
 * @param {Function} func
 * @param {Array} dependencies
 * @param {boolean} initial
 * @returns An object that content error , loading , and the value of the resquesy
 */
export function useAsyncInternal(
  func: () => void,
  dependencies = [],
  initial: boolean
) {
  //state to handle to resquest correctly
  const [error, setError] = useState(initial || false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<[] | undefined>(undefined);

  /**
   * a function that will be call in orderto make the resquest at needed time
   */
  const executeFn = useCallback(
    function (...params: []) {
      setLoading(true);
      return func(...params)
        .then((res) => {

          if (res.message) {
            setError(res.message);
            setValue(undefined);
          }
          
          setValue(res);
          setError(undefined);
          console.log("res : ", res);
          return res;
        })
        .catch((err) => {
          console.log("err : ", err);
          setError(true);
          setValue(undefined);
          return Promise.reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [func]
  );

  return { error, loading, value, executeFn };
}
