<?php include('../templates/header.html');   ?>

<body>
<?php
  #Llama a conexión, crea el objeto PDO y obtiene la variable $db
  require("../config/conexion.php");

  #Se obtiene el valor del input del usuario
  $id = $_POST["id_elegido"];

  #Se construye la consulta como un string
 	$query = "SELECT cl.nombre AS nombre_cliente, CONCAT(dir.calle, ' ', dir.numero_domicilio, ', ', com.nombre, ', ', reg.nombre) AS direccion, c.valor AS valor_compra
   FROM Compras AS c
   JOIN Clientes AS cl ON c.id_cliente = cl.id_cliente
   JOIN Direcciones AS dir ON cl.id_direccion = dir.id_direccion
   JOIN Comunas AS com ON dir.id_comuna = com.id_comuna
   JOIN Regiones AS reg ON com.id_region = reg.id_region
   WHERE c.id_compra = $id;";

  #Se prepara y ejecuta la consulta. Se obtienen TODOS los resultados
	$result = $db -> prepare($query);
	$result -> execute();
	$clientes = $result -> fetchAll();
  ?>
 <div class="container">
  <table class="table">
    <tr>
      <th>Nombre Cliente</th>
      <th>Dirección</th>
      <th>Valor compra</th>
    </tr>
  
      <?php
        // echo $pokemones;
        foreach ($clientes as $p) {
          echo "<tr><td>$p[0]</td><td>$p[1]</td><td>$p[2]</td></tr>";
      }
      ?>
      
  </table>
    </div>
<?php include('../templates/footer.html'); ?>
