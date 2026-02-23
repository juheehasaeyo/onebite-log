import { signInWithOQuth } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithOAuth(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithOQuth,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
