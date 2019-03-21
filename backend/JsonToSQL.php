<?php

/**
 * @author Diego Cangas <diegocangas6@gmail.com>
 * @copyright 2019
 * @version 1.0
 */

//Obtencion JSON
$texto = file_get_contents("https://playartifact.com/cardset/01/");
$split = explode(",",$texto);
$basedir = substr(explode(":",$split[0])[1].":".explode(":",$split[0])[2],1,-1);
$token = substr(explode(":",$split[1])[1],1,-1);
$dir = $basedir.$token;
$texto = file_get_contents(str_replace('\\',"",$dir));
$json = json_decode($texto);
//////
//echo($dir);
$cards = $json->{'card_set'}->{'card_list'};
//var_dump($cards);



//Rellenado SQL
    //Creando Tablas
        
        //Tabla Principal
        $insertMainTable = "CREATE TABLE Cartas ( \n card_id int, \n card_type varchar(10), \n illustrator varchar(30), \n rarity varchar(10), \n item_def varchar(40));\n";
        
        //Tablas de Idiomas
        $inserLanguageTable = "CREATE TABLE CardName (\ncart_id int, ";
        foreach(array_keys(get_object_vars($cards[0]->{'card_name'})) as &$name)
        $inserLanguageTable=$inserLanguageTable."\n".$name." varchar (30),";
        $inserLanguageTable=substr($inserLanguageTable,0,-1).");\n";

        //$insertDescriptionTable = str_replace('CardName','CardDescription',$inserLanguageTable);

        $inserLargeImage = "CREATE TABLE LargeImage (\ncart_id int, ";
        foreach(array_keys(get_object_vars($cards[0]->{'large_image'})) as &$name)
        $inserLargeImage=$inserLargeImage."\n".$name." varchar (50),";
        $inserLargeImage=substr($inserLargeImage,0,-1).");\n";

        $inserLargeImage = str_replace('default','PorDefecto',$inserLargeImage); //default es una palabra reservada en SQL

    //Rellenando tablas
    $RellenoDeTabalas ="";
    for($i = 0; $i < count($cards); $i++){
    
        if(property_exists($cards[$i],'item_def')){
        $card_type = $cards[$i]->{'card_type'};
        $illustrator = $cards[$i]->{'illustrator'};
        $rarity = $cards[$i]->{'rarity'};
        $item_def = $cards[$i]->{'item_def'};
        $card_id = $cards[$i]->{'card_id'};
       
        $card_name = $cards[$i]->{'card_name'};
        $large_image = $cards[$i]->{'large_image'};

        $elemntoTabalaPrincipal = "INSERT INTO Cartas VALUES ($card_id,'$card_type','$illustrator','$rarity',$item_def);\n";
        
        //Rellenando CardName
        $cardNameEntry = "INSERT INTO CardName VALUES($card_id,";
        for($j = 0; $j < count(array_values(get_object_vars($card_name))); $j++)
            $cardNameEntry.='"'.array_values(get_object_vars($card_name))[$j].'",';

        $cardNameEntry=substr($cardNameEntry,0,-1).");\n";

        //Rellenando LargeImage
        $largeImageEntry = "INSERT INTO LargeImage VALUES($card_id,";
        for($j = 0; $j < count(array_values(get_object_vars($large_image))); $j++)
            $largeImageEntry.="'".array_values(get_object_vars($large_image))[$j]."',";

        $largeImageEntry=substr($largeImageEntry,0,-1).");\n";

        $RellenoDeTabalas.=$elemntoTabalaPrincipal.$cardNameEntry.$largeImageEntry;
        }
    }

//Escritura Fichero SQL
$insertData = $insertMainTable.$inserLanguageTable.$inserLargeImage.$RellenoDeTabalas;
$nombre_archivo = "Prueba.sql";
file_exists($nombre_archivo);
$archivo = fopen($nombre_archivo,"w");
fwrite($archivo,$insertData);
?>