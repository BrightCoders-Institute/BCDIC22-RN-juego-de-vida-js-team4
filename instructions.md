![BrightCoders Logo](img/logo.png)

- [El Juego de la vida](#el-juego-de-la-vida)
  - [Objetivos](#objetivos)
  - [Instrucciones](#instrucciones)
  - [Entregables](#entregables)
  - [Puntos](#puntos)
  - [Tecnologías](#tecnologías)
  - [Flujo de trabajo](#flujo-de-trabajo)
  - [Requerimientos funcionales](#requerimientos-funcionales)
    - [Clues](#clues)
  - [Recursos](#recursos)
  
# El Juego de la vida

  Atributo |  Valor
 --- | --- |
 Tipo | Colaborativo
 Estrategia | Mob Programming
 Modo | Síncrono
 Dedicación | 12 horas
 Duración | 4 días

## Objetivos

- Nivelar habilidades para la programación con Javascript / Typescript
- Introducir el uso de Linters
- Introducir en el desarrollo basado en pruebas
- Introducir la dinámica de Mob Programming
- Introducir la cultura de trabajo colaborativo remoto
- Introducir el uso de git y github
  - git clone
  - git push
  - git commit
  - co-author commits

## Instrucciones

- Deberán trabajar en equipo de manera colaborativa y aplicando la dinámica de mob programming para desarrollar una página web de acuerdo a los requerimientos que en las siguientes secciones se indican.
- En la actividad de Github (commits) se deberá observar la participación de todos los participantes a
- En cada commit se deben registrar todos los participantes activos (co-author commits)
- En los commits se debe observar a rotación de los participantes, es decir, quien hace el commit no es siempre la misma persona

## Entregables

- Código fuente en este repositorio
- Solución orientada a objetos
- Archivo README.md actualizado
- El código debe incluir pruebas unitarias
- La puntuación obtenida por Codacy, CodeClimate o similar debe ser A o lo equivalente
- Se deben incluir los badges de los analizadores de código estáticos (codacy, codeclimate, etc.)
- La versión final de tu código deberá estar en la rama master

## Puntos

- Número de commits como primer autor
- Número de commits como co-author
- Frecuencia de los commits (# de commits realizados en días diferentes)
- Tamaño de los commits (líneas de código agregadas)

## Tecnologías

- Javascript ó Typescript
- ESLint
- Jest
- Codacy, CodeClimate, CodeCov

## Flujo de trabajo

El siguiente es un flujo de trabajo sugerido, si el equipo lo decide pueden seguir otro pero el resultado debe ser el mismo:

- Día 1
  - Trabajar en la solución (codificación del algoritmo)
- Día 2
  - Agregar ESLINT
  - Resolver problemas identificados por el linter
  - Continuar codificando / re-factorizando el algoritmo
- Día 3
  - Agregar pruebas unitarias utilizando Jest
  - Continuar codificando / re-factorizando el algoritmo
- Día 4
  - Agregar por lo menos 2 analizadores de código estáticos como CodeClimate, Codacy, CodeCov o similares
  - Resolver los problemas identificados por los analizadores de código hasta obtener la calificación máxima
  - Terminar la solución (codificación) del algoritmo

## Requerimientos funcionales

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Coding Challenge is about calculating the next generation of Conway’s game of life, given any starting position.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

### Clues
The input starting position could be a text file that looks like this:
```
Generation 1:
4 8
........
....*...
...**...
........
```
And the output could look like this:
```
Generation 2:
4 8
........
...**...
...**...
........
```
## Recursos

- Javascript
  - [Learn Javascript - Interactive tutorial](https://www.learn-js.org/)
  - [Learn JavaScript (Step-By-Step)](https://learnjavascript.online/)
  - [JavaScript Garden](https://bonsaiden.github.io/JavaScript-Garden/)
  - [Eloquent JavaScript](https://eloquentjavascript.net/)
  - [Try JavaScript](https://www.javascript.com/try)
  - [JavaScript (ES2015+) Enlightenment](https://frontendmasters.com/books/javascript-enlightenment/)
  - [JavaScript Fundamentals for ES6](https://www.pluralsight.com/courses/javascript-fundamentals-es6)
- Programación orientada a objetos
  - - [An intro to object-oriented programming in JavaScript: objects, prototypes, and classes](https://www.freecodecamp.org/news/an-intro-to-object-oriented-programming-in-javascript-objects-prototypes-and-classes-5d135e7361b1/)
  - [JavaScript — Principios SOLID](https://medium.com/@mauriciogc/javascript-principios-solid-e93a17e950bb)
- ESLINT
  - [Documentación](https://eslint.org/)
- Desarrollo basado en pruebas
  - [The Absolute Beginner’s Guide to Test Driven Development, with a Practical Example](https://medium.com/@bethqiang/the-absolute-beginners-guide-to-test-driven-development-with-a-practical-example-c39e73a11631) 
  - [Learn Test Driven Development (TDD)](https://github.com/dwyl/learn-tdd)
  - [Fundamentals of TDD](https://thoughtbot.com/upcase/fundamentals-of-tdd)
  - [Getting Started](https://jestjs.io/docs/en/getting-started)
  - [Getting Started With Jest](https://www.valentinog.com/blog/jest/) 
  - [Testing JavaScript with Jest](https://flaviocopes.com/jest/)
- Analizadores de código estático
  - [CodeClimate](https://codeclimate.com/)
  - [Codacy](https://www.codacy.com/)
  - [CodeCov](https://about.codecov.io/)
