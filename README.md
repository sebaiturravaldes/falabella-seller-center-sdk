# Falabella Seller Center SDK JavaScript

Este repositorio contiene una implementación de la API de Falabella Seller Center para ser usada con JavaScript

## Instalación

Con Npm

```cli
npm i falabella-seller-center-sdk
```

Con Yarn

```cli
yarn add falabella-seller-center-sdk
```

## Uso

```js
import FalabellaSellerCenter from 'falabella-seller-center-sdk'

const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const userId = 'me@email.com'
const falabellaSellerCenter = new FalabellaSellerCenter(apiKey, userId)

const products = await falabellaSellerCenter.sdk.get('GetProducts')
console.log('products', products.data)
```
