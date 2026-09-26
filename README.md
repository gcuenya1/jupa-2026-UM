# Sala de Máquinas — deploy en Railway

Este proyecto sirve `public/index.html` (la actividad "Sala de Máquinas" de la
Jornada de Puertas Abiertas de TUDS) con un servidor Node/Express mínimo, listo
para Railway.

## Qué se modificó respecto al archivo original

- Se agregó una pantalla de bienvenida ("name gate") que tapa toda la página
  hasta que la persona escribe su nombre. Ese nombre queda guardado en el
  `localStorage` de su propio navegador (no se manda a ningún servidor), así
  que cada visitante tiene su experiencia 100% independiente en su compu o
  celu — nada se comparte entre sesiones.
- El nombre ingresado se usa automáticamente para precargar el campo "Tu
  nombre" de la estación 02 y, por lo tanto, el certificado final también sale
  con el nombre correcto sin que la persona tenga que volver a escribirlo.
- Se armó `server.js` + `package.json` para que Railway pueda buildear y
  correr el proyecto (antes era un único .html suelto).
- Botón **"↺ Empezar de nuevo"** (arriba a la derecha y también en el banner
  final como "Terminé — que pase el siguiente"). Pide confirmación y borra lo
  que la Sala guardó en ese navegador (nombre, recorrido, formularios), así la
  siguiente persona que use la misma compu arranca de cero.
- Se agregaron `<!DOCTYPE html>`, `<meta charset="utf-8">` y el `viewport`
  para que se vea bien en celulares y los acentos no dependan del servidor.
- Nada del contenido original de las estaciones (quiz, kanban, IA, bugs, QA,
  deploy, seguridad, certificado) se tocó — todo el agregado es aditivo.

Con un archivo estático servido así, 30 personas conectadas a la vez no es un
problema: no hay base de datos ni estado compartido, cada navegador hace todo
el trabajo solo.

## Probarlo localmente (opcional)

```bash
npm install
npm start
# abrir http://localhost:3000
```

## Subirlo a GitHub

Railway despliega desde un repositorio de GitHub. Elegí una opción:

### Opción A — con git (si lo tenés instalado)

```bash
cd sala-maquinas-deploy
git init
git add .
git commit -m "Sala de Máquinas lista para Railway"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sala-maquinas-tuds.git
git push -u origin main
```

(Primero creá el repo vacío en https://github.com/new, sin README ni
.gitignore, para que la URL de arriba exista.)

### Opción B — sin git, arrastrando archivos

1. Andá a https://github.com/new, poné un nombre (por ejemplo
   `sala-maquinas-tuds`) y creá el repositorio (puede ser público o privado).
2. En la página del repo recién creado, hacé clic en "uploading an existing
   file".
3. Arrastrá los archivos de esta carpeta (`package.json`, `server.js`,
   `railway.json`, `.gitignore`, y la carpeta `public/` con `index.html`
   adentro) y confirmá el commit.

## Conectar con Railway

Una vez que el repo esté en GitHub, pasame el nombre como `usuario/repo` (por
ejemplo `gcuenya1/sala-maquinas-tuds`) y me encargo de crear el proyecto en tu
cuenta de Railway, conectarlo a ese repo, generar la URL pública y confirmar
que quedó levantado.
