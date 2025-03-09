import { Shield, Zap, CreditCard, Globe } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: CreditCard,
    title: "Cuenta sin costos ocultos",
    text: "Sin comisiones, solo transparencia.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    text: "Autenticación en dos pasos para tu tranquilidad.",
  },
  {
    icon: Zap,
    title: "Transacciones Instantáneas",
    text: "Envía y recibe dinero al instante.",
  },
  {
    icon: Globe,
    title: "Accesible para todos",
    text: "Administra tu dinero desde cualquier lugar.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Beneficios Destacados
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-4 border border-border/50 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center p-4">
                <feature.icon size={40} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
