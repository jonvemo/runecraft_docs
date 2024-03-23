---
description: >-
  ​**Survival RPG** es la modalidad de nuestro servidor que se divide en Ciudades. Cada ciudad, es un Towny

  En caso de que seas parte de un Towny, dependiendo el rango que tengas en la misma, tendrás acceso a más o a menos comandos. Los comandos de Town funcionan para todo tipo de Town, sus variantes dependen siempre de la cantidad de residentes que tenga
---
## Survival RPG

### Variantes del Town

<table>
<!-- ! Caption no es Reconocido por GitBook -->
  <caption>Variantes del Town</caption>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Residentes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Campametento</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Asentamiento</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Tribu</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Villa</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Ciudad Pequeña</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Ciudad</td>
      <td>35</td>
    </tr>
    <tr>
      <td>Ciudad Grande</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Metrópolis</td>
      <td>80</td>
    </tr>
  </tbody>
</table>

### Comandos de Towny

Todos los comonados con prefix 'town'
<table>
<!-- ! Caption no es Reconocido por GitBook -->
  <caption>Comandos</caption>
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Argumento</th>
      <th>Value</th>
      <th>Detalles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/town</td>
      <td>new</td>
      <td>string</td>
      <td>Tiene un valor de 7500 monedas</td>
    </tr>
    <tr>
      <td>/town</td>
      <td>claim</td>
      <td></td>
      <td>Reclama un chunk como parte de tu town. Es posible verlos con F3 + G</td>
      <!-- TODO Estaría bien mejorar el plugin para que muestre la zona reclamada -->
    </tr>
    <tr>
      <td>/town</td>
      <td>set homeblock</td>
      <td></td>
      <td>Crea el spawn de tu Town</td>
    </tr>
    <tr>
      <td>/town</td>
      <td>deposit</td>
      <td>number</td>
      <td>Deposita dinero en la cuenta de la ciudad, necesario para mantener la protección de la misma</td>
    </tr>
    <tr>
      <td>/town</td>
      <td>whithdraw</td>
      <td>number</td>
      <td>Retira dinero depositado en la cuenta de la ciudad<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>delete</td>
      <td></td>
      <td>Destruye la ciudad<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>toggle public</td>
      <td>on / off</td>
      <td>Permite a las personas teletransportarse a tu ciudad<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>set mapcolor</td>
      <td>on / off</td>
      <td>Establece el color de la ciudad en el mapa<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>invite nick</td>
      <td>string</td>
      <td>Invita un jugagador a la Town<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>forsale</td>
      <td>number</td>
      <td>Estable un precio de venta de un chunk a los residentes<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>notforsale</td>
      <td>number</td>
      <td>Retira la venta de un chunk<td>
    </tr>
    <tr>
      <td>/town</td>
      <td>claim outpost</td>
      <td></td>
      <td>Reclama un chunk separado de la ciudad<td>
    </tr>
  </tbody>
</table>


### Permisos Básico y cómo modificarlos

Con el TOWN está recién creado, los permisos de cada habitante serán estándar. En un inicio los habitantes tendrán los cuatro permisos principales activados en todos los chunks que formen parte de tu TOWN, sin importar su rango o si algún chunk está disponible para comprar (para vivir allí, por ejemplo). Los cuatro permisos son:

Build ( Construir), Destroy (Destruir), Switch (Interactuar, o sacar y poner cosas de cofres, etc) como lo puede ser con puertas, botones, mesas de cartografía, pistones, shulkers, cofres , ItemUse (Usar tiems) como esquilar ovejas, reproducir animales, tirar pociones, huevos, perlas de ender, poner lava, etc. Todos los chunks se configuran individualmente.

Puedes chequear estos permisos con **/town**.

Para modificarlos se pondrá:

**/Plot set perm “categoría” Build/switch/destroy/itemuse** **on/off**

En donde dice **“categoría**” podremos **resident** , que sería residente. y en donde dice **Build/switch/destroy/itemuse** deberemos colocar solo una de las cuatro opciones, al igual que **on** **off** , solo se debe elegir una. afirmativa (**on**) o negativa (**off**).

\
**Ejemplos:**

**/Plot set perm resident Build on** : para que los residentes tengan permiso a construir en ese chunk.Más ejemplos aquí

**/t set perm on/off**: Para sacar o poner permisos a TODAS las categorías en TODAS las areas. Comando habilitado para la TOWNY (no es necesario ponerlo chunk por chunk) y solo válido para alcaldes.

### Roles del Town

**Resident:** (Residente) Personas que pertenecen a la ciudad.

**Outsider**: (Extranjero) Persona que NO pertenece a la ciudad.

**Ally:** (Aliados) Personas dentro de una nation. (Nation es cuando dos Towns o más se unen para hacer una alianza)

**Friends:** (Amigos). Esta categoría se usa POR PERSONA (no como el resto) y sirve para agregar personas a tus plots. 

{% hint style="danger" %}
**Advertencia:** si le otorgas este permiso a un usuario, no tendrá permiso únicamente en el plot en el que estás parado. Tendrá permisos en TODAS tus plots (chunks)
{% endhint %}
