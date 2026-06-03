# DB Studio — Clone (Next.js)

Réplica del sitio [dbstudiomedia.com](https://dbstudiomedia.com/) construida con **Next.js 16**, **TypeScript** y **Tailwind CSS**.

## Paleta de colores

| Token     | Hex       | Uso                          |
|-----------|-----------|------------------------------|
| Burgundy  | `#5B1B1F` | Botones, acentos, footer     |
| Cream     | `#FFFAEE` | Fondos de sección alternos   |
| White     | `#FFFFFF` | Fondo principal              |
| Black     | `#000000` | Texto principal              |
| Gray      | `#333333` | Texto secundario             |

## Páginas

- `/` — Home (todas las secciones)
- `/about-us`
- `/services`
- `/memberships`
- `/collaborations`
- `/industries`
- `/partnership`
- `/contact-us`
- `/booking`
- `/privacy-policy`
- `/refund-policy`
- `/terms-of-service`

## Imágenes

Los placeholders (`ImagePlaceholder`) marcan dónde irán fotos y videos. Sustitúyelos por `<Image />` de `next/image` cuando tengas los assets.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Heroku

La app incluye `Procfile`, `app.json` y `engines` en `package.json` para Heroku.

```bash
heroku git:remote -a db-studio
git push heroku main
```

URL en producción: https://db-studio-1be713f85dd0.herokuapp.com/

## Build

```bash
npm run build
npm start
```
