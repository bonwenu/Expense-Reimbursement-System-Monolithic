package com.revature;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.daos.WorkerDAO;
import com.revature.daos.WorkerDAOImpl;
import com.revature.models.Worker;

public class Driver {

	public static void main(String[] args) {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");

		WorkerDAO wd = new WorkerDAOImpl();
		List<Worker> workers = null;
		System.out.println("Test");
		workers = wd.getAllWorkers();
		
		for(Worker w: workers) {
			System.out.println(w);
		}
	}

}
