<?php
class Database{
	// To be filled
	private $host = '';
	private $user = '';
	private $pass = '';
	private $dbname = '';

	private $dbh;
	private $error;
	private $stmt;

	public function __construct(){
		//Set DSN
		$dsn ='mysql:host'.$this->host.';dbname='.$this->dbname;
		$options=array(
			PDO::ATTR_PERSISTENT =>true,
			PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION
		);
		//create new pdo
		try{
			$this->dbh=new PDO($dsn,$this->pass,$options);
		}catch(PDOException $e){
			$this->error=$getMessage();
		}
	}
}