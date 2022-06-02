package com.simplilearn.sportyshoes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/category")
	public List<Category> list(){
		return service.ListAll();
	}

}
