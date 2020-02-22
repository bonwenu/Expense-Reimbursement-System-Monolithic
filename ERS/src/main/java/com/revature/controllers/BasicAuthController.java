package com.revature.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.util.Authentication;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/auth")
public class BasicAuthController {

	@GetMapping
	public Authentication authorize() {
		return new Authentication("You are authenticated");
	}	
}