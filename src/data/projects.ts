export type Project = {
  index: string;
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Buscador de empleo con IA",
    description:
      "Aplicación que integra un agente de IA para rastrear, filtrar y priorizar ofertas de trabajo automáticamente, reduciendo el tiempo que toma la búsqueda manual en distintas plataformas.",
    tech: ["TypeScript", "IA / Agentes", "APIs"],
    code: "https://github.com/OsmarNoveloo/busquedaempleo2026",
    featured: true,
  },
  {
    index: "02",
    title: "Punto de venta para restaurantes",
    description:
      "Sistema de punto de venta pensado para restaurantes: control de mesas, captura de pedidos, comanda de cocina y cobro, con datos en tiempo real sobre una base PostgreSQL.",
    tech: ["React", "Express", "Supabase", "PostgreSQL"],
    demo: "https://pos-restaurant-one.vercel.app",
    code: "https://github.com/OsmarNoveloo/POS-restaurant",
    featured: true,
  },
  {
    index: "03",
    title: "Control de tienda El Campo",
    description:
      "Sistema para llevar el control de inventario y ventas de una tienda de abarrotes, con registro de movimientos e historial para tomar mejores decisiones de reabastecimiento.",
    tech: ["React", "TypeScript", "PostgreSQL"],
    demo: "https://tienda-el-campo.vercel.app",
    code: "https://github.com/OsmarNoveloo/tienda-el-campo",
    featured: true,
  },
  {
    index: "04",
    title: "Impresión térmica para iOS",
    description:
      "App para iPhone que permite conectar e imprimir tickets en impresoras térmicas desde cualquier dispositivo, eliminando la dependencia de hardware o sistemas operativos específicos.",
    tech: ["TypeScript", "iOS", "Impresión térmica"],
    code: "https://github.com/OsmarNoveloo/rincon-mx-print-ios",
    featured: true,
  },
  {
    index: "05",
    title: "ONsistemas",
    description:
      "Landing page para mi propia empresa de desarrollo, enfocada en presentar servicios de software a la medida para negocios locales.",
    tech: ["Astro", "TypeScript"],
    demo: "https://onsistemas.vercel.app",
    code: "https://github.com/OsmarNoveloo/ONsistemas",
    featured: true,
  },
];
