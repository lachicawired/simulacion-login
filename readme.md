Simulación Frontend & Backend – Validación de Usuarios

Este proyecto es una práctica escolar para comprender cómo funciona la interacción entre el Frontend (HTML + CSS) y la lógica de Backend simulada (JavaScript).

La aplicación permite ingresar un usuario y contraseña para validar si existe en una pequeña base de datos simulada.

Tecnologías usadas

HTML5 → estructura de la página

CSS3 → estilos y diseño

JavaScript → lógica de validación (simulación de backend)

Funcionalidades

Formulario con campo de nombre y campo de contraseña.

Simulación de una base de datos en un array de objetos:

const usuariosPermitidos = [
  { nombre: "Andres", password: "1234" },
  { nombre: "Saul", password: "abcd" },
  { nombre: "Lachica", password: "pass2025" }
];


Validación en tiempo real:

✅ Muestra mensaje de bienvenida si los datos son correctos.

❌ Muestra error si usuario o contraseña no coinciden.

📷 Captura de ejemplo
[![image-2025-09-16-190144741.png](https://i.postimg.cc/xT21csrM/image-2025-09-16-190144741.png)](https://postimg.cc/8sZSYmzz)


📝 Qué aprendí

Diferencia entre Frontend (interfaz) y Backend (lógica de validación).

Uso de condicionales y búsqueda en arrays con .find().

Manejo de inputs y mensajes dinámicos con DOM.

🔮 Mejoras futuras

Conectar con una API real o base de datos.

Añadir registro de nuevos usuarios.

Encriptar contraseñas para mayor seguridad.