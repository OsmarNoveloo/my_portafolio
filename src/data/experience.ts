export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Desarrollador de sitios web",
    company: "Kimple",
    period: "Feb 2025 — Actualidad",
    description:
      "Desarrollo full stack de sitios y aplicaciones web para la empresa, trabajando en remoto desde Mérida.",
  },
  {
    role: "Desarrollador Full Stack",
    company: "CFE (Comisión Federal de Electricidad)",
    period: "Ago 2024 — Ene 2025",
    description:
      "Diseñé y desarrollé un sitio web completo para la gestión y control de protecciones de transformadores. Construí el frontend con HTML, CSS y JavaScript, y el backend con PHP conectado a una base de datos MySQL, cuidando la validación de entradas y la seguridad de los datos. Supervisé todo el ciclo de desarrollo, desde el diseño hasta el despliegue en servidor.",
  },
];
