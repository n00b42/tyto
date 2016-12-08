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

if($_SERVER['REQUEST_METHOD'] == "GET" && isset($_GET['boardId'])){
  $sql = "SELECT * FROM columns WHERE boardId = :boardId";
  $query = $db->prepare($sql);
  $query->execute( [":boardId"=>$_GET['boardId']] );
  echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));
} elseif($_SERVER['REQUEST_METHOD'] == "GET"){
  echo json_encode([]);
}

if($_SERVER['REQUEST_METHOD'] == "POST"){
  $sql = "INSERT INTO `columns` (id, boardId, title, ordinal) values ((SELECT LAST_INSERT_ID(IFNULL(MAX(c.id)+1,1)) FROM `columns` AS c WHERE c.boardId = :boardId), :boardId, :title, :ordinal)";
  $query = $db->prepare($sql);
  $query->execute( [":boardId"=>$data->boardId, ":title"=>$data->title, ":ordinal"=>$data->ordinal] );
  $result['id'] = $db->lastInsertId();
  echo json_encode($result);
}

if ($_SERVER['REQUEST_METHOD'] == "PUT"){
  $sql = "UPDATE columns SET title = :title, ordinal = :ordinal WHERE boardId = :boardId AND id = :id";
  $query = $db->prepare($sql);
  $query->execute( [":title"=>$data->title, ":ordinal"=>$data->ordinal, ":boardId"=>$data->boardId, ":id"=>$data->id] );
}
 
if ($_SERVER['REQUEST_METHOD'] == "DELETE" && isset($_GET['boardId']) && isset($_GET['id'])){
 $sql = "DELETE FROM columns WHERE boardId = :boardId AND id = :id";
 $query = $db->prepare($sql);
 $query->execute( [":boardId"=>$_GET['boardId'],":id"=>$_GET['id']] );
}

?>