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
 * Servlet implementation class Servlet_assignStudent
 */
public class Servlet_assignStudent extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet_assignStudent() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		String[] student = request.getParameterValues("student");
		String[] classes = request.getParameterValues("classes");
		
		try {
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement st = con.prepareStatement("INSERT INTO students VALUES (default, ?, ?)");
			st.setString(1, request.getParameter("student"));
			st.setString(2, request.getParameter("classes"));
			
			st.executeUpdate();
			st.close();
			con.close();
			out.println("<h2>Data sucessfully added</h2>");

		} catch (ClassNotFoundException | SQLException e) {
			out.println("<h2>PLEASE ENETER ALL VALUES</h2>");
		}
		
		out.println("<a href='index.html' style='text-decoration:none; font-weight: bold; color:red'>HOME</a>");
	}

}
