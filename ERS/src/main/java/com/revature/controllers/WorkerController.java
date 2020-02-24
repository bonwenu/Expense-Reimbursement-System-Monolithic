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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.daos.WorkerDAO;
import com.revature.daos.WorkerDAOImpl;
import com.revature.models.Request;
import com.revature.models.Worker;
import com.revature.services.WorkerService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080", 
		"http://expense-reimbursement-system.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/api/workers")
public class WorkerController {
	
	@Autowired
	private WorkerService ws;
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Worker> getAllWorkers() {

		return ws.getAllWorkers();
	}
	
	@GetMapping("/{id}")
	public Worker getWorkerById(@PathVariable int id) {
		
		return ws.getWorkerById(id);
	}
	
	@GetMapping("/name/{id}")
	public @ResponseBody String getNameById(@PathVariable int id) {
		Worker w = ws.getWorkerById(id);
		String name = w.getFirstName() + " "+w.getLastName();
		return name;
	}
	// Return worker information after update
	@PutMapping
	public Worker updateWorker(@RequestBody Worker w) {
		ws.updateWorkerInfo(w);
		return ws.updateWorkerInfo(w);
	}
}
