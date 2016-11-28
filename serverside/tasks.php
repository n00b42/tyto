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
  $sql = "SELECT * FROM tasks WHERE boardId = :boardId";
  $query = $db->prepare($sql);
  $query->execute( [":boardId"=>$_GET['boardId']] );
  $results = $query->fetchAll(PDO::FETCH_ASSOC);
  foreach($results as $k=>$v) { $results[$k]['timeSpent'] = unserialize($results[$k]['timeSpent']); }
  echo json_encode($results);
} elseif($_SERVER['REQUEST_METHOD'] == "GET"){
  echo json_encode([]);
}

if($_SERVER['REQUEST_METHOD'] == "POST"){
  $sql = "INSERT INTO tasks (id, boardId, columnId, title, description, ordinal, color, timeSpent) values ((SELECT LAST_INSERT_ID(IFNULL(MAX(tk.id)+1,1)) FROM tasks AS tk WHERE tk.boardId = :boardId), :boardId, :columnId, :title, :description, :ordinal, :color, :timeSpent)";
  $query = $db->prepare($sql);
  $query->execute( [":boardId"=>$data->boardId, ":columnId"=>$data->columnId, ":title"=>$data->title, ":description"=>$data->description, ":ordinal"=>$data->ordinal, ":color"=>$data->color, ":timeSpent"=>serialize($data->timeSpent)] );
  $result['id'] = $db->lastInsertId();
  echo json_encode($result);
}

if ($_SERVER['REQUEST_METHOD'] == "PUT"){
  $sql = "UPDATE tasks SET boardId = :boardId, columnId = :columnId, title = :title, description = :description, ordinal = :ordinal, color = :color, timeSpent = :timeSpent WHERE id = :id";
  $query = $db->prepare($sql);
  $query->execute( [":boardId"=>$data->boardId, ":columnId"=>$data->columnId, ":title"=>$data->title, ":description"=>$data->description, ":ordinal"=>$data->ordinal, ":color"=>$data->color, ":timeSpent"=>serialize($data->timeSpent), ":id"=>$data->id] );
}
 
if ($_SERVER['REQUEST_METHOD'] == "DELETE"){
 $sql = "DELETE FROM tasks WHERE id = :id";
 $query = $db->prepare($sql);
 $query->execute( [":id"=>$_GET['id']] );
}

?>
