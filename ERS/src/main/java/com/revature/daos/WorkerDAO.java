package com.revature.daos;

import java.util.List;
import com.revature.models.Worker;

public interface WorkerDAO {
		
		List<Worker> getAllWorkers();
		public Worker getWorkerById(int id);
		public void createWorker(Worker w);
		public void updateWorkerInfo(Worker w);
		

	
}
