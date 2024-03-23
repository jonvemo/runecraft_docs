---
description: >-
  ¿Qué aprenderás?
---

# Primeros Pasos con Towny

1. **<a href="#town_commands">Crear un Towny de cero</a>**
2. **<a href="#town_permissions">Permisos básicos y cómo modificarlos</a>**
3. **<a href="#town_roles">Categorías por Rol</a>**

## Survival RPG

​**Survival RPG** es la modalidad de nuestro servidor que se divide en Ciudades. Cada ciudad, es un Towny (puede variar)

En caso de que seas parte de un Towny, dependiendo el rango que tengas en la misma tendrás acceso a más o a menos comandos. Los comandos de Town funcionan para todo tipo de Town, sus variantes dependen siempre de la cantidad de residentes que tenga

<table id="town_variants">
  <caption>Variantes del Town</caption>
  <colgroup>
  	<col style="width: 90%;">
    <col style="width: 10%;">	
  </colgroup>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Residentes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Campametento</td>
      <td class="text-center">1</td>
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

<h3 id="town_commands">Comandos de Towny</h3>

**Todos los comandos que sean “/town \[...]” pueden simplificarse con “ /t \[...] “ en su lugar.**

**/town new “nombre de la ciudad ”**: creas una ciudad con el nombre elegido (Costo $7500)

**/town claim:** Para reclamar un chunk como parte de tu TOWN. (Para ver un chunk pulsar F3 + G), según vayas comprando más chunks el precio irá subiendo.

**/town set homeblock**: establece el bloque home de tu ciudad (necesario para designar un spawn de ciudad)

**/town deposit “#####”**: Depositas la cantidad de dinero indicada a la ciudad.

**/town whithdraw “#####”**: sacas el dinero indicado de tu ciudad.

**/town delete**: eliminas la ciudad (rango requerido alcalde o subalcalde)

**/town toggle public on/off**: Haces la town pública o privada. (Esto hará que la gente pueda tepearse a su SPAWN (si está pública) o enviarte una solicitud para unirse a ella. (si está pública))

**/town set mapcolor**: establece el color de tu ciudad en el mapa

**/town invite “nick**”: invitas al jugador indicado a tu town. (Recuerda que él debe aceptar con /aceptar)

**/plot forsale “####”**: Pones un chunk (en el que estés parado en ese momento) a la venta para que tus habitantes puedan comprarlo y vivir allí.

**/plot notforsale**: El chunk en el que estás parado dejará de estar a la venta para vivir.

**/town claim outpost**: claimea un outpost separado de tu ciudad

<h3 id="town_permissions">Permisos Básico y cómo modificarlos</h3>

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

<h3 id="town_roles">Roles del Town</h3>

**Resident:** (Residente) Personas que pertenecen a la ciudad.

**Outsider**: (Extranjero) Persona que NO pertenece a la ciudad.

**Ally:** (Aliados) Personas dentro de una nation. (Nation es cuando dos Towns o más se unen para hacer una alianza)

**Friends:** (Amigos). Esta categoría se usa POR PERSONA (no como el resto) y sirve para agregar personas a tus plots. 

{% hint style="danger" %}
**Advertencia:** si le otorgas este permiso a un usuario, no tendrá permiso únicamente en el plot en el que estás parado. Tendrá permisos en TODAS tus plots (chunks)
{% endhint %}
