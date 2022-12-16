![BrightCoders Logo](img/logo.png)

# El Juego de la vida

## Tabla de contenidos

- [Descripción](#Descripción)
  - [Pistas](#Pistas)
- [Uso](#Uso)
  - [Instalar dependencias](#Instalar-dependencias)
  - [Ejecutar](#Ejecutar)
  - [Pruebas](#Pruebas)
- [Créditos](#Créditos)
- [Insignias](#Insignias)

This README would normally document whatever steps are necessary to get the application up and running.

Things you may want to cover:

- Title or Project Name
- Table of contents
- Description. A brief description of what the project is about
- How to Install and Run the Project.
- How to Use the Project.
- Credits
- Badges

## Descripción

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Coding Challenge is about calculating the next generation of Conway’s game of life, given any starting position.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

### Pistas

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

## Uso

### Instalar dependencias

```
npm install
```

### Ejecutar

```
npm start <rows> <cols> <generations> <aliveChanceOnSpawn> <fps>
```

- `<aliveChanceOnSpawn>` Probabilidad de que una célula esté viva al nacer (se recomienda utilizar valores entre 0.0 y 1 únicamente). (Valor por defecto: 0.5)
- `<cols>` Número de columnas de la matriz de células. (Valor por defecto: 10)
- `<fps>` Fotogramas por segundo. (Valor por defecto: 10)
- `<rows>` Número de filas de la matriz de células. (Valor por defecto: 10)
- `<generations>` Número de generaciones a simula (utilizar 0 hará que este sea infinito). (Valor por defecto: ∞)

_Nota: Todos los parametros son opcionales, por lo que es posible ejecutar `npm start` sin ningún parametro_

Ejemplo con parametros personalizados:

```
npm start 20 10 50 0.4 30
```

### Pruebas

```
npm test
```

## Insignias

| Analizador de código | Estado                                                                                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Codacy               | [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dd5dcbca46b0455ea42dcb907b6e0302)](https://www.codacy.com/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team4/dashboard?utm_source=github.com&utm_medium=referral&utm_content=BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team4&utm_campaign=Badge_Grade) |
| CodeCov              | [![CodeCov Badge](https://codecov.io/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team4/branch/master/graph/badge.svg?token=E5FK4NZDE1)](https://codecov.io/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team4)                                                                                                    |

## Créditos

- [@IvanGodinez21](https://github.com/IvanGodinez21)
- [@McFly1208](https://github.com/McFly1208)
- [@HenrikhWolf](https://github.com/HenrikhWolf)
- [@KoderGoq](https://github.com/KoderGoq)

#
