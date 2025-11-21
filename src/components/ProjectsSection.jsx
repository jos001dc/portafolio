import {  ArrowRight, ExternalLink, Github } from "lucide-react";


//primero declaramos las variables de cada uno de los proyectos
const projects = [
    {
        id: 1,
        title: "portal transparencia",
        description: "Micrositio del portal de transparencia del OPLE",
        image: "/projects/project1.png",
        tags: ["Html", "css", "javaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/jos001dc/portal"
    },

    {
        id: 2,
        title: "por hacer",
        description: "Micrositio del portal de transparencia del OPLE",
        image: "/projects/project1.png",
        tags: ["Html", "css", "javaScript"],
        demoUrl: "#",
        githubUrl: "#"
    },

    {
        id: 3,
        title: "por hacer",
        description: "Micrositio del portal de transparencia del OPLE",
        image: "/projects/project1.png",
        tags: ["Html", "css", "javaScript"],
        demoUrl: "#",
        githubUrl: "#"
    },
];

export const ProjectsSection = () => {
    return (
        //todo va air dentro de una seccion
        <section id="projects" className="py-24 px-4 relative">
            {/*y dentro de este div va a ir dentro con un container*/}
            <div className="container mx-auto max-w-5xl">
                {/*el titulo*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Mis <span className="text-primary">Proyectos</span>
                </h2>
                {/*un pequeño texto*/}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui algunos de los proyectos que he hecho durante las carrera como en mi servicio.
                    Cada proyecto fue cuidadosamente elaborado con atención al detalle, al rendimiento y a la experiencia del usuario.
                </p>

                {/*inicio de las columnas*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*indica cuantas variables va agarrar //cada boton recibe un key para que react lo identifique*/}
                    {projects.map((project, key) =>

                        //este div indica que va agarrar las imagenes el contenido dentro de las columnas
                        <div
                            key={key}
                            className="group bg-card rounde-lg overflow-hidden shadow-xs card-hover">

                            {/*este div aparte de tomar las imagenes le da un estilo  al div y a las imagenes*/}
                            <div className="h-48 overflow-hidden">
                                {/*img agarra las imagenes de las variables declaradas y el titulo*/}
                                <img src={project.image} alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/*este div controla el espacio grisacio*/}
                            <div className="p-6">
                                {/*este div crea y tomas los tags*/}
                                <div className="flex flex-wrap gap-2 mb-4">{/*este controla la posicion de las tags*/}
                                    {project.tags.map((tags) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{/*y este le da estilos*/}
                                            {tags}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>{/*le da estilo al titulo*/}
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>{/*le da estilo a la descripcion*/}


                                <div className="flex justify-between items-center">{/*este div es como su contenedor del contenido que esta dentro */}
                                    <div className="flex space-x-3">{/*este div controla los iconos le da su espacio su apartado su posicion*/}
                                        <a href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>{/*cierre del contenido*/}
                                </div>{/*cierre del contendor de los iconos*/}
                            </div>{/*el cierre del espacio grisacio*/}
                        </div> //cierre del cotenido de las tablas
                    )}
                </div>{/*hasta aqui se cierra el div de las grid (cuadrados (tablas))*/}

                <div className="text-center mt-12">{/*este div es para crear el boton*/}
                    <a href="https://github.com/jos001dc"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                    >
                        Check My Github < ArrowRight size={16} />
                    </a>
                </div>{/*cierre del contenido del boton*/}

            </div>

        </section>
    );
};