# Nuxt Starter

Revisen la documentacion oficial -> [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)

## Configurar

> [!WARNING]
> Es importante tener instalado BUN antes de comenzar a ejecutar el proyecto. -> [INSTALAR BUN MEDIANTE POWERSHELL DE WINDOWS](https://bun.sh/docs/installation)


Una vez instalado BUN procedemos con la instalacion de los nmodulos

```bash
# Bun
bun install
```

## Ejecutar el proyecto

```bash
# bun
bun run dev
```

El comando ejecuatara el proyecto en el [`http://localhost:3000`](http://localhost:3000)

## Estructura del proyecto
```
tutor-2.0/
├── .nuxt/				
├── assets/				→ Recursos estáticos internos:
│   ├── css/					→ Hojas de estilo globales (main.css).
│   │   └── main.css
│   └── images/				→ Imágenes utilizadas en la app.
├── components/			→ Componentes Reutilizables
│   ├── auth/					→ Formularios de autenticación.
│   │   ├── LoginForm.vue				→ Formulario de inicio de sesión.
│   │   ├── RegisterForm.vue				→ Formulario de registro.
│   │   └── SocialAuth.vue				→ Autenticación con Google (En caso de agregar el proveedor de Google).
│   ├── common/				→ Elementos generales de la UI.
│   │   ├── AppHeader.vue				→ Barra de navegación principal.
│   │   ├── AppFooter.vue				→ Pie de página de la aplicación.
│   ├── dashboard/				→ Componentes específicos por tipo de usuario.
│   │   ├── Admin/					→ Administración.
│   │   │   ├── UserCrud.vue		
│   │   │   └── AnalyticsChart.vue
│   │   ├── Student/					→ Panel del estudiante
│   │   │   ├── CourseCard.vue
│   │   │   └── NewsWidget.vue
│   │   └── Teacher/					→ Panel del docente
│   │   	├── FileUploader.vue
│   │   	└── MaterialList.vue
│   └── ai/					→ Integración con Gemini AI.
│   	└── ChatInterface.vue
├── composables/			→ Lógica Reutilizable
│   ├── useAuth.ts				→ Manejo de autenticación (login, logout, recuperación de contraseña).
│   ├── useSupabase.ts			→ Métodos generales para acceder a la base de datos de Supabase.
│   ├── useGemini.ts				→ Conexión con Gemini AI para el chat.
│   └── useNewsAPI.ts			→ Consumo de API de noticias para el dashboard.
├── layouts/				→ Definen las estructuras base de las páginas
│   ├── auth.vue				→ Diseño para páginas de autenticación.	
│   ├── dashboard.vue				→ Diseño para paneles de usuario.
│   └── default.vue				→ Diseño base general.
├── middleware/			→ Protegen rutas y controlan accesos
│   ├── auth.ts					→ Verifica si el usuario está autenticado.
│   └── role-guard.ts				→ Controla el acceso según el rol (estudiante, docente, admin).
├── pages/				→ Representan las vistas principales de la app
│   ├── auth/					→ Vistas de autenticación.
│   │   ├── login.vue
│   │   ├── register.vue
│   │   └── reset-password.vue
│   ├── dashboard/				→ Vistas del panel según el rol
│   │   ├── admin/					→ Administración (users.vue, analytics.vue).
│   │   │   ├── index.vue		
│   │   │   ├── users.vue
│   │   │   └── analytics.vue
│   │   ├── student/					→ Estudiante (courses.vue, chat.vue).
│   │   │   ├── index.vue
│   │   │   ├── courses.vue
│   │   │   └── chat.vue
│   │   └── teacher/					→ Docente (materials.vue, students.vue).
│   │   	├── index.vue
│   │   	├── materials.vue
│   │   	└── students.vue
│   └── index.vue				→ Página de inicio.
├── plugins/				→ Inicializan librerías externas
│   └── supabase.client.ts			→ Configuración de Supabase para la conexión con la base de datos.
├── public/				→ Archivos estáticos accesibles sin procesamiento.
├── server/				→ Manejan lógica backend personalizada
│   ├── api/
│   │   └── gemini.ts				→ Elementos para el funcionamiento de la API Key de Gemini AI.
├── stores/				→ Manejan el estado centralizado
│   ├── auth.store.ts				→ Manejo del estado de autenticación.
│   ├── courses.store.ts			→ Gestión de asignaturas y cursos.
│   └── user.store.ts				→ Información del usuario autenticado.
├── .env				→ Archivo de variables de entorno (API Keys, configuración de Supabase, etc.).
├── nuxt.config.ts			→ Configuración principal de Nuxt (plugins, módulos, rutas, etc.).
├── package.json
├── app.config.ts			→ Configuración de Nuxt UI para los estilos globales.
└── tsconfig.json			→ Configuración para TypeScript.
```

## Tabla de Asignación de Tareas - Versión Extendida


| N°  | Área                 | Tarea                                | Descripción Detallada                                                              | Depende       | D 1/5 |
|----|----------------------|-------------------------------------|----------------------------------------------------------------------------------|--------------|------|
| 1  | Autenticación       | Implementar autenticación con Supabase | Configurar Supabase Auth para permitir el registro, inicio de sesión y cierre de sesión. | -            | 4    |
| 2  | Autenticación       | Crear componentes de autenticación  | Crear LoginForm.vue, RegisterForm.vue, y SocialAuth.vue para el acceso de usuarios. | -            | 3    |
| 3  | Autenticación       | Middleware de protección de rutas  | Crear auth.ts y role-guard.ts para restringir accesos según el rol.                 | 1            | 4    |
| 4  | Autenticación       | Implementar recuperación de contraseña | Crear página y lógica para recuperar contraseñas usando Supabase.               | 1            | 5    |
| 5  | Dashboard - Estudiante | Inscripción a asignaturas          | Implementar funcionalidad para buscar asignaturas e inscribirse por ID.         | -            | 6    |
| 6  | Dashboard - Estudiante | Ver y gestionar asignaturas inscritas | Mostrar asignaturas inscritas con opción de desuscribirse.                      | 5            | 7    |
| 7  | Dashboard - Estudiante | Noticias dinámicas en el dashboard | Crear widget para mostrar noticias con integración de IA.                      | -            | 4    |
| 9  | Dashboard - Docente  | CRUD de asignaturas y materiales   | Permitir a los docentes gestionar asignaturas y materiales.                      | -            | 10   |
| 10 | Dashboard - Docente  | Carga de archivos con Supabase Storage | Configurar carga de archivos con límite de peso y seguridad.                   | -            | 11   |
| 11 | Dashboard - Docente  | Gestión de estudiantes en asignaturas | Permitir a los docentes eliminar estudiantes de sus materias.                   | -            | 2    |
| 12 | Dashboard - Docente  | Agregar sistema de comentarios     | Implementar foro dentro de cada asignatura para preguntas y respuestas.          | -            | 4    |
| 13 | Dashboard - Admin    | CRUD de usuarios                   | Crear panel para administrar usuarios.                                          | -            | 14   |
| 14 | Dashboard - Admin    | Implementar estadísticas y analíticas | Mostrar datos de uso como número de usuarios y actividad.                      | -            | 5    |
| 15 | Dashboard - Admin    | Sistema de reportes y moderación   | Permitir que los admins eliminen contenido inapropiado.                          | -            | 4    |
| 16 | UI/UX               | Implementar Nuxt UI y Layouts      | Configurar auth.vue, dashboard.vue, default.vue con Nuxt UI.                     | -            | 2    |
| 17 | UI/UX               | Crear componentes de UI reutilizables | Desarrollar AppHeader.vue, AppFooter.vue, LoadingSpinner.vue.                   | -            | 2    |
| 18 | Base de Datos       | Modelado de base de datos en PostgreSQL | Crear y estructurar las tablas en Supabase.                                  | -            | 3    |
| 19 | Seguridad           | Configuración de reglas en Supabase | Definir reglas de acceso y permisos para cada tipo de usuario.                   | 18           | 20   |
| 20 | Estado Global (Pinia) | Implementar gestión de estado       | Crear auth.store.ts, courses.store.ts, user.store.ts.                           | 1, 5, 9      | 4    |
| 21 | Integración Gemini AI | Crear funciones para Gemini API     | Implementar useGemini.ts para conectarse con Gemini API.                        | -            | 22   |
| 22 | Integración Gemini AI | Implementar Chatbot con Gemini      | Integrar la IA en la UI de ChatInterface.vue.                                   | 21           | 5    |
| 23 | Integración Gemini AI | Optimizar consultas a la IA        | Reducir llamadas innecesarias a la API para mejorar rendimiento.                | 21, 22       | 4    |
| 24 | API Server          | Documentar y configurar API        | Documentar interacciones con Supabase y API externas.                            | -            | 25   |
| 25 | Documentación       | Mantener documentación del proyecto | Registrar cambios, arquitectura y procesos.                                     | Todas        | 2    |
| 26 | Optimización        | Implementar lazy loading           | Optimizar carga de componentes con defineAsyncComponent.                        | -            | 3    |
| 27 | Optimización        | Configurar caching en Supabase     | Implementar estrategias de cacheo para mejorar rendimiento.                     | -            | 28   |
| 28 | Testing            | Escribir pruebas unitarias          | Implementar Jest o Vitest para testear componentes clave.                        | 2, 14, 22    | 4    |
| 29 | Testing            | Escribir pruebas de integración     | Probar flujo completo de autenticación y dashboard.                             | 1, 5, 9      | 30   |
| 30 | DevOps             | Configurar despliegue automático    | Integrar CI/CD con Vercel o Netlify.                                            | -            | 31   |
| 31 | DevOps             | Configurar logs y monitoreo        | Implementar Sentry o Supabase Logs para rastreo de errores.                     | -            | 3    |


## Conceptos básicos

- [RESTful API](https://leapcell.io/blog/restful-api-principles-design-and-best-practices)
- [JWT (Json Web Token)](https://www.geeksforgeeks.org/json-web-token-jwt/)
- [BaaS (Backend-as-a-Service)](https://www.cloudflare.com/learning/serverless/glossary/backend-as-a-service-baas/)
- [Configuración del archivo raíz de Nuxt](https://nuxt.com/docs/api/nuxt-config)
- [TYPE CHECK](https://nuxt.com/docs/guide/concepts/typescript)
- [Modos de carga de Nuxt](https://nuxt.com/docs/guide/concepts/rendering)
- [Modo de carga de solo el cliente](https://nuxt.com/docs/api/components/client-only)

<br>

> [!NOTE] 
> Es importante revisar los conceptos de JWT y RESTful API antes de trabajar con autenticación y seguridad en la aplicación.

<br>

## Supabase

_Supabase es un modelo de servicio en la nube que permite a los desarrolladores subcontratar todos los aspectos del backend de una aplicación web o móvil. Esto incluye gestión de bases de datos, autenticación de usuarios, almacenamiento en la nube, notificaciones push, y más, a través de API y SDK._

Servicios a utilizar en este proyecto:

- [Supabase Authentication](https://supabase.com/docs/guides/auth) (para el login y gestión de sesiones)
- [Supabase Storage](https://supabase.com/docs/guides/storage) (para el almacenamiento de los materiales de las asignaturas)

### Instalación de Supabase en Nuxt 3

- [Nuxt + Supabase](https://supabase.nuxtjs.org/)
- [Video tutorial](https://youtu.be/Qz3Ugvz9IfM?si=4frD3Cnt24ezKPSP) _(SEGUIR LA DOCUMENTACIÓN)_

### Autenticación con Supabase

Antes de comenzar, es recomendable revisar qué es un JWT:
- [JWT - Json Web Token](https://www.geeksforgeeks.org/json-web-token-jwt/)

Recursos útiles:

- [User sessions](https://supabase.com/docs/guides/auth/sessions)
- [Video de un simple login con Supabase](https://youtu.be/IcaL1RfnU44?si=qDc4Yc2LKGDK3xf6)
- [Ejemplo de login con Nuxt y Supabase](https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3)
- [Función de cerrar sesión en Supabase](https://supabase.com/docs/guides/auth/signout)
- [Manejo de roles en Supabase](https://www.restack.io/docs/supabase-knowledge-supabase-auth-uid-guide)

<br>

> [!WARNING]
> Es crucial definir correctamente las reglas de acceso en Supabase para evitar problemas de seguridad y accesos no autorizados.

## Gemini AI

_Gemini AI es una herramienta que permite a los desarrolladores crear y desplegar rápidamente aplicaciones y chatbots utilizando modelos de inteligencia artificial._

- [Google AI Studio](https://aistudio.google.com/)
- [Introducción a la API de Gemini](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)
- [LearnLM: Modelo experimental para enseñanza y aprendizaje](https://ai.google.dev/gemini-api/docs/learnlm)
- [Descarga de recursos](https://ai.google.dev/gemini-api/docs/downloads)
- [Modelos Gemini](https://ai.google.dev/gemini-api/docs/models/gemini)
- [Generación de texto con la API de Gemini](https://ai.google.dev/gemini-api/docs/text-generation)

## Nuxt UI

_Nuxt UI es una biblioteca de componentes de interfaz de usuario (UI) diseñada para funcionar con Nuxt.js._

[Nuxt UI](https://ui.nuxt.com/)

### Dependencias incluidas:

- [TailwindCSS](https://tailwindcss.nuxtjs.org/)
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/)
- [Iconos de Heroicons](https://icon-sets.iconify.design/heroicons/)
- [Librería de iconos de Nuxt](https://github.com/nuxt/icon)

<br>

> [!NOTE]
> Nuxt UI ya incluye varias dependencias, por lo que no es necesario instalarlas por separado.

## Bun

_Bun es un entorno de ejecución de JavaScript diseñado como alternativa a Node.js. Está escrito en Zig y utiliza el motor JavaScriptCore, ofreciendo mayor rendimiento y tiempos de inicio más rápidos._

### Instalación de Bun

1. Instalar Bun mediante PowerShell en **modo administrador**: [Instrucciones de instalación](https://bun.sh/docs/installation)
2. **Reiniciar el PC después de la instalación.**

<br>

> [!WARNING]
> No es necesario realizar configuraciones adicionales tras la instalación; simplemente reiniciar el PC es suficiente.
