import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lightbulb, X } from "lucide-react";
import { TransferTips } from "@/modules/dashboard/transactions/components/TransferTips";

export function TransferTipsFloating() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg popover rounded-2xl shadow-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" /> Consejos para
              transferencias
            </DialogTitle>
          </DialogHeader>
          <TransferTips />
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          className="rounded-full shadow-md bg-white dark:bg-background hover:bg-muted/70"
        >
          <Lightbulb className="h-5 w-5 text-yellow-500" />
        </Button>
        <button
          className="text-muted-foreground hover:text-foreground text-xs"
          onClick={() => setVisible(false)}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
