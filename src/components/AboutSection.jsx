import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> {/* utilisamos secciones y lo acomodamos con padding*/}
            {" "}
            <div className="container mx-auto max-w-5xl"> {/* y todo lo ponenmos dentro de un container y lo acomodamos con margenes y un tamaño width*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary ">Mi</span>
                </h2>
                {/* aqui lo dividimos en en dos columnas usandon grid aqui le damos el espacio
                  de van a tener las dos columnas y todo va ir centrado
                  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6"> {/*esta es la primero columna aqui va a ir dentro toda la 
                    información con marganes-top de 24px entre cada informacion dentro de este div*/}
                        <h3 className="text-2xl font-semibold">
                            passionate web developer
                        </h3>

                        <p className="text-muted-foreground">
                            With over 1 years of experience in web development, I specialize
                            in creating responsive, accessible, and performant web
                            applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>
                        {/*este div se encuentra los dos botones con su estilo cada uno*/}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contac" className="cosmic-button">
                                {" "}
                                Get In Touchc
                            </a>

                            <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300">
                                Dowload CV
                            </a>
                        </div>
                    </div>{/*aqui se cierra la termina la primera columna */}

                    {/*y empieza la segunda con un nuevo div propio*/}
                    <div className="grid grid-cols-1 gap-6"> {/* este div principal indica como va ser formada la informacion*/}
                        <div className="gradient-border p-6 card-hover">{/*este div es el fondo de la informacion */}
                            <div className="flex items-start gap-4"> {/*este div nos permite que el icono y el texto esten en una misma fila osea (uno alado del otro)*/}
                                <div className="p-3 rounded-full bg-primary/10">{/*es el fondo del icono es el ( circulo )*/}
                                    <Code className="h-6 w-6 text-primary" />{/*config del icono*/}
                                </div>{/*aqui se cierra el div icono y su fondo*/}
                                <div className="text-left">{/*este div es el principal del texto indica como va esta alineado el texto*/}
                                    <h4 className="font-semibold text-lg"> Web developer</h4>{/*config del h4*/}
                                    <p className="text-muted-foreground">{/*config del p*/}
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Desing</h4>
                                    <p className="text-muted-foreground">
                                        Desingning intuitive iser interfaces and seamless user experiences
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">proyect Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}