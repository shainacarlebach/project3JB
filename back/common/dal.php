<?php
//connect to database
class DAL {
    private $host ='127.0.0.1';
    private $db ='northwind';
    private $user='root';
    private $pass='';
    private $charset='utf8';
    private $pdo;
    private $dsn;
    private $opt;
    private $conn;
    private $stmt;

    function __construct(){
        $this->dsn="mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
        $this->opt=[
            PDO::ATTR_ERRMODE     =>PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE =>PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES =>false
        ]; 
        
        
    }
    //create new PDO
    function openConnection(){
        try{
            $this->conn=new PDO($this->dsn, $this->user, $this->pass, $this->opt);
            return $this->conn;
            return "Connected successfully";
        }
        catch(PDOException $e){
            print "ERROR!".$e->getMessage()."<br/>";
        }
    }
   //prepare statements to prevent SQL injection
       public function query($query){
           $conn = $this->openConnection();
           $stmt = $conn->prepare($query);
           $stmt ->execute();
               return true;
       }
       

       //returns all data from tables 
          public function getAll($query){
          $conn=$this->openConnection();
          $stmt = $conn->prepare($query);
             $stmt->execute();
             return $stmt->fetchAll();
      }
      //retirns all data from joined tables 
      function joinTables($query) {
        $conn=$this->openConnection();
        $stmt = $conn->prepare($query);
        $stmt->execute();
        return $joinedtable = $stmt->fetchAll();
    }
     
      //inserts data into table 
      function insertData($query, $insertedobjects) {
        $conn=$this->openConnection();
        $stmt = $conn->prepare($query);
        $stmt->execute($insertedobjects);
        return true;
    }
    
       
    
     //check number of rows deleted or updated
     function checkRows($query){
        $conn = $this->openConnection();
        $stmt = $conn->prepare($query);
        $stmt->execute();
            return $stmt->rowCount(); 
     } 
   }
   ?>
