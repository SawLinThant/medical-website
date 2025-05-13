import { GET_CUPONS_BY_NO } from "@/lib/apolloClient/query/cuponsQuery";
import { Cupon } from "@/lib/apolloClient/services/cupon";
import { useLazyQuery } from "@apollo/client";

interface GetCuponsByCuponNumberResponse {
  cupons: Cupon[];
}

interface UseCuponsByCuponNumberReturn {
  getCupon: (cupon_number: string) => Promise<Cupon | null>;
}

export const useGetCuponsByCuponNumber = (): UseCuponsByCuponNumberReturn => {
  const [getCupon] = useLazyQuery<GetCuponsByCuponNumberResponse>(GET_CUPONS_BY_NO);

  const executeGetCupon = async (cupon_number: string): Promise<Cupon | null> => {
    if (!cupon_number) {
      throw new Error("Cupon number is required");
    }
    try {
      const { data } = await getCupon({ variables: { cupon_number } });
      return data?.cupons?.[0] || null;
    } catch (err) {
      throw new Error("Failed to fetch cupon");
    }
  };

  return { getCupon: executeGetCupon };
};