

<body>

 <div>
 <?php include('templates/header.html');   ?>
 <br>
 <div class="container">

 <h3 align="center"> ¿Quieres saber todos los clientes que tienen un despacho programado para cierta fecha? 
</h3>

 <form align="center" action="consultas/consulta_fecha.php" method="post">
   Fecha
   <input type="date" name="fecha_elegida" class="text-input">
   <br/>
   <br>
   <input type="submit" value="Buscar" class="button">
 </form>
 </div>




 <br>
 <br>
 <br>
 <div class="container">

 <h3 align="center"> ¿Quieres buscar una compra por su ID?</h3>


 <form align="center" action="consultas/consulta_id.php" method="post">
 ID Compra:
   <input type="text" name="id_elegido" class="text-input">
   <br>
   <br>
   <input type="submit" value="Buscar" class="button">
 </form>
 </div>
  <br>
 <br>
 <br>

 <div class="container">
 <h3 align="center"> ¿Quieres saber cuántas cajas necesita tu compra? Ingresa su ID</h3>


 <form align="center" action="consultas/consulta_cajas.php" method="post">
   ID Compra:
   <input type="text" name="id" class="text-input">
   <br/><br/>
   <input type="submit" value="Buscar" class="button">
 </form>
 </div>
 <br>
 <br>
 <br>

 <div class="container">
 <h3 align="center"> ¿Quieres saber cuánto pesan los despachos para cierto vehículo en cierta fecha? Ingresa una fecha y patente.</h3>


 <form align="center" action="consultas/consulta_peso.php" method="post">
   Fecha:
   <input type="date" name="fecha" class="text-input">
   <br/><br/>
   Patente:
   <input type="text" name="vehiculo">
   <br/><br/>
   <input type="submit" value="Buscar" class="button">
 </form>
 </div>
 <br>
 <br>
 <br>






 <div class="container">
 <h3 align="center">  ¿Quieres saber el número total de repartidores de cada género trabajando en una región y su edad promedio? Seleccione una región</h3>
 <form align="center" action="consultas/consulta_region.php" method="post">
 <?php
 #Primero obtenemos todos los tipos de pokemones
 require("config/conexion.php");
 $result = $db -> prepare("SELECT id_region, nombre FROM Regiones;");
 $result -> execute();
 $data = $result -> fetchAll();
 ?>
   <select name="region" class="dropdown">
     <?php
     #Para cada tipo agregamos el tag <option value=value_of_param> visible_value </option>
     foreach ($data as $d) {
       echo "<option value=$d[0]>$d[1]</option>";
     }
     ?>
   </select>
   <br><br>
   <input type="submit" value="Buscar por región" class="button">
 </form>

 </div>

 <br>
 <br>
 <br>


 <div class="container">
 <h3 align="center"> ¿Quieres saber todas las compras realizada por este cliente? Ingresa su ID</h3>


 <form align="center" action="consultas/consulta_compras_clientes.php" method="post">
   ID Cliente:
   <input type="text" name="id" class="text-input">
   <br/><br/>
   <input type="submit" value="Buscar" class="button">
 </form>
 </div>
 <br>
 <br>
 <br>


 <div class="container">
 <h3 align="center"> ¿Quieres saber quiénes fueron los cinco clientes que gastaron la mayor cantidad de plata en todas sus compras en cierta región? Elija una región</h3>
 <form align="center" action="consultas/consulta_mas_compras_region.php" method="post">
 <?php
 #Primero obtenemos todos los tipos de pokemones
 require("config/conexion.php");
 $result = $db -> prepare("SELECT DISTINCT id_region, nombre FROM Regiones;");
 $result -> execute();
 $data = $result -> fetchAll();
 ?>
   <select name="region" class="dropdown">
     Región
     <?php
     #Para cada tipo agregamos el tag <option value=value_of_param> visible_value </option>
     foreach ($data as $d) {
       echo "<option value=$d[0]>$d[1]</option>";
     }
     ?>
   </select>
   <br><br>
   <input type="submit" value="Buscar por región" class="button">
 </form>
 </div>
 <br>
 <br>
 <br>
 <br>

 </div>
 <div>
</body>
</html>