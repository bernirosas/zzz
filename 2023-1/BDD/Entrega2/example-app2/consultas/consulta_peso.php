<?php include('../templates/header.html'); ?>

<body>
  <?php
  require("../config/conexion.php");

  $fecha = $_POST["fecha"];
  $patente = $_POST["vehiculo"];
  
  $query = "SELECT SUM(cj.peso * cp.cantidad) AS peso_total
            FROM Despachos AS d
            JOIN Repartidores AS r ON d.rut = r.rut
            JOIN Vehiculos AS v ON r.id_vehiculo = v.id_vehiculo
            JOIN Compra_productos AS cp ON d.id_compra = cp.id_compra
            JOIN Cajas AS cj ON cp.id_producto = cj.id_producto
            WHERE d.fecha_entrega = :fecha AND LOWER(v.patente) = LOWER(:patente);";
  
  $result = $db->prepare($query);
  $result->bindParam(':fecha', $fecha);
  $result->bindParam(':patente', $patente);
  $result->execute();
  $dataCollected = $result->fetchAll();

  ?>
 <div class="container">
  <table class="table">
    <tr>
      <th>Peso</th>
    </tr>
    <?php
    foreach ($dataCollected as $p) {
      echo "<tr> <td>$p[0]</td></tr>";
    }
    ?>
  </table>
  </div>
  <?php include('../templates/footer.html'); ?>

