package com.learnersacademy;
import java.sql.*;


import code.DatabaseConnection;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

//Servlet to insert new data in a masterclass

public class Servlet_add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet_add() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html; charset=utf-8");
		String select = request.getParameter("select");
		PrintWriter out = response.getWriter();
		
		try {
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement st = con.prepareStatement("insert into " + select + " values (default, ?)");
			st.setString(1, request.getParameter("name"));
			st.executeUpdate();
			st.close();
			con.close();
			out.println("<h2>Data sucessfully added</h2>");
			
		} 
		
		catch (ClassNotFoundException | SQLException e) {
			out.println("<h2>PLEASE SELECT A VALUE AND ENTER A NAME</h2>");
		}
		
		out.println("<a href='index.html' style='text-decoration:none; font-weight: bold; color:red'>HOME</a>");
	}
	
}
