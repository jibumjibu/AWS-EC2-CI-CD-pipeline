package com.learnersacademy;
import java.sql.*;


import code.DatabaseConnection;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class Servlet_delete
 */
public class Servlet_delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet_delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html; charset=utf-8");
		String select = request.getParameter("select");
		PrintWriter out = response.getWriter();
		int row = Integer.parseInt(request.getParameter("row"));
		
		try {
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement st = con.prepareStatement("DELETE FROM " + select + " WHERE id = " + row);
			st.executeUpdate();
			st = con.prepareStatement("SET @count =" + 0);
			st.executeUpdate();
			st = con.prepareStatement("UPDATE " + select + " SET " + select + ".id = @count:= @count + " + 1);
			st.executeUpdate();
			
			st.close();
			con.close();
			out.println("<h2>Data sucessfully deleted</h2>");
			
		} 
		
		catch (ClassNotFoundException | SQLException e) {
			out.println("<h2>PLEASE SELECT A VALUE AND ENTER A NAME</h2>");
		}
		
		out.println("<a href='index.html' style='text-decoration:none; font-weight: bold; color:red'>HOME</a>");
	}

}
