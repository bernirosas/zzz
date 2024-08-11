<?php include('../templates/header.html'); ?>

<body>

<?php
  #Llama a conexión, crea el objeto PDO y obtiene la variable $db
  require("../config/conexion.php");

  $fecha = $_POST["fecha_elegida"];
?>
 <div class="container">
<table class="table">
  <tr>
    <th>Nombre cliente</th>
    <th>Calle cliente</th>
    <th>Número domicilio</th>
    <th>Comuna</th>
    <th>Región</th>
  </tr>

<?php
  $query = "SELECT c.nombre AS nombre_cliente, d.calle, d.numero_domicilio, Comunas.nombre AS Comuna, Regiones.nombre AS Region
  FROM Despachos AS de
  JOIN Compras AS cp ON de.id_compra = cp.id_compra
  JOIN Clientes AS c ON cp.id_cliente = c.id_cliente
  JOIN Direcciones AS d ON c.id_direccion = d.id_direccion
  JOIN Comunas ON Comunas.id_comuna = d.id_comuna
  JOIN Regiones ON Comunas.id_region = Regiones.id_region
  WHERE de.fecha_entrega = :fecha;";

$result = $db->prepare($query);
$result->bindParam(':fecha', $fecha);
$result->execute();
$clientes = $result->fetchAll();

  foreach ($clientes as $cliente) {
    echo "<tr>
      <td>$cliente[0]</td>
      <td>$cliente[1]</td>
      <td>$cliente[2]</td>
      <td>$cliente[3]</td>
      <td>$cliente[4]</td>
    </tr>";
  }
?>
</table>
</div>
<?php include('../templates/footer.html'); ?>

