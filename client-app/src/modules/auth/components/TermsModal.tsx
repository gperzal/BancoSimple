import { termsText } from "../utils/terms";
import { Button } from "@shadcn/button";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const TermsModal = ({ isOpen, onClose, onAccept }: TermsModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg max-h-[80vh] overflow-auto">
        <h2 className="text-xl font-bold items-center justify-center">
          Términos y Condiciones
        </h2>
        <p className="whitespace-pre-wrap mb-6 text-sm text-gray-700 dark:text-gray-300">
          {termsText}
        </p>
        <div className="flex justify-end space-x-2">
          <Button className="button-outline-auto" onClick={onClose}>
            Cerrar
          </Button>
          <Button className="button-primary-auto" onClick={onAccept}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};
