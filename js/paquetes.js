/**
 * paquetes.js — Base de datos de paquetes de viaje
 * IDs: p1-p5  → carrusel principal
 *      p6-p10 → sección "Escápate con Jovi"
 *
 * Para agregar un paquete: agrega un objeto al arreglo con el siguiente id disponible
 * y apunta el botón en index.html a detalle.html?id=pN
 */

var PAQUETES_DEFAULT = [

    /* ── CARRUSEL PRINCIPAL ─────────────────────────────────── */
    {
        id: "p1",
        imagen: "img/carousel-2.jpg",
        nombre: "Descubre el Caribe con Viajes Jovi",
        destino: "Cancún, México",
        fechaInicio: "2025-07-10",
        fechaFin: "2025-07-13",
        formaPrecio: "Por persona",
        precio: "$9,999 MXN",
        duracion: "3 días · 2 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20conocer%20mas%20del%20viaje%20Descubre%20el%20Caribe%20con%20Viajes%20Jovi",
        itinerario: [
            { dia: 1, titulo: "Llegada a Cancún", descripcion: "Recepción en el aeropuerto internacional de Cancún. Traslado al hotel. Check-in y tarde libre para disfrutar de la playa. Bienvenida con cena incluida." },
            { dia: 2, titulo: "Excursión Isla Mujeres", descripcion: "Desayuno en el hotel. Tour en catamarán a Isla Mujeres, snorkel en arrecife de coral, almuerzo a bordo. Por la tarde, regreso al hotel." },
            { dia: 3, titulo: "Día libre y regreso", descripcion: "Desayuno en el hotel. Día libre para actividades opcionales o compras. Traslado al aeropuerto para vuelo de regreso." }
        ],
        inclusiones: [
            "Vuelo redondo desde ciudad de origen",
            "2 noches de hospedaje en hotel 4 estrellas con desayuno",
            "Traslados aeropuerto – hotel – aeropuerto",
            "Tour en catamarán a Isla Mujeres con snorkel",
            "Almuerzo a bordo del catamarán",
            "Cena de bienvenida",
            "Seguro de viaje básico",
            "Asistencia de guía en español"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Cancún (CUN)",
                fecha: "10 Jul 2025",
                horaSalida: "06:30",
                horaLlegada: "08:15",
                aerolinea: "Aeroméxico",
                vuelo: "AM 652",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Cancún (CUN)",
                destino: "Ciudad de México (MEX)",
                fecha: "13 Jul 2025",
                horaSalida: "18:00",
                horaLlegada: "19:50",
                aerolinea: "Aeroméxico",
                vuelo: "AM 653",
                clase: "Económica"
            }
        ],
        leyendas: [
            "Los precios están sujetos a disponibilidad al momento de la reserva y pueden cambiar sin previo aviso.",
            "El paquete no incluye propinas, gastos personales, actividades opcionales ni alimentación fuera del régimen indicado.",
            "Se requiere pasaporte o identificación oficial vigente.",
            "La cancelación con menos de 72 horas de anticipación no genera reembolso.",
            "Viajes Jovi actúa como intermediario y no se responsabiliza por cambios de itinerario por causas ajenas (clima, aerolíneas, etc.).",
            "Precios calculados por persona en ocupación doble. Consulte suplemento por ocupación sencilla."
        ]
    },

    {
        id: "p2",
        imagen: "img/carousel-1.jpg",
        nombre: "Tours internacionales a tu medida",
        destino: "Europa / Asia / América del Sur",
        fechaInicio: "2025-08-01",
        fechaFin: "2025-08-08",
        formaPrecio: "Por persona",
        precio: "$18,499 MXN",
        duracion: "7 días · 6 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20conocer%20mas%20del%20viaje%20Tours%20internacionales%20a%20tu%20medida",
        itinerario: [
            { dia: 1, titulo: "Llegada y bienvenida", descripcion: "Recepción en aeropuerto internacional. Traslado al hotel, check-in y cena de bienvenida con el grupo." },
            { dia: 2, titulo: "City Tour", descripcion: "Desayuno en el hotel. Recorrido panorámico por los principales atractivos de la ciudad con guía bilingüe." },
            { dia: 3, titulo: "Excursión al campo", descripcion: "Salida temprana hacia zonas rurales y naturales características de la región. Almuerzo típico incluido." },
            { dia: 4, titulo: "Día libre de compras", descripcion: "Jornada libre para explorar mercados locales, gastronomía y tiendas. Sugerencias de restaurantes proporcionadas por el guía." },
            { dia: 5, titulo: "Visita cultural", descripcion: "Tour a museos, sitios históricos y patrimonio de la humanidad de la zona. Entrada a museos incluida." },
            { dia: 6, titulo: "Excursión y cena de despedida", descripcion: "Actividad optativa según destino. Cena de despedida incluida." },
            { dia: 7, titulo: "Regreso a México", descripcion: "Desayuno. Traslado al aeropuerto para vuelo de regreso." }
        ],
        inclusiones: [
            "Vuelo redondo internacional",
            "6 noches de hospedaje en hoteles 4 estrellas con desayuno",
            "Traslados terrestres durante todo el recorrido",
            "City tour con guía bilingüe",
            "Entradas a museos y sitios incluidos en el itinerario",
            "1 almuerzo y 1 cena de despedida",
            "Seguro de viaje internacional",
            "Asesoría para trámites de visa (según destino)"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Destino Internacional",
                fecha: "01 Ago 2025",
                horaSalida: "23:55",
                horaLlegada: "Por confirmar",
                aerolinea: "Por confirmar",
                vuelo: "Por confirmar",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Destino Internacional",
                destino: "Ciudad de México (MEX)",
                fecha: "08 Ago 2025",
                horaSalida: "Por confirmar",
                horaLlegada: "Por confirmar",
                aerolinea: "Por confirmar",
                vuelo: "Por confirmar",
                clase: "Económica"
            }
        ],
        leyendas: [
            "El destino específico se asigna según disponibilidad y preferencia del viajero al momento de la reserva.",
            "Los precios están sujetos a disponibilidad y tipo de cambio vigente.",
            "Se requiere pasaporte con vigencia mínima de 6 meses a partir de la fecha de regreso.",
            "Visa y requisitos de entrada son responsabilidad del viajero; Viajes Jovi brinda asesoría.",
            "Cambios de itinerario por causas de fuerza mayor no generan reembolso.",
            "Precios en ocupación doble. Consulte suplemento sencillo y descuentos para menores."
        ]
    },

    {
        id: "p3",
        imagen: "img/carousel-3.jpg",
        nombre: "Tu próxima gran escapada con Jovi",
        destino: "Destino sorpresa en México",
        fechaInicio: "2025-09-05",
        fechaFin: "2025-09-09",
        formaPrecio: "Por persona",
        precio: "$12,499 MXN",
        duracion: "4 días · 3 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20conocer%20mas%20del%20viaje%20Tu%20pr%C3%B3xima%20gran%20escapada%20con%20Jovi",
        itinerario: [
            { dia: 1, titulo: "Llegada", descripcion: "Bienvenida en el destino. Traslado y check-in. Tarde libre para conocer los alrededores. Cena incluida." },
            { dia: 2, titulo: "Aventura y naturaleza", descripcion: "Excursión a zonas naturales únicas del destino. Actividades al aire libre: senderismo, zip-line o kayak (según disponibilidad). Almuerzo en el camino." },
            { dia: 3, titulo: "Cultura y gastronomía", descripcion: "Visita a mercados artesanales, restaurantes típicos y sitios históricos locales. Tarde libre." },
            { dia: 4, titulo: "Regreso", descripcion: "Desayuno. Check-out y traslado de regreso." }
        ],
        inclusiones: [
            "Transporte redondo (camión de lujo o vuelo según distancia)",
            "3 noches de hospedaje en hotel boutique o eco-hotel",
            "Desayunos incluidos",
            "1 cena de bienvenida y 1 almuerzo",
            "Tour de aventura con equipo incluido",
            "Guía local especializado",
            "Seguro de viaje básico"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Destino en México",
                fecha: "05 Sep 2025",
                horaSalida: "07:00",
                horaLlegada: "Por confirmar",
                aerolinea: "Volaris / VivaAerobús",
                vuelo: "Por confirmar",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Destino en México",
                destino: "Ciudad de México (MEX)",
                fecha: "09 Sep 2025",
                horaSalida: "Por confirmar",
                horaLlegada: "Por confirmar",
                aerolinea: "Volaris / VivaAerobús",
                vuelo: "Por confirmar",
                clase: "Económica"
            }
        ],
        leyendas: [
            "El destino exacto se revela al confirmar la reserva — ¡es parte de la experiencia!",
            "Los precios están sujetos a disponibilidad.",
            "Se requiere identificación oficial vigente (INE o pasaporte).",
            "La cancelación con menos de 5 días hábiles no genera reembolso.",
            "Las actividades de aventura requieren condición física básica; informar restricciones médicas al reservar.",
            "Precios en ocupación doble. Consulte opciones sencillas y grupales."
        ]
    },

    {
        id: "p4",
        imagen: "img/packages-3.jpg",
        nombre: "Europa clásica a tu alcance",
        destino: "París · Roma · Barcelona",
        fechaInicio: "2025-10-15",
        fechaFin: "2025-10-25",
        formaPrecio: "Por persona",
        precio: "$35,999 MXN",
        duracion: "10 días · 8 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20conocer%20mas%20del%20viaje%20Europa%20cl%C3%A1sica%20a%20tu%20alcance",
        itinerario: [
            { dia: 1, titulo: "Salida a París", descripcion: "Vuelo nocturno desde México. Llegada al día siguiente." },
            { dia: 2, titulo: "París — Llegada", descripcion: "Llegada al aeropuerto Charles de Gaulle. Traslado al hotel. Tarde libre. Cena de bienvenida." },
            { dia: 3, titulo: "París — City Tour", descripcion: "Recorrido por Torre Eiffel, Arco del Triunfo, Campos Elíseos y Montmartre. Crucero por el Sena incluido." },
            { dia: 4, titulo: "París — Versalles", descripcion: "Visita al Palacio de Versalles y sus jardines. Tarde libre en el centro de París." },
            { dia: 5, titulo: "Viaje en tren a Barcelona", descripcion: "Traslado en tren de alta velocidad. Llegada y check-in en Barcelona. Paseo por Las Ramblas." },
            { dia: 6, titulo: "Barcelona — Gaudí", descripcion: "Visita a la Sagrada Familia, Park Güell y Casa Batlló. Almuerzo típico catalán incluido." },
            { dia: 7, titulo: "Vuelo a Roma", descripcion: "Vuelo Barcelona – Roma. Llegada y traslado al hotel. Tarde en el Trastévere." },
            { dia: 8, titulo: "Roma — Clásica", descripcion: "Tour por el Coliseo, Foro Romano, Fontana di Trevi y Plaza Navona. Entradas incluidas." },
            { dia: 9, titulo: "Roma — Vaticano", descripcion: "Visita a los Museos Vaticanos, Capilla Sixtina y Basílica de San Pedro. Tarde libre." },
            { dia: 10, titulo: "Regreso a México", descripcion: "Desayuno. Traslado al aeropuerto de Roma para vuelo de regreso." }
        ],
        inclusiones: [
            "Vuelo redondo México – Europa – México",
            "Vuelo interno Barcelona – Roma",
            "Tren de alta velocidad París – Barcelona",
            "8 noches en hoteles 4 estrellas céntricos con desayuno",
            "Todos los traslados terrestres",
            "City tours con guía hispanohablante en cada ciudad",
            "Entradas: Torre Eiffel, Versalles, Sagrada Familia, Coliseo, Vaticano",
            "Crucero por el Sena (París)",
            "Seguro de viaje internacional amplio",
            "Asistencia visa Schengen"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "París, Francia (CDG)",
                fecha: "15 Oct 2025",
                horaSalida: "22:10",
                horaLlegada: "16 Oct · 14:30",
                aerolinea: "Air France",
                vuelo: "AF 439",
                clase: "Económica"
            },
            {
                tipo: "Interno",
                origen: "Barcelona (BCN)",
                destino: "Roma (FCO)",
                fecha: "21 Oct 2025",
                horaSalida: "09:15",
                horaLlegada: "11:00",
                aerolinea: "Vueling",
                vuelo: "VY 6110",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Roma (FCO)",
                destino: "Ciudad de México (MEX)",
                fecha: "25 Oct 2025",
                horaSalida: "11:30",
                horaLlegada: "20:45",
                aerolinea: "Air France vía CDG",
                vuelo: "AF 322",
                clase: "Económica"
            }
        ],
        leyendas: [
            "El precio incluye impuestos de aeropuerto al momento de la cotización; sujeto a cambios por tipo de cambio.",
            "Se requiere pasaporte con vigencia mínima de 6 meses. Visa Schengen obligatoria para ciudadanos mexicanos.",
            "Viajes Jovi brinda asesoría completa para trámite de visa Schengen; el costo consular no está incluido.",
            "Itinerario de vuelos sujeto a confirmación por parte de las aerolíneas.",
            "No se incluyen propinas, gastos personales ni actividades opcionales.",
            "Precio en ocupación doble. Suplemento sencillo disponible bajo consulta."
        ]
    },

    {
        id: "p5",
        imagen: "img/packages-4.jpg",
        nombre: "Escapadas de fin de semana",
        destino: "Puebla, Tepoztlán o Valle de Bravo",
        fechaInicio: "2025-07-19",
        fechaFin: "2025-07-21",
        formaPrecio: "Por persona",
        precio: "$5,499 MXN",
        duracion: "2 días · 1 noche",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20conocer%20mas%20del%20viaje%20Escapadas%20de%20fin%20de%20semana",
        itinerario: [
            { dia: 1, titulo: "Salida y llegada", descripcion: "Salida en autobús de lujo desde el punto de reunión. Llegada al destino, check-in en hotel. Tour rápido de orientación. Cena y noche libre." },
            { dia: 2, titulo: "Exploración y regreso", descripcion: "Desayuno en el hotel. Recorrido guiado por los principales atractivos del destino. Almuerzo típico incluido. Tarde libre. Regreso a la ciudad de origen en la tarde-noche." }
        ],
        inclusiones: [
            "Transporte redondo en autobús de lujo",
            "1 noche de hospedaje en hotel 3-4 estrellas",
            "Desayuno incluido",
            "Cena de bienvenida",
            "1 almuerzo típico",
            "Tour guiado con guía local",
            "Seguro de viaje básico"
        ],
        itinerarioVuelo: [
            {
                tipo: "Traslado Terrestre",
                origen: "Ciudad de México (Punto de reunión)",
                destino: "Destino del fin de semana",
                fecha: "19 Jul 2025",
                horaSalida: "07:00",
                horaLlegada: "Aprox. 10:00",
                aerolinea: "Autobús de lujo",
                vuelo: "N/A",
                clase: "N/A"
            },
            {
                tipo: "Regreso Terrestre",
                origen: "Destino del fin de semana",
                destino: "Ciudad de México",
                fecha: "21 Jul 2025",
                horaSalida: "17:00",
                horaLlegada: "Aprox. 20:00",
                aerolinea: "Autobús de lujo",
                vuelo: "N/A",
                clase: "N/A"
            }
        ],
        leyendas: [
            "El destino específico (Puebla, Tepoztlán o Valle de Bravo) se confirma al reservar según disponibilidad.",
            "Los precios están sujetos a disponibilidad y temporada.",
            "Se requiere identificación oficial vigente (INE o pasaporte).",
            "Cancelaciones con menos de 48 horas no generan reembolso.",
            "El punto de reunión exacto se comunica al confirmar la reserva.",
            "Precio en ocupación doble. Consulte disponibilidad para grupos y parejas."
        ]
    },

    /* ── ESCÁPATE CON JOVI ──────────────────────────────────── */
    {
        id: "p6",
        imagen: "img/packages-1.jpg",
        nombre: "Cancún en familia",
        destino: "Cancún, Quintana Roo",
        fechaInicio: "2025-07-18",
        fechaFin: "2025-07-22",
        formaPrecio: "Por persona",
        precio: "$12,499 MXN",
        duracion: "4 días · 3 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20la%20escapada%20Canc%C3%BAn%20en%20familia",
        itinerario: [
            { dia: 1, titulo: "Llegada y playa", descripcion: "Traslado del aeropuerto al hotel. Check-in y primer contacto con el Caribe. Tarde libre en la playa. Cena de bienvenida incluida." },
            { dia: 2, titulo: "Zona Hotelera y snorkel", descripcion: "Desayuno en el hotel. Recorrido por la Zona Hotelera. Tarde de snorkel en arrecife de coral con equipo incluido." },
            { dia: 3, titulo: "Chichén Itzá", descripcion: "Excursión de día completo a Chichén Itzá. Almuerzo buffet incluido. Parada en cenote para refrescarse." },
            { dia: 4, titulo: "Día libre y regreso", descripcion: "Desayuno. Mañana libre para compras. Traslado al aeropuerto para vuelo de regreso." }
        ],
        inclusiones: [
            "Vuelo redondo desde Ciudad de México",
            "3 noches en hotel 4 estrellas frente al mar con desayuno",
            "Traslados aeropuerto – hotel – aeropuerto",
            "Excursión a Chichén Itzá con almuerzo",
            "Actividad de snorkel con equipo",
            "Cena de bienvenida",
            "Seguro de viaje básico",
            "Guía en español"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Cancún (CUN)",
                fecha: "18 Jul 2025",
                horaSalida: "07:10",
                horaLlegada: "09:00",
                aerolinea: "Volaris",
                vuelo: "Y4 203",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Cancún (CUN)",
                destino: "Ciudad de México (MEX)",
                fecha: "22 Jul 2025",
                horaSalida: "19:30",
                horaLlegada: "21:15",
                aerolinea: "Volaris",
                vuelo: "Y4 204",
                clase: "Económica"
            }
        ],
        leyendas: [
            "Precios sujetos a disponibilidad al momento de la reserva.",
            "Menores de 2 años gratis (sin derecho a asiento ni cama). Menores de 12 años con descuento especial, consulte.",
            "Se requiere identificación oficial vigente.",
            "Cancelaciones con menos de 72 horas no generan reembolso.",
            "Actividades acuáticas sujetas a condiciones climáticas.",
            "Precios en ocupación doble. Suplemento por ocupación sencilla disponible."
        ]
    },

    {
        id: "p7",
        imagen: "img/packages-2.jpg",
        nombre: "Riviera Maya Todo Incluido",
        destino: "Riviera Maya, Quintana Roo",
        fechaInicio: "2025-08-07",
        fechaFin: "2025-08-12",
        formaPrecio: "Por persona",
        precio: "$15,900 MXN",
        duracion: "5 días · 4 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20la%20escapada%20Riviera%20Maya%20Todo%20Incluido",
        itinerario: [
            { dia: 1, titulo: "Llegada y bienvenida", descripcion: "Recepción en el aeropuerto de Cancún. Traslado al resort. Check-in y cóctel de bienvenida. Cena buffet en el resort." },
            { dia: 2, titulo: "Resort y playa", descripcion: "Día libre para disfrutar las instalaciones Todo Incluido: albercas, deportes acuáticos, entretenimiento nocturno." },
            { dia: 3, titulo: "Tulum y cenotes", descripcion: "Excursión a las ruinas mayas de Tulum con vista al mar Caribe. Visita a cenote natural. Almuerzo en restaurante local incluido." },
            { dia: 4, titulo: "Xcaret o día libre", descripcion: "Opción de excursión al parque Xcaret (costo adicional) o día libre en el resort. Show nocturno de entretenimiento." },
            { dia: 5, titulo: "Check-out y regreso", descripcion: "Desayuno. Check-out. Traslado al aeropuerto." }
        ],
        inclusiones: [
            "Vuelo redondo desde Ciudad de México",
            "4 noches en resort 5 estrellas Todo Incluido",
            "Todas las comidas, bebidas y snacks ilimitados",
            "Deportes acuáticos no motorizados",
            "Shows y entretenimiento nocturno",
            "Excursión a Tulum y cenote con almuerzo",
            "Traslados aeropuerto – resort – aeropuerto",
            "Seguro de viaje básico"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Cancún (CUN)",
                fecha: "07 Ago 2025",
                horaSalida: "06:45",
                horaLlegada: "08:30",
                aerolinea: "VivaAerobús",
                vuelo: "VB 118",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Cancún (CUN)",
                destino: "Ciudad de México (MEX)",
                fecha: "12 Ago 2025",
                horaSalida: "20:00",
                horaLlegada: "21:45",
                aerolinea: "VivaAerobús",
                vuelo: "VB 119",
                clase: "Económica"
            }
        ],
        leyendas: [
            "El régimen Todo Incluido aplica únicamente dentro de las instalaciones del resort.",
            "Bebidas alcohólicas premium pueden tener costo adicional según política del hotel.",
            "Excursión a Xcaret no incluida en el paquete base; precio especial al reservar.",
            "Precios sujetos a disponibilidad y temporada.",
            "Se requiere identificación oficial vigente.",
            "Precios en ocupación doble. Descuentos para menores disponibles bajo consulta."
        ]
    },

    {
        id: "p8",
        imagen: "img/gallery-6.jpg",
        nombre: "Orlando & Parques",
        destino: "Orlando, Florida, EE.UU.",
        fechaInicio: "2025-12-18",
        fechaFin: "2025-12-24",
        formaPrecio: "Por persona",
        precio: "$32,700 MXN",
        duracion: "6 días · 5 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20la%20escapada%20Orlando%20%26%20Parques",
        itinerario: [
            { dia: 1, titulo: "Llegada a Orlando", descripcion: "Vuelo desde México a Orlando. Traslado al hotel. Check-in y tarde libre o visita a Disney Springs." },
            { dia: 2, titulo: "Magic Kingdom", descripcion: "Día completo en Magic Kingdom. Atracciones clásicas, desfile de personajes y fuegos artificiales nocturnos. Entrada incluida." },
            { dia: 3, titulo: "Universal Studios Florida", descripcion: "Día completo en Universal Studios: El Mundo Mágico de Harry Potter, Jurassic World y más. Entrada a ambos parques incluida." },
            { dia: 4, titulo: "EPCOT o Hollywood Studios", descripcion: "Elección de parque Disney según preferencia del grupo. Entrada incluida." },
            { dia: 5, titulo: "Compras y tiempo libre", descripcion: "Mañana libre para compras en Premium Outlets. Tarde opcional en SeaWorld (costo adicional). Cena de despedida incluida." },
            { dia: 6, titulo: "Regreso a México", descripcion: "Desayuno. Check-out. Traslado al aeropuerto." }
        ],
        inclusiones: [
            "Vuelo redondo México – Orlando – México",
            "5 noches en hotel 3-4 estrellas en la zona de parques",
            "Desayuno diario",
            "Entrada a Magic Kingdom (1 día)",
            "Entrada a Universal Studios + Islands of Adventure (1 día)",
            "Entrada a EPCOT o Hollywood Studios (1 día)",
            "Traslados aeropuerto – hotel – aeropuerto",
            "Transporte interno entre hotel y parques",
            "Cena de despedida",
            "Seguro de viaje internacional"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Orlando (MCO)",
                fecha: "18 Dic 2025",
                horaSalida: "08:20",
                horaLlegada: "13:45",
                aerolinea: "Aeroméxico",
                vuelo: "AM 190",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Orlando (MCO)",
                destino: "Ciudad de México (MEX)",
                fecha: "24 Dic 2025",
                horaSalida: "15:10",
                horaLlegada: "18:30",
                aerolinea: "Aeroméxico",
                vuelo: "AM 191",
                clase: "Económica"
            }
        ],
        leyendas: [
            "Se requiere pasaporte vigente y visa americana (B1/B2). Viajes Jovi asesora el trámite; el costo consular no está incluido.",
            "Las entradas a parques son para un día específico y no son intercambiables.",
            "Temporada navideña: los parques pueden tener mayor afluencia. Se recomienda llegar temprano.",
            "Actividades opcionales (SeaWorld, dinner shows) tienen costo adicional.",
            "Precios sujetos a tipo de cambio y disponibilidad. Precio en ocupación doble familiar."
        ]
    },

    {
        id: "p9",
        imagen: "img/gallery-10.jpg",
        nombre: "Los Cabos Relax",
        destino: "Los Cabos, Baja California Sur",
        fechaInicio: "2025-09-12",
        fechaFin: "2025-09-15",
        formaPrecio: "Por persona",
        precio: "$8,990 MXN",
        duracion: "3 días · 2 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20la%20escapada%20Los%20Cabos%20Relax",
        itinerario: [
            { dia: 1, titulo: "Llegada y descanso", descripcion: "Vuelo a Los Cabos. Traslado al hotel frente al mar. Check-in. Tarde libre en la playa. Cena incluida en el hotel." },
            { dia: 2, titulo: "El Arco y tour en lancha", descripcion: "Desayuno. Tour en lancha para ver El Arco de Cabo San Lucas, Playa del Amor y zona de lobos marinos. Tarde libre para spa o actividades opcionales." },
            { dia: 3, titulo: "San José del Cabo y regreso", descripcion: "Desayuno. Visita al centro artístico de San José del Cabo: galerías, mercado artesanal y malecón. Traslado al aeropuerto." }
        ],
        inclusiones: [
            "Vuelo redondo desde Ciudad de México",
            "2 noches en hotel boutique frente al mar con desayuno",
            "Traslados aeropuerto – hotel – aeropuerto",
            "Tour en lancha a El Arco y Playa del Amor",
            "Cena de bienvenida",
            "Seguro de viaje básico"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Los Cabos (SJD)",
                fecha: "12 Sep 2025",
                horaSalida: "09:00",
                horaLlegada: "10:40",
                aerolinea: "Aeroméxico",
                vuelo: "AM 336",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Los Cabos (SJD)",
                destino: "Ciudad de México (MEX)",
                fecha: "15 Sep 2025",
                horaSalida: "17:30",
                horaLlegada: "21:10",
                aerolinea: "Aeroméxico",
                vuelo: "AM 337",
                clase: "Económica"
            }
        ],
        leyendas: [
            "El tour en lancha está sujeto a condiciones climáticas y del mar.",
            "Temporada de septiembre puede presentar clima variable; se recomienda seguro amplio.",
            "Precios sujetos a disponibilidad.",
            "Se requiere identificación oficial vigente.",
            "Cancelaciones con menos de 72 horas no generan reembolso.",
            "Precio en ocupación doble. Consulte descuento para viaje sencillo."
        ]
    },

    {
        id: "p10",
        imagen: "img/gallery-5.jpg",
        nombre: "Huatulco tradicional",
        destino: "Huatulco, Oaxaca",
        fechaInicio: "2025-10-03",
        fechaFin: "2025-10-07",
        formaPrecio: "Por persona",
        precio: "$10,500 MXN",
        duracion: "4 días · 3 noches",
        whatsapp: "https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20la%20escapada%20Huatulco%20tradicional",
        itinerario: [
            { dia: 1, titulo: "Llegada a Huatulco", descripcion: "Llegada al aeropuerto de Huatulco. Traslado al hotel. Check-in y tarde libre para descubrir la bahía más cercana. Cena incluida." },
            { dia: 2, titulo: "Tour de las bahías", descripcion: "Desayuno. Recorrido en lancha por las 9 bahías de Huatulco. Snorkel y parada para nadar en aguas cristalinas. Almuerzo a bordo." },
            { dia: 3, titulo: "Pueblo mágico y gastronomía oaxaqueña", descripcion: "Excursión terrestre a comunidad local. Elaboración artesanal de mezcal y gastronomía oaxaqueña. Comida tradicional incluida." },
            { dia: 4, titulo: "Mañana libre y regreso", descripcion: "Desayuno. Mañana libre para compras de artesanías. Traslado al aeropuerto." }
        ],
        inclusiones: [
            "Vuelo redondo desde Ciudad de México",
            "3 noches en hotel 4 estrellas frente a la bahía con desayuno",
            "Traslados aeropuerto – hotel – aeropuerto",
            "Tour de bahías en lancha con snorkel y almuerzo",
            "Excursión gastronómica con comida tradicional",
            "Cena de bienvenida",
            "Seguro de viaje básico"
        ],
        itinerarioVuelo: [
            {
                tipo: "Salida",
                origen: "Ciudad de México (MEX)",
                destino: "Huatulco (HUX)",
                fecha: "03 Oct 2025",
                horaSalida: "08:15",
                horaLlegada: "09:45",
                aerolinea: "Aeroméxico",
                vuelo: "AM 562",
                clase: "Económica"
            },
            {
                tipo: "Regreso",
                origen: "Huatulco (HUX)",
                destino: "Ciudad de México (MEX)",
                fecha: "07 Oct 2025",
                horaSalida: "16:00",
                horaLlegada: "17:30",
                aerolinea: "Aeroméxico",
                vuelo: "AM 563",
                clase: "Económica"
            }
        ],
        leyendas: [
            "Huatulco es zona ecológica protegida; se promueve el turismo responsable y sostenible.",
            "El tour de bahías está sujeto a condiciones del mar y clima.",
            "Precios sujetos a disponibilidad.",
            "Se requiere identificación oficial vigente.",
            "Cancelaciones con menos de 72 horas no generan reembolso.",
            "Precio en ocupación doble. Opción familiar disponible bajo consulta."
        ]
    }

];

// ── Migrar paquetes sin segmentosPrecio al nuevo modelo ──────────────────────
(function () {
    PAQUETES_DEFAULT.forEach(function (p) {
        if (!p.segmentosPrecio) {
            p.tipoPrecio = 'por-persona';
            p.segmentosPrecio = [{ nombre: p.formaPrecio || 'Por persona', precio: p.precio || '' }];
        }
        if (!p.leyendas) p.leyendas = [];
        if (p.mostrarVuelo === undefined) p.mostrarVuelo = true;
    });
})();

// ── Admin override: si hay datos guardados desde el panel, usarlos ──────────
// Versión de esquema: incrementar cuando se corrija un bug que corrompa datos guardados
var JOVI_DATA_VERSION = 2;
(function () {
    var versionKey = 'jovi-data-version';
    var savedVersion = parseInt(localStorage.getItem(versionKey) || '0', 10);

    // Si la versión guardada es anterior, limpiar datos corruptos
    if (savedVersion < JOVI_DATA_VERSION) {
        localStorage.removeItem('jovi-paquetes-admin');
        localStorage.removeItem('jovi-explore-admin');
        localStorage.removeItem('jovi-paquetes-asombrosos-admin');
        localStorage.setItem(versionKey, String(JOVI_DATA_VERSION));
        console.info('[Viajes Jovi] Datos de admin limpiados por actualización de versión (' + savedVersion + ' → ' + JOVI_DATA_VERSION + ')');
    }

    var stored = localStorage.getItem('jovi-paquetes-admin');
    if (stored) {
        try {
            var parsed = JSON.parse(stored);
            // Validación básica: debe ser array con al menos 10 paquetes con ids correctos
            if (Array.isArray(parsed) && parsed.length >= 10 && parsed[0] && parsed[0].id === 'p1') {
                window.PAQUETES = parsed;
                return;
            }
        } catch (e) { /* datos corruptos, usar defaults */ }
        // Si llegamos aquí, los datos son inválidos — limpiar
        localStorage.removeItem('jovi-paquetes-admin');
    }
    window.PAQUETES = PAQUETES_DEFAULT;
})();

// ── EXPLORE TOUR ──────────────────────────────────────────────────────────────
var EXPLORE_DEFAULT = {
    nacionales: [
        { id: "en1", imagen: "img/explore-tour-1.jpg", titulo: "Weekend Tour",    link: "#", oferta: "",        ofertaColor: "" },
        { id: "en2", imagen: "img/explore-tour-2.jpg", titulo: "Holiday Tour",    link: "#", oferta: "",        ofertaColor: "" },
        { id: "en3", imagen: "img/explore-tour-3.jpg", titulo: "Road Trip",       link: "#", oferta: "15% Off", ofertaColor: "bg-info" },
        { id: "en4", imagen: "img/explore-tour-4.jpg", titulo: "Historical Trip", link: "#", oferta: "",        ofertaColor: "" },
        { id: "en5", imagen: "img/explore-tour-5.jpg", titulo: "Family Tour",     link: "#", oferta: "50% Off", ofertaColor: "bg-warning" },
        { id: "en6", imagen: "img/explore-tour-6.jpg", titulo: "Beach Tour",      link: "#", oferta: "",        ofertaColor: "" }
    ],
    internacionales: [
        { id: "ei1", imagen: "img/explore-tour-1.jpg", titulo: "Australia", ciudades: "8 Cities",  lugares: "143+ Tour Places", link: "#", oferta: "30% Off", ofertaColor: "bg-success" },
        { id: "ei2", imagen: "img/explore-tour-2.jpg", titulo: "Germany",   ciudades: "12 Cities", lugares: "21+ Tour Places",  link: "#", oferta: "",        ofertaColor: "" },
        { id: "ei3", imagen: "img/explore-tour-3.jpg", titulo: "Spain",     ciudades: "9 Cities",  lugares: "133+ Tour Places", link: "#", oferta: "45% Off", ofertaColor: "bg-warning" },
        { id: "ei4", imagen: "img/explore-tour-4.jpg", titulo: "Japan",     ciudades: "8 Cities",  lugares: "137+ Tour Places", link: "#", oferta: "",        ofertaColor: "" },
        { id: "ei5", imagen: "img/explore-tour-5.jpg", titulo: "London",    ciudades: "17 Cities", lugares: "26+ Tour Places",  link: "#", oferta: "70% Off", ofertaColor: "bg-info" }
    ]
};

(function () {
    var stored = localStorage.getItem('jovi-explore-admin');
    if (stored) {
        try {
            var parsed = JSON.parse(stored);
            if (parsed && Array.isArray(parsed.nacionales) && Array.isArray(parsed.internacionales)) {
                window.EXPLORE_DATA = parsed;
                return;
            }
        } catch (e) {}
        localStorage.removeItem('jovi-explore-admin');
    }
    window.EXPLORE_DATA = EXPLORE_DEFAULT;
})();

// ── PAQUETES ASOMBROSOS ───────────────────────────────────────────────────────
var PAQUETES_ASOMBROSOS_DEFAULT = [
    {
        id: "pa1",
        imagen: "img/packages-4.jpg",
        titulo: "Venecia - Italia",
        subtitulo: "Ofertas de Hotel",
        destino: "Venecia - Italia",
        dias: "3 días",
        personas: "2 Personas",
        precio: "$349.00",
        descripcion: "Descubre la magia de Venecia con un paquete que combina historia, arte y romance en cada rincón.",
        linkLeerMas: "#",
        linkReservar: "#"
    },
    {
        id: "pa2",
        imagen: "img/packages-2.jpg",
        titulo: "Nueva California",
        subtitulo: "Paquete Completo",
        destino: "California - EE.UU.",
        dias: "5 días",
        personas: "2 Personas",
        precio: "$449.00",
        descripcion: "Vive la experiencia californiana con un recorrido por playas, parques y la vibrante vida nocturna.",
        linkLeerMas: "#",
        linkReservar: "#"
    },
    {
        id: "pa3",
        imagen: "img/packages-3.jpg",
        titulo: "Descubre Japón",
        subtitulo: "Todo Incluido",
        destino: "Japón",
        dias: "7 días",
        personas: "2 Personas",
        precio: "$549.00",
        descripcion: "Sumérgete en la cultura japonesa con un viaje inolvidable a templos, jardines y ciudades vibrantes.",
        linkLeerMas: "#",
        linkReservar: "#"
    },
    {
        id: "pa4",
        imagen: "img/packages-1.jpg",
        titulo: "Viaje a Tailandia",
        subtitulo: "Paquete de Aventura",
        destino: "Tailandia",
        dias: "4 días",
        personas: "2 Personas",
        precio: "$649.00",
        descripcion: "Explora playas tropicales, templos impresionantes y mercados coloridos en el paraíso tailandés.",
        linkLeerMas: "#",
        linkReservar: "#"
    }
];

(function () {
    var stored = localStorage.getItem('jovi-paquetes-asombrosos-admin');
    if (stored) {
        try {
            var parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length >= 1 && parsed[0] && parsed[0].id) {
                window.PAQUETES_ASOMBROSOS = parsed;
                return;
            }
        } catch (e) {}
        localStorage.removeItem('jovi-paquetes-asombrosos-admin');
    }
    window.PAQUETES_ASOMBROSOS = PAQUETES_ASOMBROSOS_DEFAULT;
})();


// ── RESEÑAS DE VIAJEROS ───────────────────────────────────────────────────────
var RESENAS_DEFAULT = [
    { id:"r1", imagen:"img/gallery-1.jpg", autor:"María González", destino:"Cancún, México", estrellas:5, texto:"Las playas de Cancún superaron todas mis expectativas. El hotel fue increíble y la excursión a Isla Mujeres fue lo mejor del viaje.", fecha:"Jul 2025" },
    { id:"r2", imagen:"img/gallery-4.jpg", autor:"Roberto Hernández", destino:"Europa Clásica", estrellas:5, texto:"El tour por Europa fue perfecto. París, Barcelona y Roma en un solo viaje. La organización de Jovi fue impecable de principio a fin.", fecha:"Oct 2025" },
    { id:"r3", imagen:"img/gallery-6.jpg", autor:"Familia Ramírez", destino:"Orlando, Florida", estrellas:4, texto:"Mis hijos no paraban de sonreír en Disney. El paquete familiar incluyó todo y no tuvimos que preocuparnos por nada. ¡Volveremos!", fecha:"Dic 2025" },
    { id:"r4", imagen:"img/gallery-10.jpg", autor:"Andrea López", destino:"Los Cabos, BCS", estrellas:5, texto:"Los Cabos fue el escape perfecto. El tour en lancha al Arco fue espectacular. El hotel boutique tenía una vista increíble al mar.", fecha:"Sep 2025" },
    { id:"r5", imagen:"img/gallery-5.jpg", autor:"Carlos Mendoza", destino:"Huatulco, Oaxaca", estrellas:5, texto:"Huatulco es un paraíso escondido. Las bahías son cristalinas y la gastronomía oaxaqueña fue una experiencia única. 100% recomendado.", fecha:"Oct 2025" },
    { id:"r6", imagen:"img/gallery-2.jpg", autor:"Pareja Torres-Vega", destino:"Riviera Maya", estrellas:5, texto:"El resort Todo Incluido en Riviera Maya fue un sueño. Tulum y los cenotes fueron mágicos. La mejor luna de miel que pudimos pedir.", fecha:"Ago 2025" }
];

(function () {
    var stored = localStorage.getItem('jovi-resenas-admin');
    if (stored) {
        try {
            var parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length >= 1) {
                window.RESENAS = parsed;
                return;
            }
        } catch (e) {}
        localStorage.removeItem('jovi-resenas-admin');
    }
    window.RESENAS = RESENAS_DEFAULT;
})();
