<?php include('../templates/header.html');   ?>

<body>
<?php
  require("../config/conexion.php");

  $id = $_POST["region"];
  $query = "SELECT c.id_cliente, c.nombre, SUM(co.valor) AS total_gastado
  FROM Clientes AS c
  JOIN Compras AS co ON c.id_cliente = co.id_cliente
  JOIN Direcciones AS d ON c.id_direccion = d.id_direccion
  JOIN Comunas AS cm ON d.id_comuna = cm.id_comuna
  JOIN Regiones AS r ON cm.id_region = r.id_region
  WHERE r.id_region = $id
  GROUP BY c.id_cliente
  ORDER BY total_gastado DESC
  LIMIT 5";

  $result = $db->prepare($query);
  $result->execute();
  $pokemones = $result->fetchAll();
?>
 <div class="container">
<table class="table">
  <tr>
    <th>Id cliente</th>
    <th>Nombre</th>
    <th>Total gastado</th>
  </tr>
<?php
foreach ($pokemones as $cliente) {
  echo "<tr> <td>$cliente[0]</td> <td>$cliente[1]</td><td>$cliente[2]</td> </tr>";
}
?>
</table>
</div>
<?php include('../templates/footer.html'); ?>

