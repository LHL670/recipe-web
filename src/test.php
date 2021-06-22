
<?php // 在這裡才輸出 $pokemon_table
	$hostname="54.162.236.74";
	$username="client";
	$password="12487hd";
	$datebase="pokemon";
	$link=mysqli_connect( $hostname,$username,$password);
	mysqli_query($link,"SET NAMES 'UTF8'");
	mysqli_select_db($link,$datebase)or die("無法選擇資料庫");

	//pg.24
	$sql="SELECT * FROM pokemonlibrary LEFT JOIN pokemonskill
			ON pokemonlibrary.PokemonID =pokemonskill.PokemonID";
	$result=mysqli_query($link,$sql) or die ("無法送出" . mysqli_error( ));

	$pokemon_table="";

	$row=mysqli_num_rows($result);
	$col= mysqli_num_fields($result);

	$pokemon_table .="查詢結果".$row."筆";
	$pokemon_table .=", 包含 ".$col."個位數。";
	$pokemon_table .='</br></br></br>';
	$pokemon_table .="<table border='1' align='center'><tr align='center'>";

	while($fieldinfo=mysqli_fetch_field($result)){
		$pokemon_table .="<td>" .$fieldinfo->name."</td>";
	}
	
	$pokemon_table .="</.tr>";
	while($content=mysqli_fetch_assoc($result)){
		$pokemon_table .="<tr>";
		$id=$content['PokemonID'];
		$pokemon_table .="<td>" .$id."</td>";

		$name=$content['PokemonName'];
		$pokemon_table .="<td>" .$name."</td>";

		$type=$content['Type'];
		$pokemon_table .="<td>" .$type."</td>";

		$att=$content['Attack'];
		$pokemon_table .="<td>" .$att."</td>";

		$def=$content['Defense'];
		$pokemon_table .="<td>" .$def."</td>";

		$hp=$content['HP'];
		$pokemon_table .="<td>" .$hp."</td>";

		$level=$content['Level_x'];
		$pokemon_table .="<td>" .$level."</td>";

		$id=$content['PokemonID'];
		$pokemon_table .="<td>" .$id."</td>";

		$skillid=$content['SkillID'];
		$pokemon_table .="<td>" .$skillid."</td>";

		$skillname=$content['SkillName'];
		$pokemon_table .="<td>" .$skillname."</td>";

		$defSkill=$content['DefSkill'];
		$pokemon_table .="<td>" .$defSkill."</td>";

		$hitrate=$content['HitRate'];
		$pokemon_table .="<td>" .$hitrate."</td>";

		$skillAttack=$content['SkillAttack'];
		$pokemon_table .="<td>" .$skillAttack."</td>";

		$pokemon_table .="</tr>";
	}



	mysqli_close($link);
	mysqli_free_result($result);
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset = "utf-8">
	<title>資料庫示範</title>
</head>
<body>
	<h3>-------顯示 pokemon 資料---------------------</h3>

	<?php // 在這裡才輸出 $pokemon_table
		echo "PHP範例程式"."<br>";
		echo $pokemon_table,"<br>";


	?>
</body>
</html>
