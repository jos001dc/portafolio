import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"; {/* son hooks 
    useEffect ejecuta el codigo cuando el componente se monta o actualiza
    useState maneja estados si el menu esta abierto o scrolleada*/}


{/* se crea la navegacion de elementos 
    elementos que se encuentra dentro de ellos */}
const navItems = [ 
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mi", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
];


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false); {/* controla si el usuario ha hecho scroll en la pagina */}
    const [isMenuOpen, setIsMenuOpen] = useState(false); {/* controla si el menu movil esta abierto*/}

    {/* Al hacer scroll más de 10 píxeles, isScrolled pasa a true.
        Esto cambia el diseño del navbar (por ejemplo, agrega fondo borroso).
        El SCROLL es el movimiento que se hace de arriba hacia abajo , bajar o subir*/}

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

          {/* 
            Usa cn() para combinar clases.

            Si isScrolled es true, reduce el padding vertical (py-3) y añade:

            un fondo semitransparente,

            un desenfoque (backdrop-blur-md),

            y una sombra ligera (shadow-xs).

            Si no está scrolleado, usa py-5 (más grande).*/}
    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            {/*el contenedor interno 
            container limita el ancho 
            y lo demas distribuye elementos del navabr horizontalmente
            logo izquierda menu derecha*/}
            <div className="container flex items-center justify-between">

                {/*Muestra el nombre del portafolio con estilos y un efecto “glow” (brillo en el texto).*/}
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                    >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Jos</span>{" "}
                        Portafolio
                    </span>
                </a>

                {/* config escritorio del navbar */}

                {/* llama a los elementos del navItems y le estilos*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                            {item.name}
                        </a>
                    ))}
                </div>


                {/* config movil del navbar */}

                {/*en la parte del boton le indica que
                 Solo visible en móvil (md:hidden).

                Alterna el estado isMenuOpen.

                Muestra:

                X si el menú está abierto.

                Menu si está cerrado.*/}

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>
 
                 {/* 
                 fixed inset-0: ocupa toda la pantalla.

                bg-background/95 + backdrop-blur-md: fondo semitransparente y desenfocado.

                Se centra el contenido con flex flex-col items-center justify-center.

                 Cambia visibilidad:

                    Si está abierto → visible y clicable (opacity-100, pointer-events-auto).

                    Si está cerrado → invisible (opacity-0, pointer-none).
                 
                 */}

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-none:"
                    )}
                >

                {/* llama a los elementos del navItems y le estilos*/}
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}

                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </nav>
    );
};