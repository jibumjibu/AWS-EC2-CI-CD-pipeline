package com.learnersacademy;
import java.sql.*;


import code.DatabaseConnection;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

// Servlet to access mysql 'views' to get various class reports 
public class Servlet_classReport extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet_classReport() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String select1 = request.getParameter("select1");
		String select2 = request.getParameter("select2");
		String query;
		String userData = "null";
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		
		
		try {
			
			Connection con = DatabaseConnection.initializeDatabase();
			Statement st = con.createStatement();
			
			query = "select * from " + select1 +"_"	+ select2;
			ResultSet rs = st.executeQuery(query);
			
			out.println("<h2>List of "+ select2+ "s in " + select1 + " class</h2>");
			out.println("<table border='1px'>");
			out.println("<tr><th>"+select2+"</th></tr>");
			while(rs.next()) { 
					out.println("<tr>");
					userData = rs.getString(1);
					out.println("<td>"+userData+"</td>");
					out.println("</tr>");
				}
			out.println("</table>");
			
		} 
		
		catch (ClassNotFoundException | SQLException e) {
			out.println("<h2>PLEASE SELECT VALUES</h2>");
		}
		
		out.println("<a href='index.html' style='text-decoration:none; font-weight: bold; color:red'>HOME</a>");
		
	}
}
