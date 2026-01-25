import React, { useEffect } from 'react';
import { PageHeader } from '../components/PageComponents';

// Shared wrapper for consistent legal page layout
const LegalPageWrapper: React.FC<{ children: React.ReactNode }> = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 max-w-4xl bg-white p-8 md:p-16 shadow-sm border border-stone-100 rounded-sm">
                    <div className="prose prose-stone prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:text-marina-dark prose-headings:font-normal prose-headings:tracking-wide
                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:pb-2 prose-h3:border-b prose-h3:border-stone-100
                        prose-p:text-stone-600 prose-p:font-light prose-p:leading-loose prose-p:text-justify prose-p:mb-6
                        prose-strong:text-marina-charcoal prose-strong:font-bold
                        prose-ul:my-6 prose-li:text-stone-600 prose-li:font-light prose-li:marker:text-marina-gold prose-li:leading-loose
                        prose-a:text-marina-gold prose-a:font-medium hover:prose-a:text-marina-dark prose-a:transition-colors prose-a:no-underline hover:prose-a:underline
                    ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export const LegalNotice: React.FC = () => {
    return (
        <LegalPageWrapper>
            <h1>Aviso legal</h1>
            <h3>1. Datos identificativos</h3>
            <p>
                En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
            </p>
            <p>
                El titular del presente sitio web es <strong>Marina Spa</strong> (en adelante, Marina Spa), con domicilio social en C. Reyes Huertas, 8, 06300 Zafra, Badajoz, y correo electrónico de contacto <a href="mailto:info@marinaspa.es">info@marinaspa.es</a>.
            </p>

            <h3>2. Usuarios</h3>
            <p>
                El acceso y/o uso de este sitio web atribuye la condición de USUARIO, quien acepta, desde dicho acceso y/o uso, las presentes condiciones de uso, así como aquellas otras que pudieran resultar de aplicación.
            </p>

            <h3>3. Uso del sitio web</h3>
            <p>
                El sitio web proporciona el acceso a información, servicios, contenidos y datos (en adelante, los contenidos) propiedad de Marina Spa.
            </p>
            <p>
                El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que Marina Spa ofrece a través de su sitio web y, con carácter enunciativo pero no limitativo, a no emplearlos para:
            </p>
            <ul>
                <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                <li>Provocar daños en los sistemas físicos y lógicos de Marina Spa, de sus proveedores o de terceras personas.</li>
            </ul>
            <p>
                Marina Spa se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona o que, a su juicio, no resulten adecuados para su publicación.
            </p>

            <h3>4. Propiedad intelectual e industrial</h3>
            <p>
                Marina Spa, por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del sitio web, así como de los elementos contenidos en el mismo, a título enunciativo: imágenes, textos, sonido, audio, vídeo, software, marcas, logotipos, combinaciones de colores, estructura y diseño, y selección de materiales.
            </p>
            <p>
                Todos los derechos están reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, queda expresamente prohibida la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de este sitio web con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización previa y expresa de Marina Spa.
            </p>

            <h3>5. Responsabilidad</h3>
            <p>
                Marina Spa no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de errores u omisiones en los contenidos, falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos, pese a haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h3>6. Legislación aplicable y jurisdicción</h3>
            <p>
                La relación entre Marina Spa y el USUARIO se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y Tribunales que correspondan conforme a derecho.
            </p>
        </LegalPageWrapper>
    );
};

export const PrivacyPolicy: React.FC = () => {
    return (
        <LegalPageWrapper>
            <h1>Política de privacidad</h1>
            <p>
                En Marina Spa nos tomamos muy en serio la protección de su privacidad y de sus datos personales. La presente Política de Privacidad describe cómo recogemos, utilizamos y protegemos la información personal que nos facilita a través de este sitio web.
            </p>

            <h3>1. Responsable del tratamiento</h3>
            <p>
                <strong>Identidad:</strong> Marina Spa<br />
                <strong>Dirección postal:</strong> C. Reyes Huertas, 8, 06300 Zafra, Badajoz<br />
                <strong>Correo electrónico:</strong> <a href="mailto:info@marinaspa.es">info@marinaspa.es</a>
            </p>

            <h3>2. Finalidad del tratamiento de los datos</h3>
            <p>En Marina Spa tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:</p>
            <ul>
                <li>Atender las solicitudes de información realizadas a través del sitio web.</li>
                <li>Gestionar citas, reservas y servicios solicitados.</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios, promociones u ofertas, siempre que exista consentimiento previo.</li>
                <li>Gestionar la relación comercial y administrativa con los clientes.</li>
            </ul>

            <h3>3. Legitimación para el tratamiento</h3>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul>
                <li>El consentimiento del interesado, otorgado al marcar las casillas correspondientes o al enviar formularios de contacto.</li>
                <li>La ejecución de un contrato o la aplicación de medidas precontractuales cuando solicita una cita o servicio.</li>
            </ul>
            <p>La retirada del consentimiento no afectará a la licitud de los tratamientos realizados con anterioridad.</p>

            <h3>4. Conservación de los datos</h3>
            <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y, posteriormente, durante los plazos legalmente exigidos para el cumplimiento de obligaciones legales.
            </p>

            <h3>5. Destinatarios de los datos</h3>
            <p>
                Los datos personales no se cederán a terceros, salvo obligación legal o cuando sea necesario para la correcta prestación del servicio (por ejemplo, proveedores tecnológicos que actúan como encargados del tratamiento).
            </p>

            <h3>6. Derechos de los interesados</h3>
            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Marina Spa estamos tratando datos personales que le conciernan.</p>
            <p>Las personas interesadas tienen derecho a:</p>
            <ul>
                <li>Acceder a sus datos personales.</li>
                <li>Solicitar la rectificación de los datos inexactos.</li>
                <li>Solicitar la supresión de sus datos cuando, entre otros motivos, ya no sean necesarios para los fines que fueron recogidos.</li>
                <li>Solicitar la limitación del tratamiento de sus datos.</li>
                <li>Oponerse al tratamiento de sus datos.</li>
                <li>Solicitar la portabilidad de sus datos.</li>
            </ul>
            <p>
                Para ejercer estos derechos, el usuario puede enviar una solicitud por escrito a <a href="mailto:info@marinaspa.es">info@marinaspa.es</a>, indicando el derecho que desea ejercer y adjuntando copia de un documento identificativo.
            </p>
            <p>
                Asimismo, el interesado tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
            </p>

            <h3>7. Seguridad de los datos</h3>
            <p>
                Marina Spa adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>

            <h3>8. Decisiones automatizadas</h3>
            <p>
                Marina Spa no realiza decisiones automatizadas, incluida la elaboración de perfiles, basadas en los datos personales facilitados.
            </p>

            <h3>9. Cambios en la política de privacidad</h3>
            <p>
                Marina Spa se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos casos, se anunciarán los cambios en esta página.
            </p>
        </LegalPageWrapper>
    );
};

export const CookiesPolicy: React.FC = () => {
    return (
        <LegalPageWrapper>
            <h1>Política de cookies</h1>
            <p>
                Marina Spa informa a los usuarios de su sitio web sobre el uso de cookies.
            </p>

            <h3>¿Qué son las cookies?</h3>
            <p>
                Las cookies son pequeños archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Permiten, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
            </p>

            <h3>Cookies utilizadas en este sitio web</h3>
            <p>
                Este sitio web utiliza cookies técnicas y de terceros necesarias para su funcionamiento y para mostrar contenidos externos.
            </p>
            <p>En particular, se utilizan:</p>

            <h4>Cookies técnicas</h4>
            <p>
                Son aquellas necesarias para la navegación y el correcto funcionamiento del sitio web.
            </p>

            <h4>Cookies de terceros</h4>
            <p>
                Este sitio web utiliza servicios de terceros que pueden instalar cookies en el dispositivo del usuario, como por ejemplo:
            </p>
            <ul>
                <li><strong>Google Maps</strong>, utilizado para mostrar la ubicación del centro mediante un mapa interactivo.</li>
            </ul>
            <p>
                Estos terceros pueden recopilar información sobre el uso del sitio web conforme a sus propias políticas de privacidad.
            </p>

            <h3>Gestión de cookies</h3>
            <p>
                El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador que utilice. A continuación se indican los enlaces a la configuración de los principales navegadores:
            </p>
            <ul>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://www.firefox.com/es-ES/privacy/websites/cookie-settings/" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>

            <h3>Aceptación de la política de cookies</h3>
            <p>
                Al acceder a este sitio web, el usuario es informado del uso de cookies mediante un banner informativo. El usuario puede aceptar o rechazar el uso de cookies conforme a la normativa vigente.
            </p>

            <h3>Cambios en la política de cookies</h3>
            <p>
                Marina Spa se reserva el derecho a modificar la presente Política de Cookies para adaptarla a cambios legislativos o técnicos. Cualquier modificación será debidamente publicada en esta página.
            </p>
        </LegalPageWrapper>
    );
};