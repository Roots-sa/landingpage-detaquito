# Roots Landing Page

Una landing page moderna desarrollada con Next.js 14, TypeScript y Tailwind CSS.

## Características

- ✅ **4 Secciones principales**: Hero, Features, About, Contact
- ✅ **Footer completo** con redes sociales y enlaces
- ✅ **Chatbot flotante** con respuestas automáticas
- ✅ **Formulario de contacto** funcional
- ✅ **Diseño responsivo** con acentos azules
- ✅ **APIs internas** para chat y envío de emails

## Tecnologías

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Nodemailer** para envío de emails
- **Lucide React** para iconos

## Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Configurar variables de entorno:

```bash
cp env.example .env.local
```

Editar `.env.local` con tus credenciales de email:

```
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-password-de-aplicacion
ADMIN_EMAIL=admin@roots.com
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

## Funcionalidades del Chatbot

El chatbot incluye respuestas automáticas para:

- **Precios**: Información sobre costos y presupuestos
- **Servicios**: Descripción de servicios ofrecidos
- **Contacto**: Solicitud de datos del usuario
- **Proyectos**: Información sobre desarrollo de proyectos
- **Saludos**: Respuestas amigables
- **Despedidas**: Cierre de conversación

## APIs

### `/api/chat`

- Recibe mensajes del chatbot
- Responde automáticamente según palabras clave
- Maneja conversaciones en tiempo real

### `/api/email`

- Envía resumen completo del chat
- Incluye datos del usuario y historial
- Formato HTML y texto plano

### `/api/contact`

- Procesa formulario de contacto
- Envía emails con datos del usuario
- Validación de campos requeridos

## Estructura del Proyecto

```
├── app/
│   ├── api/
│   │   ├── chat/route.ts
│   │   ├── email/route.ts
│   │   └── contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Chatbot.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.js`:

- **Primary**: Azul (#3b82f6)
- **Accent**: Variaciones de azul
- **Background**: Grises y blancos

### Contenido

- Editar textos en cada componente
- Modificar respuestas del chatbot en `components/Chatbot.tsx`
- Actualizar información de contacto en `components/Footer.tsx`

## Despliegue

1. **Vercel** (recomendado):

```bash
npm run build
```

2. **Configurar variables de entorno** en el panel de Vercel

3. **Dominio personalizado** (opcional)

## Desarrollo

- **Linting**: `npm run lint`
- **Build**: `npm run build`
- **Start**: `npm start`

## Soporte

Para soporte técnico o consultas sobre el proyecto, contactar a: info.roots@gmail.com
