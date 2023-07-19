import { useCallback, useEffect, useState } from "react";

export const useAsync = function (
  func: () => Promise<{
    error: boolean;
    loading: boolean;
    value: [] | undefined;
  }>
) {
  const { executeFn, ...state } = useAsyncInternal(func, [], true);

  useEffect(
    function () {
      executeFn()
        .then((res) => res)
        .catch((err) => err);
    },
    [executeFn]
  );

  return state;
};

export const useAsyncFn = function (
  func: (agrs: unknown[]) => Promise<any>,
  dependencies: unknown[]
) {
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
  func: (args: []) => Promise<GlobalRespnse>,
  dependencies: unknown[],
  initial: boolean
) {
  //state to handle to resquest correctly
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState(initial || false);
  const [value, setValue] = useState<GlobalRespnse>([]);

  /**
   * a function that will be call in orderto make the resquest at needed time
   */

  const executeFn: (...args: unknown[]) => Promise<GlobalRespnse> = useCallback(
    function (...dependencies: []) {
      setLoading(true);
      return func(dependencies)
        .then((res) => {
          console.log("res=== : ", res);
          if (!(res.status != 200)) {
            setError("res.message");
            setValue(undefined);

            return res;
          }

          setValue(res);
          setError(undefined);
          setLoading(false);
          return res;
        })
        .catch((err) => {
          console.log("err : ", err);
          setError(err?.message);
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
