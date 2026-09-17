# Proyecto de diseno web

Aplicacion web de una tienda online desarrollada con Vue 3. Incluye catalogo de productos, busqueda, filtros por categoria, detalle de producto, productos relacionados, carrito de compra y perfil de usuario.

## Demo

Prueba la aplicacion publicada en GitHub Pages:

[Abrir la demo](https://pistachopower.github.io/Proyecto_Diseno_Web/)

## Tecnologias utilizadas

- Vue 3 con Composition API y `<script setup>`
- Vite 6 como herramienta de desarrollo y build
- Vue Router 4 para la navegacion
- Pinia 3 para la gestion del estado
- Bootstrap 5 para estilos y componentes visuales
- JavaScript, HTML y CSS
- GitHub Actions y GitHub Pages para el despliegue

## API externa

El catalogo de productos utiliza [DummyJSON Products API](https://dummyjson.com/docs/products):

```text
https://dummyjson.com/products
```

La peticion se realiza en `tienda/src/stores/products.js` mediante `fetch`. La respuesta de DummyJSON tiene esta estructura:

```json
{
	"products": []
}
```

El store extrae la propiedad `products` y adapta la imagen de cada producto para que la aplicacion utilice la propiedad `image`:

```js
const data = await response.json();
this.allProduct = data.products.map(product => ({
	...product,
	image: product.thumbnail || product.images?.[0],
}));
```

Tambien se comprueba `response.ok` para detectar errores HTTP antes de procesar la respuesta.

## Funcionalidades

- Consulta de productos desde una API externa.
- Busqueda por nombre.
- Filtros por categoria.
- Carrusel de productos destacados.
- Vista de detalle y productos relacionados.
- Carrito con cantidades acumuladas para productos repetidos.
- Calculo de subtotal, impuesto y total.
- Configuracion local del nombre y avatar del usuario mediante `localStorage`.

## Ejecutar en local

Requisitos: Node.js y npm.

Desde la raiz del repositorio:

```bash
cd tienda
npm install
npm run dev
```

Abre la URL que muestre Vite, normalmente:

```text
http://localhost:5173/
```

## Compilar para produccion

```bash
cd tienda
npm run build
npm run preview
```

## Despliegue

El workflow de GitHub Actions se encuentra en `.github/workflows/deploy.yml`.

Cada cambio enviado a la rama `main`:

1. Instala las dependencias de `tienda`.
2. Ejecuta `npm run build`.
3. Conserva `index.html` como `404.html` para soportar las rutas de Vue Router en GitHub Pages.
4. Publica la carpeta `tienda/dist` en GitHub Pages.

La configuracion de Vite utiliza esta base para el despliegue:

```js
base: '/Proyecto_Diseno_Web/'
```

## Estructura principal

```text
tienda/
	public/
	src/
		components/
		router/
		stores/
		views/
	index.html
	package.json
	vite.config.js
```
