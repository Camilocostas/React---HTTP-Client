# React - HTTP Client

## 📋 Descripción

Este repositorio contiene ejercicios prácticos del método `HttpClient`, implementando un servicio con métodos para realizar peticiones HTTP en aplicaciones React. El proyecto demuestra cómo integrar y utilizar un cliente HTTP en una aplicación React moderna.

## 🎯 Objetivo

Proporcionar ejemplos prácticos de cómo realizar peticiones HTTP (GET, POST, PUT, DELETE) en aplicaciones React, utilizando patrones y mejores prácticas.

## 🛠️ Composición del Proyecto

- **JavaScript**: 89.6% - Lógica principal de la aplicación
- **CSS**: 9.7% - Estilos y diseño visual
- **HTML**: 0.7% - Estructura base

## 📚 Contenido

Este proyecto incluye:

- Servicio HttpClient personalizado
- Métodos para realizar peticiones HTTP
- Ejemplos de uso en componentes React
- Manejo de respuestas y errores
- Integración con APIs externas

## 🚀 Características

- ✅ Peticiones HTTP GET, POST, PUT, DELETE
- ✅ Manejo de errores y excepciones
- ✅ Interceptores de peticiones (si aplica)
- ✅ Ejemplos prácticos en componentes React
- ✅ Buenas prácticas de desarrollo

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/Camilocostas/React---HTTP-Client.git
```

2. Navega al directorio del proyecto:
```bash
cd React---HTTP-Client
```

3. Instala las dependencias:
```bash
npm install
```

## ▶️ Uso

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`

## 📝 Ejemplos de Uso

### Petición GET
```javascript
// Obtener datos del servicio
const response = await httpClient.get('/api/endpoint');
```

### Petición POST
```javascript
// Enviar datos al servidor
const response = await httpClient.post('/api/endpoint', data);
```

### Petición PUT
```javascript
// Actualizar datos
const response = await httpClient.put('/api/endpoint/:id', updatedData);
```

### Petición DELETE
```javascript
// Eliminar datos
const response = await httpClient.delete('/api/endpoint/:id');
```

## 🎓 Conceptos Abordados

- Consumo de APIs REST
- Promesas y async/await
- Manejo de estados en React
- Ciclo de vida de componentes
- Hooks de React (useState, useEffect, etc.)

## 📋 Requisitos

- Node.js (v14 o superior)
- npm o yarn
- Navegador web moderno

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork el repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está disponible bajo la licencia que se especifique en el archivo LICENSE.

## ✉️ Contacto

Para más información o preguntas, puedes contactar al propietario del repositorio a través de:
- GitHub: [@Camilocostas](https://github.com/Camilocostas)

## 🔗 Enlaces Útiles

- [Documentación oficial de React](https://react.dev)
- [Guía de Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Axios Documentation](https://axios-http.com)

---

**Última actualización**: 2026-05-05
