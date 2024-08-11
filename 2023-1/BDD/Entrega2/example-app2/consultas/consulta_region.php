<?php include('../templates/header.html');   ?>

<body>

  <?php
  require("../config/conexion.php"); #Llama a conexión, crea el objeto PDO y obtiene la variable $db

  $id = $_POST["region"];
  
  $query = "SELECT r.genero, COUNT(*) AS total_repartidores, AVG(r.edad) AS edad_promedio
  FROM Repartidores AS r
  JOIN Despachos AS d ON d.rut = r.rut
  JOIN Compras AS c ON d.id_compra = c.id_compra
  JOIN Clientes AS cl ON c.id_cliente = cl.id_cliente
  JOIN Direcciones AS dir ON cl.id_direccion = dir.id_direccion
  JOIN Comunas AS cm ON dir.id_comuna = cm.id_comuna
  JOIN Regiones AS reg ON cm.id_region = reg.id_region
  WHERE reg.id_region = $id
  GROUP BY r.genero";

  $result = $db->prepare($query);
  $result->execute();
  $dataCollected = $result->fetchAll(); #Obtiene todos los resultados de la consulta en forma de un arreglo
  ?>
   <div class="container">
  <table class="table">
    <tr>
      <th>Género</th>
      <th>Número de repartidores</th>
      <th>Edad promedio</th>
    </tr>
  <?php
  foreach ($dataCollected as $cliente) {
    echo "<tr> <td>$cliente[0]</td> <td>$cliente[1]</td><td>$cliente[2]</td>  </tr>";
  }
  ?>
  </table>
</div>
<?php include('../templates/footer.html'); ?>

