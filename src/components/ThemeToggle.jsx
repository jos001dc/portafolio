import { Moon, Sun } from "lucide-react"; {/*importaciones de iconos*/}
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; {/*importacion de utilidades de clases*/}

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {  {/* esta parte junto con las linea 21, 22, 25, 26 le dicen al sistema que guarda el tema del fondo*/}
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode("true");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "ligth");
            setIsDarkMode(false);
        }
    }, []);


    const toggleTheme = () => { {/* seleccion de temas al dar clic*/}
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "ligth");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    {/* podemos ver aqui la combinacion de clases de la util.js  */}
    return ( 
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}> 
        
            {" "} {/*color de los 2 iconos */}
            {isDarkMode ? (  
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    )
}

