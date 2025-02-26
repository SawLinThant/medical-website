"use client";
import { useEffect, useState } from "react";
import { ApolloClient } from "@apollo/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { insertProductRating, RatingInput } from "@/lib/apolloClient/services/productRating";
import { toast } from "@/hooks/use-toast";
import { SessionData } from "@/modules/checkout";
import { getSessionData } from "@/lib/utils";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";

interface RatingDialogProps {
  productId: string;
  productName: string;
  userId?: string; 
}

export const RatingDialog: React.FC<RatingDialogProps> = ({
  productId,
  productName,
  userId: propUserId, 
}) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loadingSession, setLoadingSession] = useState<boolean>(true);

  console.log("RatingDialog rendered");
  
  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const data = await getSessionData();
        setSessionData(data);
      } catch (error) {
        console.error("Error fetching session data:", error);
        setSessionData(null); 
      } finally {
        setLoadingSession(false);
      }
    };

    fetchSessionData();
  }, []); 

  const effectiveUserId = propUserId || sessionData?.userId;

  const handleSubmitRating = async () => {
    if (!effectiveUserId) {
      toast({ description: "Please log in to submit a rating.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const input: RatingInput = {
      product_id: productId,
      user_id: effectiveUserId,
      rating,
      review: review || undefined,
    };

    try {
      const result = await insertProductRating(serverApolloClient, input);
      if (result) {
        toast({ description: "Rating submitted successfully!" });
        setRating(0);
        setReview("");
      } else {
        toast({ description: "Failed to submit rating" });
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast({ description: "An error occurred while submitting your rating." });
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingSession) {
    return <p></p>; 
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {sessionData?.userId ? (
          <Button variant="outline" className="border-none bg-transparent">Rate Product</Button>
        ) : (
          <p className="text-sm text-muted-foreground"></p>
        )}
      </AlertDialogTrigger>
      {effectiveUserId && (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Rate {productName}</AlertDialogTitle>
            <AlertDialogDescription>
              Share your feedback by rating this product and leaving a review.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div>
              <label className="text-sm font-medium">Rating (1-5):</label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full mt-1 p-2 border rounded-md"
                disabled={submitting}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Review (optional):</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
                rows={3}
                placeholder="Write your review here..."
                disabled={submitting}
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={submitting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmitRating}
              disabled={submitting || rating < 1 || rating > 5 || review === ""}
            >
              {submitting ? "Submitting..." : "Submit Rating"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};