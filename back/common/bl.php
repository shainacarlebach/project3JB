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
private $idNum;

function __construct(){ 
	$this->dal=new DAL();

} 
//create sql queries to run on database tables
//generic query get all data 
 public function getAllTable($tableName){
$alldata = $this->dal->getAll("SELECT * FROM `".$tableName."`");
return $alldata;
}

//generic query get data by student id 
public function get_studentID_DB($tableName,$idNum){
$idall=$this->dal->getAll("SELECT * FROM`".$tableName."` WHERE student_id=$idNum");
return $idall;
}

//generic query get data by course id 
public function get_courseID_DB($tableName,$idNum){
	$idall=$this->dal->getAll("SELECT * FROM`".$tableName."` WHERE course_id=$idNum");
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
	$lastID=$this->dal->getAll("SELECT * FROM ".$tableName." ORDER BY student_id DESC LIMIT 1");
	return $lastID;
}

//generic query to update data
public function updateData($tableName,$values,$idNum){
	$update=$this->dal->query("UPDATE `".$tableName."` SET ".$values."WHERE student_id=$idNum ");
	return $update;
}
//generic query to delete data
 public function deleteData($tableName,$idNum) {
	$remove=$this->dal->query("DELETE FROM`".$tableName."`WHERE student_id=$idNum ");
	return $remove;
}
//generic query to join 2 tables

public function innerJoin($column_names, $table1,$table2,$columnEqual){
	$join=$this->dal->joinTables("SELECT ".$column_names." FROM ".$table1." INNER JOIN ".$table2." ON ". $columnEqual);
	return $join;    
}

//generic query to join 3 tables
function jointhreetables($selected_rows, $table1, $table2, $table3, $Column_equal_to, $Column_equal_to2, $where) {
	$connectthree=$this->dal->joinTables("SELECT ". $selected_rows." FROM ". $table1 ." INNER JOIN " .$table3." ON ". $Column_equal_to ." INNER JOIN " .$table2." ON ". $Column_equal_to2. " WHERE ". $where);
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






























