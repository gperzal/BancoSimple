// src/components/ui/form-group.tsx

interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

export const FormGroup = ({
  label,
  htmlFor,
  children,
  className,
  ...props
}: FormGroupProps) => {
  return (
    <div className={`space-y-1 ${className ?? ""}`} {...props}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
};
