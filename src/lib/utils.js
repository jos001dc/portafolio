import { clsx } from "clsx"; {/* sirve para combinar clases */}
import { twMerge } from "tailwind-merge"; {/* se usa para resolver conflictos de clases de Tailwind*/}

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

{/*esta utilidad se usa para combinar clases */}

{/*cn funciona para combinar clsx y twMerge */}