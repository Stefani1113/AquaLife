# AquaLife 

## Descripción

AquaLife es una aplicación móvil desarrollada con React Native y Expo que ayuda a los usuarios a llevar un control sencillo de su consumo diario de agua. La aplicación permite registrar la cantidad de agua ingerida, visualizar el progreso respecto a una meta diaria y modificar dicha meta según las necesidades del usuario.


# Problema

Muchas personas olvidan hidratarse adecuadamente durante el día, lo que puede afectar su bienestar y rendimiento en las actividades diarias. En la mayoría de los casos no existe un control simple sobre la cantidad de agua consumida.


# Justificación

AquaLife busca brindar una solución sencilla e intuitiva para registrar el consumo diario de agua, permitiendo al usuario visualizar su progreso de manera gráfica y establecer una meta personalizada de hidratación.

La aplicación fue desarrollada como proyecto académico utilizando React Native, aplicando componentes reutilizables, navegación entre pantallas, manejo de estado mediante Hooks y almacenamiento local.

# Tecnologías utilizadas

- React Native
- Expo
- React Navigation
- AsyncStorage
- JavaScript


# Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js 20 o superior
- npm
- Expo CLI (incluido mediante npx)

También se recomienda tener instalado:

- Visual Studio Code
- Expo Go (Android)


# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/Stefani1113/AquaLife.git
```

## 2. Entrar al proyecto

```bash
cd AquaLife
```

## 3. Instalar dependencias

```bash
npm install
```


# Ejecutar el proyecto

## Aplicación web

```bash
npm run web
```


## Ejecutar en Expo Go

```bash
npm start
```

Posteriormente escanear el código QR desde la aplicación Expo Go.


# Estructura del proyecto

```
src/
│
├── components/
├── constants/
├── context/
├── navigation/
├── screens/
├── services/
└── styles/
```


# Funcionalidades

- Registro del consumo de agua.
- Visualización del progreso diario.
- Barra de progreso.
- Configuración de meta personalizada.
- Historial de consumo.
- Persistencia de datos mediante AsyncStorage.
el