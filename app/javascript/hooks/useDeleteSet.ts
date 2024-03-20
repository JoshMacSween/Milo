import { useMutation } from "@apollo/client";
import { DELETE_SET } from "./constants.ts";

export default function useDeleteSet() {
  const [deleteSet] = useMutation(DELETE_SET);
  const handleDeleteSet = () => {
    deleteSet({
      variables: {
        setId: "20"
      }
    });
  };
  return handleDeleteSet;
}