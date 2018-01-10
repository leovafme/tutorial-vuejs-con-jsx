Reciente mente utilizando la librería element-ui me encontré con la necesidad de utilizar JSX en vuejs cosa que solo había visto implementada en React, cabe aclarar que JSX es un extensión para JavaScript que permite XML dentro de nuestro javascript. Ahora trabajar con JSX es opcional y brinda ventajas dependiendo de cómo lo vayas a utilizar y que hagas con el, aqui un tutorial de cómo implementarlo en un proyecto con VueJs y ejemplos básicos de cómo usarlo

-Requerimientos
* Usar Webpack
* Tener previamente un proyecto creado en Vuejs para poder instalar y probar

-Primero hay que instalar las dependencias para transpilar nuestro jsx

```
npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-preset-env --save-dev
```

-Una vez instalado las dependencias agregamos el pluging a babel en el archivo .babelrc debe quedar más o menos de la siguiente manera

```
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```

-Con esto ya podemos empezar a escribir nuestros scripts utilizando JSX vamos a ver los siguientes ejemplos de uso
-Dentro de la carpeta components creamos un archivo llamado ejemplo.js
![directorio](https://i.imgur.com/Et72go8.png)

-Escribimos un componente
```
export default {
    data() {
        return {
            esRojo: true
        }
    },

    /*
     * Equivale a
     * <template>
     *   <div :class="{'es-rojo': esRojo}">
     *     <p>Texto de Ejemplo</p>
     *   </div>
     * </template>
     */
    render(h) {
        return (
            <div class={{ 'es-rojo': this.esRojo }}>
                <p>Texto de Ejemplo</p>
            </div>
        )
    }
}
```
* Nota debe tener un css con la clase .es-rojo en alguna parte, en mi caso lo he puesto en el index.html
- En el index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>prueba_jsx</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
  <style>
    .es-rojo {
      color: red;
    }
  </style>
</html>
```

-Una vez echo lo anterior basta con importar y utilizar nuestro componente donde queramos en mi caso lo hare dentro de uno llamado HelloWorld.vue
```
import Ejemplo from './ejemplo'

export default {
  name: 'HelloWorld',
  components: { Ejemplo },
  ...
}
````

En el template del componente quedaría algo como
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Ejemplo/>
  </div>
</template>
```

Con lo anterior visto tendríamos un resultado como este
![resultado ejemplo 1](https://i.imgur.com/vYGyc0N.png)

Ahora con vamos a subir un poco el nivel y hacer una lista
```
function renderUnhealthyDrinkList (h, list) {
  return (
    <ul>
      {list.map(item => <li>{item}</li>)}
    </ul>
  )
}

export default {
  data() {
    return {
      unhealthyDrinks: [
        'Coffee',
        'All the sodas',
        'That stuff under the bag in the trashcan'
        // Hot chocolate is perfectly okay.
      ]
    }
  },

  render (h) {
    return (
      <div>
        {renderUnhealthyDrinkList(h, this.unhealthyDrinks)}
      </div>
    )
  }
}
```
Hacemos lo mismo en el anterior componente lo importamos y agregamos al template de nuestro componente HelloWorld, quedaria algo como esto:
```
import Ejemplo from './ejemplo'
import ListaDeFrutas from './lista'

export default {
  name: 'HelloWorld',
  components: { Ejemplo, ListaDeFrutas },
  ...
}
```
en el template tendríamos algo asi:
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Ejemplo/>
    <ListaDeFrutas/>
  </div>
</template>
```
El resultado:
![resultado ejemplo 2](https://i.imgur.com/DwWZ9M7.png)

Y si quisiéramos agregar un método?
```
export default {
    data() {
        return {
            esRojo: true,
            mensaje: 'Dame Click'
        }
    },
    methods: {
        saludar () {
            alert('Hola como que tal.')
        }
    },
    render(h) {
        return (
            <span class={{ 'es-rojo': this.esRojo }} on-click={ this.saludar } >
                { this.mensaje }
            </span>
        )
    }
}
```

Con el código anterior creamos un componente que tiene un span que al darle click llama al método saludar y este lanza una alerta.

Implementar JXS nos da algunas ventajas y depende si tenemos o no la necesidad de usarlo, si has trabajado previamente con ReactJs esto te sera pan comido y como todo un un gran poder conlleva una gran responsabilidad

![gran poder conlleva una gran responsabilidad](https://cdn-images-1.medium.com/max/800/1*NTFw-TuHtv2KbyXv_18UVg.jpeg)


[Codigo de muestra visto en el ejemplo](https://github.com/leovafme/tutorial-vuejs-con-jsx)