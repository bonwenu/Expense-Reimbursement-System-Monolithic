package com.revature.daos;

import java.util.List;
import com.revature.models.Worker;

public interface WorkerDAO {
		
		List<Worker> getAllWorkers();
		public Worker getWorkerById(int id);
		public Worker createWorker(Worker w);
		public Worker updateWorkerInfo(Worker w);
		

	
}
