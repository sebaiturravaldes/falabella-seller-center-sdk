# Falabella Seller Center SDK JavaScript

Este repositorio contiene una implementación de la [API de Falabella Seller Center](https://developers.falabella.com/) para ser usada con JavaScript

## Instalación

Con Npm

```cli
npm install --save falabella-seller-center-sdk
```

Con Yarn

```cli
yarn add falabella-seller-center-sdk
```

## Uso

### Intanciando la clase principal

Para instanciar esta clase, necesitarás de dos parámetros obligatorios `apiKey` y `userId`, ambos los obtienes de tu cuenta en [Falabella Seller Center](https://sellercenter.falabella.com/api-explorer) en la sección de **Mi Cuenta/Integraciones**

```js
import FalabellaSellerCenter from 'falabella-seller-center-sdk'

const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const userId = 'me@email.com'
const falabellaSellerCenter = new FalabellaSellerCenter(apiKey, userId)
```

### Acción

Dependiende del método (get o post) de la acción es cómo debes utilizar el SDK, por ejemplo si es un método post, debes utilizarlo de la siguiente manera:

```js
falabellaSellerCenter.sdk.post('action')
```

En cambio si es un método get:

```js
falabellaSellerCenter.sdk.get('action')
```

#### Ejemplo Obteniendo los productos

```js
const products = await falabellaSellerCenter.sdk.get('GetProducts')
console.log('products', products.data)
```

#### Ejemplo Creando un producto

```js
const createProduct = await falabellaSellerCenter.sdk.post(
  'ProductCreate',
  `<?xml version="1.0" encoding="UTF-8" ?>
<Request>
  <Product>
    <SellerSku>41053821734</SellerSku>
    <ParentSku/>
    <Name>Magic Product</Name>
    <PrimaryCategory>1687</PrimaryCategory>
    <Description>product description</Description>
    <Color>Negro</Color>
    <Brand>Bandai</Brand>
    <ShipmentType>dropshipping</ShipmentType>
    <ProductId>1</ProductId>
    <Condition>new</Condition>
    <Variation>64GB</Variation>
    <ProductData>
      <PackageWeight>100</PackageWeight>
      <PackageWidth>200</PackageWidth>
      <PackageLength>300</PackageLength>
      <PackageHeight>400</PackageHeight>
      <Genero>Hombre</Genero>
      <ConditionType>Nuevo</ConditionType>
      <PiezasPequenas>Sí</PiezasPequenas>
      <GrupoDeEdad>Todas las etapas</GrupoDeEdad>
      <Material>Plástico</Material>
    </ProductData>
    <BusinessUnits>
        <BusinessUnit>
            <OperatorCode>facl</OperatorCode>
            <Price>19999.00</Price>
            <SpecialPrice/>
            <SpecialFromDate/>
            <SpecialToDate/>
            <Stock>10</Stock>
            <Status>active</Status>
        </BusinessUnit>
    </BusinessUnits>
  </Product>
</Request>`
)
console.log('createProduct', createProduct.data)
```

### Acciones disponibles en la API de Falabella Seller Center

La documentación donde encontrarás todas las acciones disponibles: https://developers.falabella.com/
