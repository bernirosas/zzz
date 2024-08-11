admin = User.create(email: "hackers@uc.cl", password: "hackers", nombre: "Super admin!", telefono: "32784532", descripcion: "Super Admin")
admin.tipo_de_usuario = "A"
admin.save!

# Crea un libro con los siguientes atributos y dejalos en blanco: titulo, categoria, autor, descripcion, precio, picture, stock, fecha
libro1 = Libro.create(titulo: "Percy Jackson",
  categoria: "Accion y Aventura",
  autor: "Rick Riordan",
  descripcion: "Cuenta las aventuras de un chico actual de doce años,
  Percy Jackson,
  cuando descubre que es un semidiós; hijo de una mortal y del dios griego,
  Poseidón. Percy y sus amigos realizan una búsqueda para prevenir una guerra apocalíptica entre los dioses griegos Zeus y Poseidón.",
  precio: "25.000",
  stock: "20",
  fecha: 2005) 
libro1.picture = File.open('app/assets/images/percy.jpg')
libro1.save!

libro2 = Libro.create(titulo: "Jane Eyre",
  categoria: "Clasicos Universales",
  autor: "Charlotte Bronte",
  descripcion: "El personaje de Jane Eyre, la institutriz más famosa de la literatura, 
                ha sido llevado a la pantalla –tanto de cine como de televisión– en más de veinte ocasiones, 
                pero eso no le ha restado ni un ápice de interés a la novela de Charlotte Brontë, publicada por primera vez en 1847. 
                De hecho, tanto Jane Eyre como Cumbres borrascosas (1847), de Emily Brontë, son dos de los títulos de referencia, 
                no solo de la literatura inglesa del siglo XIX, sino de la literatura universal de todos los tiempos. 
                La película de Fukunaga es el tercer largometraje del director, tras la experimental Chinatown Film Project (2009) 
                y la premiada Sin nombre (2009), una cinta sobre las maras con la que Jane Eyre guarda más similitudes de las que se 
                podría esperar en un principio.",
  precio: "20.400",
  stock: "12",
  fecha: 1847)
libro2.picture = File.open('app/assets/images/jane_eyre.jpg')
libro2.save!

libro3 = Libro.create(titulo: "Harry Potter y la cámara secreta",
  categoria: "Accion y Aventura",
  autor: "J.K. Rowling",
  descripcion: "Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry
  Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables
  tíos el inicio del segundo curso del Colegio Hogwarts de Magia y hechicería. Sin
  embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte
  que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo
  piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts
  en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los
  malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara
  de los Secretos, dejando escapar una serie de monstruos peligrosos, harry y sus
  amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes
  encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación
  de su más temible adversario.",
  precio: "12.000",
  stock: "34",
  fecha: 1998)
libro3.picture = File.open('app/assets/images/harry_potter.jpg')
libro3.save!

libro4 = Libro.create(titulo: "El gran Gatsby",
  categoria: "Clasicos Universales",
  autor: "F. Scott Fitzgerald",
  descripcion: "
  El gran Gatsby - Fitzgerald, F. Scott - 978-84-339-7574-4 ...
  Jay Gatsby es un héroe trágico que se va destruyendo conforme se acerca a su sueño: 
  la reconquista de una mujer a la que dejó para irse a la guerra en Europa. 
  Quiere cumplir su deseo más inaccesible: recuperar el pasado, el momento en que conquistó a Daisy Buchanan.",
  precio: "17.000",
  stock: "32",
  fecha: 1925)
libro4.picture = File.open('app/assets/images/gran_gatsby.jpg')
libro4.save!

libro5 = Libro.create(titulo: "Historia universal (Timelines of World History): Un recorrido visual a través de los años",
  categoria: "Academico",
  autor: "DK",
  descripcion: "An illustrated record covering all the major events and achievements in human history. 
               Designed for history aficionados, trivia buffs, or anyone with a curious mind, Timelines of World History takes an innovative approach to the traditional, 
               text-driven style of a date-by-date chronology. Tracing the progress of humanity from the dawn of history to the present day, the book 
               follows major historical events, cultural milestones, the expansions of empires, and the inventions and achievements of civilizations. 
               Important events are cross-referenced with specific dates, important historical figures are profiled, and introductory essays profile what was happening and why. 
               With more than 500 photographs and illustrations and over 25 maps, this is the most authoritative visual chronological record of the last 20,000 years.",
  precio: "30.000",
  stock: "10",
  fecha: 2022)
libro5.picture = File.open('app/assets/images/historia_universal.jpg')
libro5.save!

libro6 = Libro.create(titulo: "10 negritos",
  categoria: "Suspenso",
  autor: "Agatha Christie",
  descripcion: "Colección: Espasa NarrativaDiez personas sin relación alguna entre sí son 
  reunidas en un misterioso islote de la costa inglesa por un tal Sr. Owen, 
  propietario de una... Leer másEncuadernación: RústicaColección: Espasa NarrativaDiez personas 
  sin relación alguna entre sí son reunidas en un misterioso islote de la costa inglesa por un tal Sr. Owen, 
  propietario de una lujosa mansión a la par que perfecto desconocido para todos sus invitados. 
  Tras la primera cena, y sin haber conocido aún a su anfitrión, los diez comensales son acusados 
  mediante una grabación de haber cometido un crimen en el pasado.Uno por uno, a partir de ese momento, 
  son asesinados sin explicación ni motivo aparente. Sólo una vieja canción infantil parece encerrar el 
  misterio de una creciente pesadilla",
  precio: "10.000",
  stock: "5",
  fecha: 1939)
libro6.picture = File.open('app/assets/images/Diez-negritos1.jpg')
libro6.save!

libro7 = Libro.create(titulo: "After",
  categoria: "Romance",
  autor: "Anna Todd",
  descripcion: "Tessa Young (Josephine Langford) es una dedicada estudiante, 
  una hija responsable y una novia fiel. La joven tiene grandes aspiraciones de cara a su futuro en su primer año 
  de universidad. Su mundo cambiará cuando, en su viaje de autodescubrimiento y de despertar sexual, 
  conozca al oscuro, rebelde y misterioso Hardin Scott (Hero Fiennes Tiffin).",
  precio: "10.000",
  stock: "45",
  fecha: 2013)
libro7.picture = File.open('app/assets/images/after.jpg')
libro7.save!

libro8 = Libro.create(titulo: "Las Ventajas de ser Invisible",
  categoria: "Romance",
  autor: "Stephen Chbosky",
  descripcion: "Charlie es un joven socialmente torpe y siempre está viendo la vida desde la barrera, hasta que dos estudiantes carismáticos se convierten en sus mentores. Sam y su hermanastro Patrick ayudan a Charlie a descubrir las alegrías de la amistad, el primer amor, la música y mucho más, mientras que un maestro provoca que él sueñe con ser un escritor. Sin embargo, mientras sus nuevos amigos se preparan para ir a la universidad, su tristeza interior amenaza con destruir su confianza.",
  precio: "13.000",
  stock: "21",
  fecha: 2013)
libro8.picture = File.open('app/assets/images/ventajas_invisible.jpg')
libro8.save!


libro9 = Libro.create(titulo: "Autoridad",
  categoria: "Suspenso",
  autor: "Jeff Vandermeer",
  descripcion: "Durante treinta años, el único contacto humano con el Área X, una zona donde una naturalezamalvada ha acabado aparentemente con toda forma de vida humana, han sido las expediciones enviadas por la agencia estatal Southern Reach. Después del fracaso de la expedición número 12, narrada en la primera parte de la trilogía, Aniquilación, la agencia se encuentra sumida en el caos.John Rodriguez ha sido nombrado nuevo director de la agencia. Con ... Ver más Ocultar Durante treinta años, el único contacto humano con el Área X, una zona donde una naturalezamalvada ha acabado aparentemente con toda forma de vida humana, han sido las expediciones enviadas por la agencia estatal Southern Reach. Después del fracaso de la expedición número 12, narrada en la primera parte de la trilogía, Aniquilación, la agencia se encuentra sumida en el caos.John Rodriguez ha sido nombrado nuevo director de la agencia. Con la única ayuda de un equipo en el que no puede confiar, Rodriguez debe desentrañar qué sucedió en la última expedición. Pero a medida que resuelve los enigmas que rodean el Área X, Rodriguez se ve enfrentado también a su propia verdad y a la de la agencia que dirige. Y las consecuencias de todo ello pueden ir mucho más lejos de lo que imagina. Durante treinta años, el único contacto humano con el Área X, una zona donde una naturalezamalvada ha acabado aparentemente con toda forma de vida humana, han sido las expediciones enviadas por la agencia estatal Southern Reach. Después del fracaso de la expedición número 12, narrada en la primera parte de la trilogía, Aniquilación, la agencia se encuentra sumida en el caos.John Rodriguez ha sido nombrado nuevo director de la agencia. Con la única ayuda de un equipo en el que no puede confiar, Rodriguez debe desentrañar qué sucedió en la última expedición. Pero a medida que resuelve los enigmas que rodean el Área X, Rodriguez se ve enfrentado también a su propia verdad y a la de la agencia que dirige. Y las consecuencias de todo ello pueden ir mucho más lejos de lo que imagina.",
  precio: "13.000",
  stock: "10",
  fecha: 2014)
libro9.picture = File.open('app/assets/images/autoridad.jpg')
libro9.save!


libro10 = Libro.create(titulo: "Espartaco",
  categoria: "Accion y Aventura",
  autor: "Howard Fast",
  descripcion: "Esta es la historia de Espartaco, que encabezó la gran rebelión de los esclavos contra la República Romana en los años finales de esta. Originario de Tracia, alrededor del 113 A.C. nacería en las cercanías de la localidad de Sandanski (Bulgaria). Según las crónicas, un hombre culto; sin extrañarse de este elemento en su persona, ya que logró poner a Roma en serios aprietos. Dado su físico, fue comprado por un mercader, el cual lo vendería a una escuela de gladiadores situada en Capua, que pertenecía a Lèntulo Baciato. Tras estudiar la manera de escaparse de la escuela, y acompañado de Enomao y Crixto junto con 74 hombres más, iniciaron La gran Rebelión, la cual desataría el inicio de crueles batallas.",
  precio: "12.000",
  stock: "6",
  fecha: 1951)
libro10.picture = File.open('app/assets/images/espartaco.jpg')
libro10.save!


libro11 = Libro.create(titulo: "Cálculo de Una Variable: Trascendentes Tempranas",
  categoria: "Academico",
  autor: "James Stewart",
  descripcion: "El autor continúa aplicando los mejores elementos de la reforma de las matemáticas (la regla de tres), al combinar los aspectos teóricos tradicionales del cálculo con la enseñanza creativa y las técnicas de aprendizaje. Al considerar que varias disciplinas requieren por lo menos tres semestres de cálculo, este texto contiene los temas necesarios para que los estudiantes entiendan las ideas fundamentales, sustentándolas en aplicaciones del mundo real y construyan habilidades de razonamiento matemático.",
  precio: "40.000",
  stock: "10",
  fecha: 2008)
libro11.picture = File.open('app/assets/images/stewart.jpg')
libro11.save!

libro12 = Libro.create(titulo: "Don Quijote de la Mancha",
  categoria: "Clasicos Universales",
  autor: "Miguel De Cervantes Saavedra",
  descripcion: "El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha. Sus intenciones son ayudar a los pobres y desfavorecidos, y lograr el amor de la supuesta Dulcinea del Toboso, que es en realidad es una campesina llamada Aldonza Lorenzo. Decide nombrar a Sancho Panza, un empleado suyo, su escudero. Juntos viven muchas aventuras y tras ser vencido por el Caballero de la Blanca Luna se retira a su hogar, donde, tras adquirir de nuevo la cordura, fallece.
  La presente edición intenta no ser una más de las múltiples ediciones existentes. Se ha respetado el texto de la edición príncipe con el mayor escrúpulo posible, acompañada de notas explicativas. Está ilustrada con magníficos grabados españoles que acompañaron a la primera edición de la Academia. Una edición en suma, tal como se dice en la introducción, realizada a la medida de todos los lectores y capaz de sugerir más de una interpretación.",
  precio: "23.000",
  stock: "45",
  fecha: 1605)
libro12.picture = File.open('app/assets/images/don_quijote.jpg')
libro12.save!



libro13 = Libro.create(
  titulo: "Romeo y Julita",
  categoria: "Clasicos Universales",
  autor: "William Shakespeare",
  descripcion: "La historia de Romeo y Julieta tiene antecedentes en la mitología y literatura griegas y en algunas leyendas medievales. Durante los siglos XV y XVI fue objeto de múltiples versiones, pero fue Shakespeare quien le infundió una pasión y un dramatismo inéditos hasta entonces y que han contribuido a mantener la leyenda en la memoria colectiva. En Verona, dos jóvenes enamorados, de dos familias enemigas, son víctimas de una situación de odio y violencia que ni desean ni pueden remediar. En una de esas tardes de verano en que el calor «inflama la sangre», Romeo, recién casado en secreto con su amada Julieta, mata al primo de ésta. A partir de ahí Shakespeare desencadena la tragedia y precipita los acontecimientos, guiados por el azar y la fatalidad. Ángel-Luis Pujante destaca en esta edición la fuerza poética y retórica de ROMEO Y JULIETA: los juegos de palabras, la coexistencia de prosa y verso, de lo culto y lo coloquial, de lo lírico y lo dramático contribuyen a intensificar los contrastes de la acción. Clara Calvo ofrece en la Guía de lectura una rica documentación complementaria y unas sugerentes propuestas que ayudan a enriquecer la lectura de esta obra capital de la literatura universal.",
  precio: "20.000",
  stock: "32",
  fecha: 2018
)
libro13.picture = File.open('app/assets/images/romeo_y_julieta.jpg')
libro13.save!


libro14 = Libro.create(
  titulo: "Crimen y Castigo",
  categoria: "Clasicos Universales",
  autor: "Fiódor Dostoyevski",
  descripcion: "Crimen y castigo (1866), considerada por la crítica como la primera obra maestra de Dostoievski, es un profundo análisis psicológico de su protagonista, el joven estudiante Raskolnikov, cuya firme creencia en que los fines humanitarios justifican la maldad le conduce al asesinato de un usurero petersburgués. Pero, desde que comete el crimen, la culpabilidad será una pesadilla constante con la que el estudiante será incapaz de convivir. El estilo enfebrecido y compasivo de Dostoievski sigue con maestría única los recovecos de las contradictorias emociones del estudiante y refleja la lucha extrema que libra con su conciencia mientras deambula por las calles de San Petersburgo. Ya en prisión, Raskolnikov se da cuenta de que la felicidad no puede ser alcanzada siguiendo un plan establecido a priori por la razón: ha de ganarse con sufrimiento.",
  precio: "23.000",
  stock: "40",
  fecha: 2019
)
libro14.picture = File.open('app/assets/images/crimen_y_castigo.jpg')
libro14.save!


libro15 = Libro.create(
  titulo: "Robinson Crusoe",
  categoria: "Accion y Aventura",
  autor: "Daniel Defoe",
  descripcion: "Para escribir este relato de un náufrago que sobrevive en una isla desierta, el periodista Defoe se inspiró en historias de náufragos reales, especialmente en la del capitán español Pedro Serrano y la del marinero escocés Alexander Selkirk, a quien Defoe llegó a entrevistar, y de hecho la primera edición de la novela apareció como si se tratara de las memorias anónimas de un marinero.

  La novela narra las aventuras de Robinson Crusoe, un caballero inglés de York que, perdido en una isla desierta, pone todo su empeño en la supervivencia, enfrentándose a las adversidades y ejerciendo su dominio sobre la naturaleza hostil para construir desde cero su civilización, pleno de energía y optimismo.
  Por ello la obra pronto se convirtió en un emblema de la época: escrita tras el fin de la «crisis de la conciencia europea» que preparó la Ilustración, Robinson Crusoe narra el nacimiento del nuevo hombre que forja de la edad contemporánea que empezaba a alborear. No sólo por el espíritu del colonialismo o por la inquietud viajera y explotadora, sino también por su dramatización de la separación radical del ser humano con Dios y el universo, el triunfo del racionalismo y la ruptura del vínculo con lo trascendente. Para el nuevo Robinson, no existe mesura ni límite posible a la capacidad del hombre para dominar su entorno, para conquistar y transformar el mundo.",
  precio: "13.000",
  stock: "43",
  fecha: 2018
)
libro15.picture = File.open('app/assets/images/robinson_crusoe.jpg')
libro15.save!



libro16 = Libro.create(
  titulo: "Las aventuras de Huckleberry Finn",
  categoria: "Accion y Aventura",
  autor: "Mark Twain",
  descripcion: "Con Las aventuras de Huckleberry Finn, Mark Twain (1835-1910) alcanzó su mayor logro literario. En ella, Huck Finn, el mejor amigo de Tom Sawyer, huye de su malvado padre y recorre el río Misisipi junto a un esclavo prófugo, Jim, quien también huye por el temor de ser vendido. Los dos jóvenes navegarán río abajo en busca de la libertad y en su viaje se darán de bruces con numerosas y arriesgadas aventuras.",
  precio: "23.000",
  stock: "32",
  fecha: 2019
)
libro16.picture = File.open('app/assets/images/huckleberry_finn.jpg')
libro16.save!

libro17 = Libro.create(
  titulo: "Principios de Economia",
  categoria: "Academico",
  autor: "N. Gregory Mankiw.",
  descripcion: "¿Por qué debería usted estudiar economía?. La razón es sencilla: porque lo ayudará a comprender el mundo en el que vive; la economía lo transformará en un participante más experto. A medida que avanza en su vida, tomará diversas decisiones que se relacionan con la materia, también le aportará una mayor comprensión tanto potencial como de los límites de la política económica. Parte I: Introducción 1. Los diez principios de economía 2. Pensar como economista 3. Interdependencia y ganancias del comercio Parte II: Cómo funcionan los mercados 4. Las fuerzas del mercado de la oferta y la demanda 5. Elasticidad y sus aplicaciones 6. Oferta, demanda y políticas gubernamentales Parte III: Cómo funcionan los mercados 7. Consumidores, productores y eficiencia de los mercados 8. Aplicación: los costos de los impuestos 9. Aplicación Comercio Internacional Parte IV: Economía del sector público 10. Externalidades 11. Bienes públicos y recursos comunes 12. Diseño de I Sistema impositivo Parte V: Conducta de la empresa y organización industrial 13. Los costos de producción 14. Las empresas en mercados competitivos 15. Monopolio 16. Competencia Monopolística 17. Oligopolio Parte VI: Economía de los mercados de trabajo 18. Mercados de factores de la producción 19. Ingresos y discriminación 20. Desigualdad en el ingreso y pobreza Parte VII: Temas para estudio posterior 21. Teoría de la elección del consumidor 22. Las fronteras de la microeconomía Parte VIII: Los datos de la macroeconomía 23. Medición del ingreso de una nación 24. Medición del costo de vida Parte IX: Economía real en el largo plazo 25. Producción y crecimiento 26. Ahorro, inversión y sistema financiero 27. Herramientas básicas de las finanzas 28. Desempleo Parte X: Dinero y precios en el largo plazo 29. El sistema monetario 30. Crecimiento del dinero e inflación Parte XI: Macroeconomía de las economías abiertas. 31. Macroeconomía de una economía abierta: conceptos básicos 32. Una teoría macroeconomía de la economía abierta Parte XII: Fluctuaciones económicas a corto plazo 33. Demanda agregada y oferta agregada 34. Como influyen las políticas monetaria y fiscal de la demanda agregada 35. Disyuntiva a corto entre inflación y desempleo Parte XIII: Pensamientos finales 36. Seis debates sobre política macroeconómica",
  precio: "30.000",
  stock: "9",
  fecha: 2017
)
libro17.picture = File.open('app/assets/images/manliw.jpg')
libro17.save!


libro18 = Libro.create(
  titulo: "Philosophiæ naturalis principia mathematica",
  categoria: "Academico",
  autor: "Isaac Newton",
  descripcion: "Philosophiae Naturalis Principia Mathematica, Latin for Mathematical Principles of Natural Philosophy, often referred to as simply the Principia, is a work in three books by Sir Isaac Newton, in Latin, first published 5 July 1687. The Principia states Newton's laws of motion, forming the foundation of classical mechanics, also Newton's law of universal gravitation, and a derivation of Kepler's laws of planetary motion (which Kepler first obtained empirically). The Principia is justly regarded as one of the most important works in the history of science.",
  precio: "20.000",
  stock: "5",
  fecha: 2018
)
libro18.picture = File.open('app/assets/images/principia.jpg')
libro18.save!


libro19 = Libro.create(
  titulo: "Breve Historia del Tiempo",
  categoria: "Academico",
  autor: "Stephen Hawking",
  descripcion: "Traducido a más de treinta idiomas y con más de cinco millones de ejemplares vendidos, Breve historia del tiempo se ha convertido en una obra clásica e imprescindible de nuestros tiempos y su autor, Stephen Hawking, es conocido como el físico teórico más brillante después de Einstein. Este libro es un manual preciso para la comprensión de la obra de un hombre admirable. Las entrevistas, sinceras y personales, que contiene este volumen nos revelan a la persona detrás de su torre teórica y científica. Su madre y su hermana relatan cómo fue su juventud y cómo llegó a ser quien es. Sus condiscípulos de la escuela de Física de Oxford y de Cambridge lo recuerdan como un joven con evidente talento y muy poca tolerancia por los estudios convencionales. Sus colegas científicos describen las ideas que dieron forma a su trabajo teórico y la majestuosidad de los conceptos que desarrolló. Finalmente, aparecen las opiniones del propio autor, que expresa sus audaces ideas en un lenguaje asequible.",
  precio: "14.000",
  stock: "34",
  fecha: 2015
)
libro19.picture = File.open('app/assets/images/breve.jpg')
libro19.save!


libro20 = Libro.create(
  titulo: "El psicoanalista",
  categoria: "Suspenso",
  autor: "John Katzenbach",
  descripcion: "«Feliz aniversario, doctor. Bienvenido al primer día de su muerte.» Así comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible.

  De no conseguir su objetivo, deberá elegir entre suicidarse o ser testigo de cómo, uno tras otro, sus familiares y conocidos mueren por obra de un psicópata decidido a llevar hasta el final su sed de venganza.
  
  Dando un inesperado giro a la relación entre médico y paciente, John Katzenbach nos ofrece una novela emblemática del mejor suspense psicológico. Con casi 200.000 ejemplares vendidos en Espanña, El psicoanalista es la novela que lanzó a la fama a John Katzenbach.
  
  Título: El Psicoanalista
  Autor (es): John Katzenbach
  Sello: Ediciones B
  Fecha publicación: 05/2019
  Idioma: Español
  Formato, páginas: Rústica, 464
  Medidas: 16 X 23 cm
  ISBN: 9789569977886",
  precio: "14.000",
  stock: "32",
  fecha: 2019
)
libro20.picture = File.open('app/assets/images/psico.jpg')
libro20.save!

libro21 = Libro.create(
  titulo: "La Chica del Tren",
  categoria: "Suspenso",
  autor: "Paula Hawkins",
  descripcion: "¿Estabas en el tren de las 8.04? ¿Viste algo sospechoso? Rachel, sí. Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece? Tú no la conoces. Ella a ti, sí.«Un impresionante debut en el mundo del thriller.» The Guardian«Agárrate fuerte... Nunca sabes los horrores que acechan en la siguiente curva» USA Today. «Nada como un posible asesinato para romper la monotonía de tu viaje diario en metro». Cosmopolitan.",
  precio: "15.000",
  stock: "13",
  fecha: 2015
)
libro21.picture = File.open('app/assets/images/ten.jpg')
libro21.save!


libro22 = Libro.create(
  titulo: "Silence of the Lambs, the (libro en Inglés)",
  categoria: "Suspenso",
  autor: "Thomas Harris ",
  descripcion: "An ingenious, masterfully written novel, Thomas Harris's The Silence of the Lambs is a classic of suspense and storytelling and the basis for the Oscar award-winning horror film starring Jodie Foster as Clarice Starling and Anthony Hopkins as Dr. Hannibal Lecter.A serial murderer known only by a grotesquely apt nickname--Buffalo Bill--is stalking particular women. He has a purpose, but no one can fathom it, for the bodies are discovered in different states. Clarice Starling, a young trainee at the F.B.I. Academy, is surprised to be summoned by Jack Crawford, Chief of the Bureau's Behavioral Science section. Her assignment: to interview Dr. Hannibal Lecter, a brilliant psychiatrist and grisly killer now kept under close watch in the Baltimore State Hospital for the Criminally Insane. Lecter's insight into the minds of murderers could help track and capture Buffalo Bill. Smart and attractive, Starling is shaken to find herself in a strange, intense relationship with the acutely perceptive Lecter. His cryptic clues--about Buffalo Bill and about her--launch Clarice on a search that every reader will find startling, harrowing, and totally compelling.",
  precio: "17.000",
  stock: "5",
  fecha: 1991
)
libro22.picture = File.open('app/assets/images/silencio.jpg')
libro22.save!


libro23 = Libro.create(
  titulo: "Eleanor & Park",
  categoria: "Romance",
  autor: "Rainbow Rowell",
  descripcion: "Eleanor acaba de llegar a la ciudad y nunca se ha sentido más sola, hasta que un día conoce a Park, un chico silencioso para quien pasar bajo el radar es la mejor forma de salir adelante.   Novela seleccionada por los editores de Amazon.com como uno de los 100 Young Adult Books to Read in a Lifetime.     CONTRATAPA   Novela seleccionada por los editores de Amazon.com como uno de los 100 Young Adult Books to Read in a Lifetime.   Seleccionada en el top 10 de los mejores libros de ficción para jóvenes (YA) en 2014, según la Young Adult Library Services Association (YALSA) de Estados Unidos.   Novela de literatura juvenil ganadora del GoodReads Choice Awards 2013, único gran premio literario concedido por los lectores.   Establecida en el transcurso de un año escolar en 1986, Eleanor y Park es divertida, triste, impactante y verdadera; un exquisito viaje a la nostalgia para cualquiera que jamás haya olvidado a su primer amor.   Eleanor usa ropa que no combina, tiene un alocado cabello rojo, una caótica vida familiar y una vida solitaria. Entonces se sienta en el autobús al lado de Park, un chico silencioso, cuidadoso, y, a los ojos de Eleanor, absolutamente genial.     Lentamente, de manera constante, a través de conversaciones nocturnas y una pila de cassettes mezclados cada vez más grande, Eleanor y Park se enamoran. Se enamoran de la forma en que te enamoras la primera vez, cuando tienes 16, con nada y todo que perder...",
  precio: "10.000",
  stock: "21",
  fecha: 2014
)
libro23.picture = File.open('app/assets/images/eleanor.jpg')
libro23.save!

libro24 = Libro.create(
  titulo: "Un Cuento Perfecto",
  categoria: "Romance",
  autor: "Elísabet Benavent ",
  descripcion: "Margot es la pequeña de tres hermanas nacidas y educadas en el seno de una familia adinerada y algo rancia. Siempre luchó por ser la princesa de su propio cuento: tiene una carrera de éxito, un sueldazo, un piso en la Castellana y un novio absolutamente perfecto. Pero... el día de su boda sufre un ataque de histeria que provoca que se tenga que suspender la cerebración. Margot, destrozada, decide ahogar las penas en una noche loca de alcohol y bailes. Sin embargo... la noche se complica y el día siguiente despierta en su cama con una resaca brutal y junto a un jovencito completamente desnudo. David es un alma libre que va a dedicar todos sus ahorros en dar la vuelta al mundo. Sobre el amor... tiene la misma visión: quiere volar. Es un Casanova moderno que deja a sus amantes con una sonrisa. Un domingo, después de una noche loca, despierta en una gigantesca cama, en un piso enorme, junto a una chica preciosa. Se las ingenia para volver a verla y Margot, aunque está obsesionada con recuperar a su novio y su vida perfecta, decide tener una fugaz aventura con ese joven tan guapo. Nadie lo sabrá, ambos ganan: será divertido, sin compromiso, pasarán un buen rato y en septiembre se dirán adiós sin más. Un viaje a Grecia, una conexión que no esperaban y la intimidad entre dos personas que pertenecen a dos mundos completamente diferentes, sin nada en común, complicará los objetivos de ambos.",
  precio: "13.000",
  stock: "23",
  fecha: 2020
)
libro24.picture = File.open('app/assets/images/cuento_perfecto.jpg')
libro24.save!


libro25 = Libro.create(
  titulo: "BAJO LA MISMA ESTRELLA",
  categoria: "Romance",
  autor: "John Green",
  descripcion: "Emotiva, irónica y afilada. Una novela teñida de humor y de tragedia que habla de nuestra capacidad para soñar incluso en las circunstancias más difíciles. A Hazel y a Gus les gustaría tener vidas más comunes.
  Algunos dirían que no han nacido con estrella, que su mundo es injusto. Hazel y Gus son solo adolescentes, pero si algo les ha enseñado el cáncer que ambos padecen es que no hay tiempo para lamentarse, porque, nos guste o no, solo existe el hoy y el ahora. Y por ello, con la intención de hacer realidad el mayor deseo de Hazel ‘conocer a su escritor favorito’, cruzarán juntos el Atlántico para vivir una aventura a contrarreloj, tan catártica como desgarradora.
  Destino: Amsterdam, el lugar donde reside el enigmático y malhumorado escritor, la única persona que tal vez pueda ayudarlos a ordenar las piezas del enorme rompecabezas del que forman parte…
  Rebosante de agudeza y esperanza, Bajo la misma estrella es la novela que ha catapultado a John Green al éxito. Una historia que explora cuán exquisita, inesperada y trágica puede ser la aventura de saberse vivo y querer a alguien.",
  precio: "8.000",
  stock: "3",
  fecha: 2012
)
libro25.picture = File.open('app/assets/images/bajo_la_misma_estrella.jpg')
libro25.save!


libro26 = Libro.create(
  titulo: "Cumbres Borrascosas",
  categoria: "Clasicos Universales",
  autor: "Emily Bronte",
  descripcion: "La poderosa y hosca figura de Heathcliff domina Cumbres Borrascosas, novela apasionada y tempestuosa cuya sensibilidad se adelantó a su tiempo. Los brumosos y sombríos páramos de Yorkshire son el singular escenario donde se desarrolla con fuerza arrebatadora esta historia de venganza y odio, de pasiones desatadas y amores desesperados que van más allá de la muerte y que hacen de ella una de las obras más singulares y atractivas de todos los tiempos.
  ",
  precio: "15.000",
  stock: "21",
  fecha: 2012
)
libro26.picture = File.open('app/assets/images/cumbres_borroscosas.jpg')
libro26.save!

libro27 = Libro.create(
  titulo: "Mecanica y Resistencia de Materiales",
  categoria: "Academico",
  autor: "Miguel Cervera Ruiz",
  descripcion: "Esta obra recoge la experiencia docente de los autores en la Escuela Técnica Superior
  de Ingenieros de Caminos, Canales y Puertos de Barcelona.
  El planteamiento de este libro se corresponde con el de las asignaturas de Resistencia
  de Materiales que se incluyen en diversas titulaciones de Ingenieria y Arquitectura. Esta
  es una versión revisada de las sucesivas ediciones de 1992, 1995, 1999, 2001 y 2012.
  La obra se estructura en dos partes diferenciadas. Una primera, formada por los
  Capitulos 1 al 4, en la que se introducen los conceptos fundamentales comunes a la
  Teoria de la Elasticidad y la Resistencia de Materiales, y una segunda, formada por los
  Capitulos 5 al 9, en la que se estudian los efectos mecanicos de los diferentes esfuerzos
  que actuan sobre una seccion. La comprension de los diferentes temas se ve favorecida
  por la inclusion de numerosos ejercicios y ejemplos resueltos.",
  precio: "60.000",
  stock: "5",
  fecha: 2015
)
libro27.picture = File.open('app/assets/images/mecanicamateriales.png')
libro27.save!

libro28 = Libro.create(
  titulo: "La Reina Charlotte",
  categoria: "Romance",
  autor: "Julia Quinn",
  descripcion: "En 1761, en un soleado día de septiembre, un rey y una reina se conocieron por primera vez. Se casaron en cuestión de horas. La princesa alemana Carlota de Mecklemburgo-Strelitz era guapa y terca, y poseía una inteligencia feroz; unos atributos que no eran precisamente los que la corte británica buscaba para la esposa del rey Jorge III. Sin embargo, su ferocidad y su independencia eran justo lo que necesitaba, porque Jorge tenía secretos…, unos secretos capaces de sacudir los cimientos de la monarquía. Sumergida de lleno en su nuevo papel como miembro de la familia real, Carlota debe aprender a moverse en la compleja política de la corte, al tiempo que protege su corazón, porque se está enamorando del rey, aunque él la aparta de su lado. Pero, sobre todo, debe aprender a regir y a comprender que le han otorgado el poder de rehacer la sociedad. Debe luchar: por ella, por su marido y por sus nuevos súbditos, que recurren a ella en busca de guía y de protección. Porque nunca volverá a ser Solo Carlota. Y debe cumplir con su destino… como reina.",
  precio: "20.000",
  stock: "19",
  fecha: 2023
)
libro28.picture = File.open('app/assets/images/charlotte.jpg')
libro28.save!

libro29 = Libro.create(
  titulo: "El Juego Infinito",
  categoria: "Accion y Aventura",
  autor: "James Dashner",
  descripcion: "Michael es un hacker de Red Virtual, el adictivo juego de realidad  virtual que arrasa entre los adolescentes. Allí tiene amigos de verdad:  Sarah y Bryson, y gracias a su capacidad para manipular la tecnología y  saltarse las normas pueden exprimir al máximo la plataforma y vivir experiencias al límite.
  Sin embargo, la diversión acabará cuando el gobierno de alcance a Michael...
  Su objetivo: que les ayude a detener a un jugador sin identificar que está sembrando el pánico en Red Virtual.",
  precio: "17.000",
  stock: "4",
  fecha: 2012
)
libro29.picture = File.open('app/assets/images/juegoInfinito.jpg')
libro29.save!

libro30 = Libro.create(
  titulo: "El Resplandor",
  categoria: "Suspenso",
  autor: "Stephen King",
  descripcion: "¿Qué ha sido de Danny Torrance? Descúbrelo al final de este volumen, que incluye el inicio de Doctor Sueño, la continuación de El resplandor. REDRUM. Esa es la palabra que Danny había visto en el espejo. Y, aunque no sabía leer, entendió que era un mensaje de horror. Tenía cinco años, y a esa edad pocos niños son conscientes de que los espejos invierten las imágenes, y menos aún diferenc ian entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían c umpliéndose: REDRUM... MURDER, asesinato. Su madre estaba pensando en el divorcio, y su padre, obsesionado con algo muy malo, tan malo como la muerte y el suicidio, necesitaba aceptar la propuesta de cuidar de aquel hotel de lujo, de más de cien habitaciones a islado por la nieve, durante seis meses. Hasta el deshielo iban a estar solos. ¿Solos?...",
  precio: "20.000",
  stock: "23",
  fecha: 1977
)
libro30.picture = File.open('app/assets/images/resplandor.jpg')
libro30.save!
