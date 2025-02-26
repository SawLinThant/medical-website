import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_PRODUCT_RATINGS } from "../query/productRating";
import { INSERT_PRODUCT_RATING } from "../mutation/productRating";

export interface ProductRating {
  id: string;
  product_id: string;
  user_id: string;
  rating: number; 
  review?: string;
  created_at: string;
}


export interface RatingInput {
  product_id: string;
  user_id: string;
  rating: number;
  review?: string;
}

export interface RatingSummary {
    averageRating: number;
    reviewCount: number;
    distribution: Record<number, number>;
  }


export const calculateAverageRating = async (
  client: ApolloClient<NormalizedCacheObject>,
  productId: string
): Promise<{ averageRating: number; reviewCount: number }> => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCT_RATINGS,
      variables: { productId },
      fetchPolicy: "network-only", 
    });

    if (!data || !data.product_ratings) {
      console.error(`No ratings found for product ID ${productId}`);
      return { averageRating: 0, reviewCount: 0 };
    }

    const ratings = data.product_ratings;

    if (ratings.length === 0) {
      return { averageRating: 0, reviewCount: 0 };
    }

    const total = ratings.reduce((sum: number, rating: ProductRating) => sum + rating.rating, 0);
    const averageRating = Number((total / ratings.length).toFixed(1)); 
    const reviewCount = ratings.length;

    return { averageRating, reviewCount };
  } catch (error: any) {
    console.error("Error calculating average rating:", error.message || error);
    return { averageRating: 0, reviewCount: 0 }; 
  }
};

export const insertProductRating = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: RatingInput
): Promise<ProductRating | null> => {
  try {
    const { data } = await client.mutate({
      mutation: INSERT_PRODUCT_RATING,
      variables: { input },
    });

    if (!data?.insert_product_ratings_one) {
      throw new Error("Failed to insert rating");
    }

    return data.insert_product_ratings_one;
  } catch (error: any) {
    console.error("Error inserting product rating:", error.message || error);
    return null; 
  }
};

export const getRatingSummary = async (
    client: ApolloClient<any>,
    productId: string
  ): Promise<RatingSummary> => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCT_RATINGS,
        variables: { productId },
        fetchPolicy: "no-cache",
      });
  
      if (!data?.product_ratings) {
        return { averageRating: 0, reviewCount: 0, distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
      }
  
      const ratings = data.product_ratings as ProductRating[];
      const reviewCount = ratings.length;
  
      if (reviewCount === 0) {
        return { averageRating: 0, reviewCount: 0, distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
      }
  
      const total = ratings.reduce((sum, rating) => sum + rating.rating, 0);
      const averageRating = Number((total / reviewCount).toFixed(1));
  
      const distribution = ratings.reduce((acc, rating) => {
        acc[rating.rating] = (acc[rating.rating] || 0) + 1;
        return acc;
      }, { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<number, number>);
  
      return { averageRating, reviewCount, distribution };
    } catch (error) {
      console.error("Error fetching rating summary:", error);
      return { averageRating: 0, reviewCount: 0, distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
    }
  };