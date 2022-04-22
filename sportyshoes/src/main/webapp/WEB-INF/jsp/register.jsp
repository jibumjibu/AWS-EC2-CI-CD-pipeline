<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>
</head>
<body>
	<h2>${errorMsg}</h2>
	<form method="post">
		<input type="text" name="fname" placeholder="First Name"><br><br>
		<input type="text" name="lname" placeholder="Last Name"><br><br>
		<input type="text" name="email" placeholder="Email"><br><br>
		<input type="text" name="password" placeholder="Password"><br><br>
		<button>Submit</button>
	</form>
</body>
</html>