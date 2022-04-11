package com.learnersacademy;
import java.sql.*;


import code.DatabaseConnection;
import jakarta.servlet.ServletException;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

// Servlet to assign classes and teachers to subjects
public class Servlet_assign extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet_assign() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		
		try {
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement st = con.prepareStatement("INSERT INTO assigned_teachers VALUES (default, ?, ?, ?)");
			st.setString(1, request.getParameter("subject"));
			st.setString(2, request.getParameter("classes"));
			st.setString(3, request.getParameter("teacher"));
			
			st.executeUpdate();
			st.close();
			con.close();
			out.println("<h2>Data sucessfully assigned</h2>");
			
		} catch (ClassNotFoundException | SQLException e) {
			out.println("<h2>PLEASE ENETER ALL VALUES</h2>");
		}
		
		out.println("<a href='index.html' style='text-decoration:none; font-weight: bold; color:red'>HOME</a>");
	}

}
