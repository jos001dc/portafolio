import { useState } from "react";
import { cn } from "@/lib/utils";

{/*hacemos una array con las habilidades*/ }
const skills = [
    //frontend
    { name: "HTML/CSS", level: 60, category: "frontend" },
    { name: "JavaScritp", level: 50, category: "frontend" },
    { name: "React", level: 20, category: "frontend" },
    { name: "Tailwind css", level: 20, category: "frontend" },

    //Backend
    { name: "MongoDB", level: 0, category: "backend" },
    { name: "MySQL", level: 40, category: "backend" },

    //Tools
    { name: "Git/GitHub", level: 10, category: "tools" },
    { name: "Figma", level: 10, category: "tools" },
];
 //aqui definimos los sub menus de las habilidades
const categorias = ["all", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    //se crea una variable 
    //activeCategory → guarda la categoría seleccionada actualmente
   //setActiveCategory → función para cambiar ese valor
   //"all" → valor inicial, es decir, al principio se muestran todas las habilidades
   //useState("all") Guarda la categoría seleccionada
    const [activeCategory, setActiveCategory] = useState("all");


    //Esta línea crea una lista filtrada de habilidades basada en la categoría activa.
    //Toma el arreglo completo skills y devuelve un nuevo arreglo solo con las habilidades que cumplen una condición.

    {/*Si activeCategory es "all"
    → No filtra nada, devuelve todas las habilidades.*/}
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        //todo esta dentro de una seccion
        <section id="skills" className="py-24 px-4 relative bg-secundary/30">
            {/*dentro de la seccion se crea un container*/}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Mis <span className="text-primary">Habilidades</span>
                </h2>
                {/*se crea el titulo */}

                {/*en esta parte se crea unos botones con su filtraciones con sus estilos */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">  
                    {/*en esta parte esta tomando el arreglo category y esta usanso un key como llave para cada categoria*/}
                    {categorias.map((category, key) => ( 
                        //cada boton recibe un key para que react lo identifique
                        //el onClick actualiza activeCategory que dispara para que filtre las categorias
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            //aqui se junta las clases (los estilos)
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                //aqui se se le da el calor cuando seleccionamos una categoria
                                //si es verdadero se selecciona , y si no cambia de color 
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/*aqui se crea las columnas con sus estilos y todo esta dentro de este div*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/*filteredSkills es un array ya filtrado según la categoría activa. Por cada habilidad (skill) se renderiza una tarjeta.*/}
                    {filteredSkills.map((skill, key) =>
                    
                    //le da estilos a las tarjetas
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">


                            {/* este div solo es para el titulo de la habilidad con su estilo*/}
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/*es un fondo gris oscuro para ver la diferencia del proceso*/}
                            <div className="w-full bg-secundary/50 h-2 rounded-full overflow-hidden">

                            {/*es div represe el nivel de habilidad*/}
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow-1.5s_ease-out]"
                                // se le agrego style para poder implementar width que con junto skill.level 
                                //le indica que si el skill.level es de 80, la barra tendra un width (ancho) 80%
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            {/*lo mismo pasa con este div solo que aqui no utilizamos el style*/}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>

                    )}
                </div>
            </div>


        </section>
    )
}
