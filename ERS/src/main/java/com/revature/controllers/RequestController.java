package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Request;
import com.revature.models.Worker;
import com.revature.services.WorkerService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RequestMapping("/api/requests")
public class RequestController {
	
	@Autowired
	private WorkerService ws;
	// CHANGE TO REQUEST
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Worker> placeHolder() {

		return ws.getAllWorkers();
	}
}
