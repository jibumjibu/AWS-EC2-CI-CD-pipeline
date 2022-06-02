package com.simplilearn.foodbox.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
	
	public List<User> ListAll(){
		return repo.findAll();
	}
	
	public User save (User user) {
		repo.save(user);
		return user;
	}
	
	public User fetchByEmail(String email) {
	   return repo.findByEmail(email);
	}
	
	public User fetchByEmailAndPassword(String email, String password) {
	   return repo.findByEmailAndPassword(email, password);
	}

}
