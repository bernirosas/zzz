<?php include('../templates/header.html');   ?>

<body>

  <?php
  require("../config/conexion.php"); #Llama a conexión, crea el objeto PDO y obtiene la variable $db

  $id = $_POST["id"];
  $query = "SELECT c.id_compra, SUM(cp.cantidad) AS numero_productos, SUM(p.numero_cajas * cp.cantidad) AS numero_cajas
  FROM Compras AS c
  JOIN Compra_productos AS cp ON c.id_compra = cp.id_compra
  JOIN Productos AS p ON cp.id_producto = p.id_producto
  WHERE c.id_cliente = $id
  GROUP BY c.id_compra;";
  $result = $db -> prepare($query);
  $result -> execute();
  $dataCollected = $result -> fetchAll(); #Obtiene todos los resultados de la consulta en forma de un arreglo
  ?>
 <div class="container">
  <table class="table">
    <tr>
      <th>Compra</th>
      <th>Cantidad productos comprados</th>
      <th>Cajas necesarias</th>
    </tr>
  <?php
  foreach ($dataCollected as $p) {
    echo "<tr> <td>$p[0]</td> <td>$p[1]</td><td>$p[2]</td> </tr>";};
  ?>
  </table>
  </div>
<?php include('../templates/footer.html'); ?>
