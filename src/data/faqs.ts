export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "¿Qué es un sistema agrovoltaico?",
    a: "Es una instalación que coloca paneles solares elevados (normalmente entre 4 y 6 metros) sobre terreno de cultivo. Los paneles generan electricidad y, a la vez, protegen los cultivos del granizo y del sol más duro, mientras la maquinaria sigue trabajando con normalidad debajo.",
  },
  {
    q: "¿Los paneles impiden trabajar la tierra con tractor?",
    a: "No. El sistema de poste central deja paso libre a tractores, cosechadoras y aperos. La altura de diseño se calcula para que la maquinaria de cada explotación pase sin restricciones entre las hileras.",
  },
  {
    q: "¿Cuánta agua de riego se ahorra?",
    a: "La sombra parcial reduce la evapotranspiración del cultivo. En la mayoría de instalaciones se documentan ahorros de entre el 20% y el 40% del agua de riego, según cultivo, clima y estrategia de sombra.",
  },
  {
    q: "¿Se puede regular la sombra sobre el cultivo?",
    a: "Sí. Los paneles inclinables permiten ajustar el ángulo a lo largo del día: máxima producción energética, sombra controlada en las horas de calor o posición horizontal de protección ante tormenta. Todo ello se configura desde la app.",
  },
  {
    q: "¿Qué parámetros controla la app de AgroVolt?",
    a: "La app reúne la producción eléctrica de la instalación (potencia instantánea, energía diaria, temperatura del inversor) y las variables agrícolas de la finca (humedad del suelo, temperatura, humedad relativa y radiación), además del estado de las placas y las alertas meteorológicas.",
  },
  {
    q: "¿Puedo programar el riego desde el móvil?",
    a: "Sí. Puedes pasar a modo automático o manual, definir el volumen por zona y lanzar un riego puntual. El sistema recomienda el riego en función de la humedad medida por las sondas.",
  },
  {
    q: "¿Qué ocurre si avisa una tormenta o granizo?",
    a: "Con la predicción meteorológica integrada llega un aviso a la app y, si lo deseas, las placas pasan automáticamente a posición horizontal de protección antes de que entre la tormenta.",
  },
  {
    q: "¿Cuánto cuesta una instalación agrovoltaica?",
    a: "Depende de la superficie, del cultivo y del consumo de la explotación. El primer paso es un estudio de viabilidad gratuito que calcula la potencia necesaria, el ahorro estimado y el retorno de la inversión para tu caso concreto.",
  },
  {
    q: "¿En cuánto tiempo se amortiza?",
    a: "Con los precios energéticos actuales, los escenarios habituales de explotación sitúan el retorno anual en torno al 12-18% y el periodo de amortización entre 7 y 9 años, con una vida útil del sistema de 25 años.",
  },
  {
    q: "¿Qué ayudas y subvenciones existen?",
    a: "Hay líneas de ayuda a la eficiencia energética y a la modernización de explotaciones en el marco de los fondos europeos y de las comunidades autónomas. En el estudio de viabilidad revisamos las convocatorias vigentes aplicables a tu proyecto.",
  },
  {
    q: "¿Necesito permisos para instalarlo?",
    a: "Sí: trámite de autoconsumo, conexión a la red y, según la comunidad autónoma y el planeamiento, declaración responsable o licencia urbanística. Gestionamos la documentación contigo durante el proyecto.",
  },
  {
    q: "¿Sirve para cualquier cultivo?",
    a: "Funciona con cultivos herbáceos, frutales, cítricos, viña, olivar y hortalizas. Lo que cambia es la altura, el porcentaje de sombra y la orientación, que se diseñan para cada cultivo y para la maquinaria de la finca.",
  },
];
