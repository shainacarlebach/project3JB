<?php 
require_once 'dal.php';

class BL{
private $tableName;
private $dal;
private $condition;
private $insertedobjects;
private $values;
private $column;
private $column_names;

function __construct(){ 
	$this->dal=new DAL();

} 
//create sql queries to run on database tables
//generic query get all data 
 public function getAllTable($tableName){
$alldata = $this->dal->getAll("SELECT * FROM `".$tableName."`");
return $alldata;
}

//generic query get data by id 
public function get_ID_DB($tableName,$idNum){
$idall=$this->dal->getAll("SELECT * FROM`".$tableName."` WHERE student_id=$idNum");
return $idall;

}

// checks rows deleted by id  
public function validate_row($tableName, $idNum) {
	$iddata =  $this->dal->checkRows("SELECT id FROM ".$tableName." WHERE id='$idNum'");
    if($iddata>0){
		return true;
	}
	else{
		return false;
	}
}

//query to create new rows in db table
public function Insert($tableName, $column,$values,$insertedobjects){
	 $query="INSERT INTO ".$tableName."(".$column.") VALUES (".$values.")";
	 $newRows=$this->dal->insertData($query, $insertedobjects);
return $newRows;	
	}
//generic query to get last id of all rows to insert new row
	public function lastInsertedId($tableName){
	$lastID=$this->dal->query("SELECT * FROM ".$tableName." ORDER BY ID DESC LIMIT 1");
	return $lastID;
}

//generic query to update data
public function updateData($tableName,$values,$idNum){
	$update=$this->dal->query("UPDATE `".$tableName."` SET ".$values."WHERE id='$idNum' ");
	return $update;
}
//generic query to delete data
 public function deleteData($tableName,$idNum) {
	$remove=$this->dal->query("DELETE FROM`".$tableName."`WHERE id='$idNum' ");
	return $remove;
}
//generic query to join 2 tables
public function innerJoin($table1,$table2,$idNum){
	$join=$this->dal->getAll("SELECT * FROM ".$table1." INNER JOIN ".$table2." ON ".$table1.$idnum."=".$table2.$idNum."");
	return $join;    
}
 
//generic query to join 3 tables	
public function jointhreetables($column_names,$table1,$table2,$table3, 
$table1_id,$table2_id,$table3_id,$table2_id2){
	$connectthree=$this->dal->getAll("SELECT ".$column_names." FROM ".$table1." 
	INNER JOIN ".$table2." ON ".$table2.$table2_id."=".$table1.$table1_id."
	INNER JOIN ".$table3." ON ".$table2.$table2_id2."=".$table3.$table3_id."  ");
	return $connectthree;
}
//generic query to get username and password from DB 
public function getUser($tableName,$username,$password)
 {
	$userdata = $this->dal->getAll("SELECT * FROM `".$tableName."` WHERE username='$username' AND password='$password'");	
	return $userdata;
}
}
?>

















