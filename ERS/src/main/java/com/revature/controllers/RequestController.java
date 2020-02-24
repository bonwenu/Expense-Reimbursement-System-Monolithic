package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Request;
import com.revature.models.Worker;
import com.revature.services.RequestService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080", 
		"http://expense-reimbursement-system.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/api/requests")
public class RequestController {
	
	@Autowired
	private RequestService rs;
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Request> getAllRequests() {

		return rs.getAllRequests();
	}
	
	@GetMapping("/all-pending")
	public List<Request> getAllPending() {
		
		return rs.getAllPending();
	}
	
	@GetMapping("/all-non-pending")
	public List<Request> getAllNonPending() {
		
		return rs.getAllNonPending();
	}
	
	
	@GetMapping("/non-pending/{id}")
	public List<Request> getNonPendingById(@PathVariable int id) {
		
		return rs.getNonPendingById(id);
	}
	
	@GetMapping("/pending/{id}")
	public List<Request> getPendingById(@PathVariable int id) {
		
		return rs.getPendingById(id);
	}
	
	@PostMapping
	public Request createRequest(@RequestBody Request r) {

		return rs.createRequest(r);
	}
	
	// Return list after approving/denying request
	@PutMapping
	public List<Request> updateRequest(@RequestBody Request r) {
		rs.updateRequest(r);
		return rs.getAllPending();
	}
	
}
