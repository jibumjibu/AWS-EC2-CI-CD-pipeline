package com.simplilearn.foodbox.Product;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Product {
	private Integer id;
	private String name;
	private float price;
	private String category;
	private String imgname;
	private String imageurl;

	public Product() {

	}

	public Product(Integer id, String name, float price, String category, String imgname, String imageurl) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
		this.imgname = imgname;
		this.imageurl = imageurl;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImgname() {
		return imgname;
	}

	public void setImgname(String imgname) {
		this.imgname = imgname;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	

}
