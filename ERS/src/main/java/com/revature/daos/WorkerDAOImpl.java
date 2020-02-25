package com.revature.daos;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.models.Request;
import com.revature.models.Worker;

@Repository
public class WorkerDAOImpl implements WorkerDAO {

	@Autowired
	private SessionFactory sessionFactory;
	private Logger log = Logger.getLogger(WorkerDAOImpl.class);
	
	@Override
	public List<Worker> getAllWorkers() {
		Session s = sessionFactory.getCurrentSession();
		List<Worker> workers = null;
		workers = s.createQuery("from Worker").list();
		if(workers == null) {
			log.error("No workers. This looks really bad");
			return null;
		}
		else {
			log.info("List of all workers was successfuly gathered");
		}
		Collections.sort(workers, Comparator.comparing(Worker::getWorkerId));
		return workers;
	}
	
	@Override
	public Worker getWorkerById(int id) {
		Session s = sessionFactory.getCurrentSession();
		Worker w = (Worker) s.get(Worker.class, id);
		log.info("Worker with ID: " + w.getWorkerId() + "gethered.");
		return w;
	}
	
	@Override
	public Worker createWorker(Worker w) {
		Session s = sessionFactory.getCurrentSession();
		s.save(w);
		log.info("Worker with ID: " + w.getWorkerId() + "sucessfully inserted");
		return w;
	}

	@Override
	public Worker updateWorkerInfo(Worker w) {
		Session s = sessionFactory.getCurrentSession();
		s.merge(w);
		log.info("Worker with ID: " + w.getWorkerId() + "sucessfully updated");
		return w;
	}

	

}
