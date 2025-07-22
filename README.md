# Frontend - Challenge Mercado Libre

Este proyecto es la implementación del **frontend** del buscador de productos estilo Mercado Libre.

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS Modules](https://sass-lang.com/)

## 📁 Estructura principal

```
src/
├── components/ # Componentes divididos por atomic design
│ ├── atoms/
│ ├── molecules/
│ └── organisms/
├── pages/ # Rutas principales: Home, Items, Detalle
├── styles/ # Estilos globales y variables SCSS
├── types/ # Tipos reutilizables
├── utils/ # Utilidades
├── Hooks/ # Custom Hooks
```


## 🧪 Funcionalidades implementadas

- **Barra de búsqueda** fija con comportamiento responsive.
- **Tooltip de bienvenida** visible solo una vez.
- **Página de resultados** con productos encontrados.
- **Página de detalle** con imágenes, descripción y datos del vendedor.

## ⚙️ Instalación y ejecución

1. Cloná el repositorio:

```bash
git clone https://github.com/exequielsosa/meli-front.git
cd meli-front
```

2. Instalá las dependencias:
```
npm install
``` 

3. Iniciá el servidor:
```
npm run dev
```

Abrí http://localhost:3000 en tu navegador para verlo en acción.

🧠 Buenas prácticas aplicadas
- Componentes desacoplados por responsabilidad.
- Tipado estricto con TypeScript.
- Estilos modulados con SCSS.
- Arquitectura basada en Atomic Design.

📌 Nota
Este frontend consume datos desde una API local que debe estar corriendo en paralelo. Verificá que el backend esté disponible para que la búsqueda y el detalle funcionen correctamente.
