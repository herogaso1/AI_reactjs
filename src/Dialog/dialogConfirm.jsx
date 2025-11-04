import { Button } from "@/components/ui/button";
import Trash from "../assets/gifs/trash.json";
import Lottie from "lottie-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DialogDemo({
  isOpen,
  onOpenChange,
  onDelete,
  selectId,
  setCancel,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <Lottie
            className="w-full max-w-[200px] mx-auto"
            animationData={Trash}
            loop={true}
          />
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setCancel(true)}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" onClick={() => onDelete(selectId)}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
