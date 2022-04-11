package code;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

// class with database connection function
public class DatabaseConnection {
	
	public static Connection initializeDatabase()
	        throws SQLException, ClassNotFoundException {
		
		String url = "jdbc:mysql://localhost:3306/learnersacademy";
		String uname = "root";
		String pass = "Qpalzmmzlapq@1979";
		//Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, uname, pass);
		return con;
		
	}
	
}
