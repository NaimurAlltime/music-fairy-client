import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  // use tan-stack query
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default useClasses;
