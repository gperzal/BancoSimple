// utils/notifications.ts
import { toast } from "sonner";

export const notifySuccess = (title: string, description?: string) => {
  toast.success(title, {
    description,
  });
};

export const notifyError = (title: string, description?: string) => {
  toast.error(title, {
    description,
  });
};

export const notifyInfo = (title: string, description?: string) => {
  toast(title, { description });
};

export const notifyWarning = (
  title: string,
  description: string,
  onConfirm: () => void,
  onCancel?: () => void
) => {
  toast(title, {
    description,
    action: {
      label: "Eliminar",
      onClick: onConfirm,
    },
    cancel: {
      label: "Cancelar",
      onClick: onCancel || (() => {}),
    },
  });
};