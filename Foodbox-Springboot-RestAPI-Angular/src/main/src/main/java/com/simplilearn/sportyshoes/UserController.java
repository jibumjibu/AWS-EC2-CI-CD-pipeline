package com.simplilearn.sportyshoes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users")
	public List<User> list(){
		return service.ListAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/users")
	public User add(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		User userObj = null;
		
		if (tempEmail != null && !"".equals(tempEmail)) {
			 userObj = service.fetchByEmail(tempEmail);
			 if(userObj != null) {
				 throw new Exception("User already registered. Please login");
			 }
		}
		
		userObj = service.save(user);
		return userObj;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public User login(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPassword = user.getPassword();
		User userObj = null;
		
		if(tempEmail != null && tempPassword != null) {
			userObj = service.fetchByEmailAndPassword(tempEmail, tempPassword);
		}
		if(userObj == null) {
			throw new Exception("Invalid userId/password");
		}
		return userObj;
	}

}
