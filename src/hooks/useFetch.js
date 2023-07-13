import { fetcher } from "../lib/utils";
import useSWR from "swr";

export default function useFetch(url) {
  const { data, error, isLoading } = useSWR(`${url}`, fetcher);
  return {
    data,
    isLoading,
    isError: error,
  };
}
