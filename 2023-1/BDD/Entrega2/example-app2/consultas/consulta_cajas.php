<?php include('../templates/header.html');   ?>

<body>
<?php
  #Llama a conexión, crea el objeto PDO y obtiene la variable $db
  require("../config/conexion.php");

  $id = $_POST["id"];
  $query = "SELECT SUM(p.numero_cajas * cp.cantidad) AS total_cajas
  FROM Compra_productos AS cp
  JOIN Productos AS p ON cp.id_producto = p.id_producto
  WHERE cp.id_compra = $id;";
	$result = $db -> prepare($query);
	$result -> execute();
	$pokemones = $result -> fetchAll();

  ?>
 <div class="container">
	<table class="table">
    <tr>
      <th>Número cajas de la compra
      </th>
    </tr>
  <?php
	foreach ($pokemones as $pokemon) {
  		echo "<tr><td>$pokemon[0]</td></tr>";
	}
  ?>
	</table>
</div>
<?php include('../templates/footer.html'); ?>
