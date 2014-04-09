restaurantebrossa
=================

---- Requisitos de usuario ----

VACIO

------------------------------Estructura de directorios--------------------------
  
  - docs/ --> Los datos del proyecto iran aqui.
  - design/ --> En estas dos carpetas iran las plantillas HTML. NO hace falta dividrlas en trozos para prepararlo
                para el Code Igniter. Esa tarea se hara posteriormente una vez la plantilla este finalizada, y dentro de                  la carpeta "src/"
    - front-end/
    - back-end/
  
                        ----Programacion---- (TODAVIA HAY QUE DECIDIR LA ESTRUCTURA. Este seccion se actualizara acorde cuando apliquemos la estructura que nos impone CodeIgniter)

  - src/ --> Aqui iran los archivos PHP principales
    - include/ --> Aqui iran los archivos de PHP auxiliares (de ayuda).
      - ltv/ --> Los modulos de CodeIgniter que hagamos iran aqui. 
  - docs/ --> Documentacion del proyecto, generada con ApiGen a partir del codigo fuente.
    - assets/
      - js/ --> Aqui iran los archivos de la logica de nuestra aplicacion.
        - lib/ --> Aqui iran las librerias que utilicemos (ej: jQuery, Parallax...)
      - css/
      - img/
      - templates/ --> Tomas, si quieres dividir las paginas en trozos, hazlo aqui (Hasta que no hayamos definido la estructura de directorios no lo hagas) (Ej: header, body, footer, aside....)



<b>---- Workflow ----</b>
    
--Diariamente--

  1. Programar
  2. Pruebas unitarias (PHPUnit)
  3. Documentar (ApiGen - NetBeans)
  4. Commit & Push (Git)
  5. Vuelta al paso 1.

--Semanalmente (Fines de semana)--

Se reuniran requisitos de usuario y se impondra un modelo iterativo de trabajo.

<b> ---- Ramas Principales de Git ---- </b>

Cada una de estas ramas principales pueden tener tanas subramas de subramas sean necesarias.

- Master --> Rama principal de aplicacion. Limpia y funcional
- Integration --> Si funciona bien la union de los trozos del proyecto, se pasara a Master.
- Develop --> Rama de desarrollo (Donde trabajaremos). Una vez se asegurado el codigo de que sea funcional, se pasara a Integration donde juntaremos diferentes subramas de Develop a Integration (Probaremos de que la integracion de los modulos del proyecto vaya bien).
- Feature --> Las caracteristicas que se vayan añadiendo nuevas iran aqui. Luego de probarlas y sean funcionales, se pasara a Develop.
- Hotfix --> Rama dedica a crear parches para bugs. Una vez acabado se hara merge con otra rama.

<b> ---- Planificacion ---- </b>

Utilizaremos un modelo iterativo (Tengo que decidir todavía cual) para controlar el ciclo de vida del proyecto.
Impondremos objetivos con fechas limities de entrega (semanales) para ver hasta donde se ha progresado y tener una referencia de lo que nos falta por hacer para completar el proyecto.

Semana 1:

Semana 2:

Semana 3:

Semana 4:

