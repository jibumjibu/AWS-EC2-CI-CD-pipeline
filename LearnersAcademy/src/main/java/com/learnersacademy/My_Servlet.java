package com.learnersacademy;
import java.sql.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import code.DatabaseConnection;

// Servlet for viewing various master-lists

public class My_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public My_Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String select = request.getParameter("select");
		String query;
		String userData = "null";
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		try {
			Connection con = DatabaseConnection.initializeDatabase();
			Statement st = con.createStatement();
			
			query = "select * from " +select;	
			ResultSet rs = st.executeQuery(query);
			
			switch(select) {
			
			case "assigned_teachers": 				
			out.println("<table border='1px'>");
			out.println("<tr><th>SL#</th><th>Subjects</th><th>Classes</th><th>Teachers</th></tr>");
			while(rs.next()) { 
				out.println("<tr>");
				for (int i=1; i<5; i++) {
					userData = rs.getString(i);
					out.println("<td>"+userData);
					if(i==4) {
						out.println("</td>");
					}
				}
				out.println("</tr>");
			}
			out.println("</table>");break;
			
			case "teachers":
			out.println("<table border='1px'>");
			out.println("<tr><th>SL#</th><th>Teachers</th></th></tr>");
			while(rs.next()) { 
				out.println("<tr>");
				for (int i=1; i<3; i++) {
					userData = rs.getString(i);
					out.println("<td>"+userData);
					if(i==2) {
						out.println("</td>");
					}
				}
				out.println("</tr>");
			}
			out.println("</table>");break;
			
			case "classes":
			out.println("<table border='1px'>");
			out.println("<tr><th>SL#</th><th>Classes</th></th></tr>");
			while(rs.next()) { 
				out.println("<tr>");
				for (int i=1; i<3; i++) {
					userData = rs.getString(i);
					out.println("<td>"+userData);
					if(i==2) {
						out.println("</td>");
					}
				}
				out.println("</tr>");
			}
			out.println("</table>");break;
			
			case "subjects":
			out.println("<table border='1px'>");
			out.println("<tr><th>SL#</th><th>Subjects</th></th></tr>");
			while(rs.next()) { 
				out.println("<tr>");
				for (int i=1; i<3; i++) {
					userData = rs.getString(i);
					out.println("<td>"+userData);
					if(i==2) {
						out.println("</td>");
					}
				}
				out.println("</tr>");
			}
			out.println("</table>");break;
			
			case "students":
			out.println("<table border='1px'>");
			out.println("<tr><th>SL#</th><th>Subjects</th><th>Class</th></th></tr>");
			while(rs.next()) { 
				out.println("<tr>");
				for (int i=1; i<4; i++) {
					userData = rs.getString(i);
					out.println("<td>"+userData);
					if(i==3) {
						out.println("</td>");
					}
				}
				out.println("</tr>");
			}
			out.println("</table>");break;
			
			}
			
			st.close();
			con.close();
						
		} catch (ClassNotFoundException | SQLException e) {
			out.println("<h2>PLEASE SELECT A VALUE</h2>");
		}
		out.println("<a href='index.html' style='text-decoration:none; font-weight: bold; color:red'>HOME</a>");
	}
}
