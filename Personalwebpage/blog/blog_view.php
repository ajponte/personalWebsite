<html
<body>
<?php
$con = mysql_connect(‘localhost’, ‘root’, ”);          //create database connection
mysql_select_db(‘test’, $con);                     // Check connection
if (!$con) {
die(‘Not connected : ‘ . mysql_error());
}
$sql=”SELECT * FROM `blog_posts`”;
$result = mysql_query($sql);
while($row = mysql_fetch_array($result)){
?>
<p><?php echo $row['post_title'];?></p>
<p> by <?php echo $row['author_name'];?> on <?php echo $row['post_date'];?></p>
<p><?php echo $row['content']; ?></p>
<?php } ?>
</body>
</html>