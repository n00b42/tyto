<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
	exit('API connection ok');
}

$db = new PDO("mysql:host=localhost;dbname=todo", "todo", "eEudETEzZT8GRGxp");
$data = json_decode(file_get_contents('php://input'));

if($_SERVER['REQUEST_METHOD'] == "GET" && isset($_GET['id'])){
  $sql = "SELECT * FROM boards WHERE id = :id";
  $query = $db->prepare($sql);
  $query->execute( [":id"=>$_GET['id']] );
  $result = $query->fetch(PDO::FETCH_ASSOC);
  if($result === false) { header($_SERVER['SERVER_PROTOCOL'].' 404 Not Found'); exit('404 Not Found'); }
  echo json_encode($result);
} elseif($_SERVER['REQUEST_METHOD'] == "GET"){
  echo json_encode([]);
}

if($_SERVER['REQUEST_METHOD'] == "POST"){
  $sql = "INSERT INTO boards (id, title) values (:id, :title)";
  $query = $db->prepare($sql);
  $query->execute( [":id"=>$data->id, ":title"=>$data->title] );
  echo json_encode((object)[]);
}

if ($_SERVER['REQUEST_METHOD'] == "PUT"){
  $sql = "UPDATE boards SET title = :title WHERE id = :id";
  $query = $db->prepare($sql);
  $query->execute( [":title"=>$data->title, ":id"=>$data->id] );
}
 
if ($_SERVER['REQUEST_METHOD'] == "DELETE"){
 $sql = "DELETE FROM boards WHERE id = :id";
 $query = $db->prepare($sql);
 $query->execute( [":id"=>$_GET['id']] );
}

?>
