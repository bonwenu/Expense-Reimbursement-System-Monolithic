package com.revature.daos;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.revature.models.Worker;

@Repository
public class WorkerDAOImpl implements WorkerDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Worker> getAllWorkers() {
		Session s = sessionFactory.getCurrentSession();
		System.out.println("session is" + sessionFactory.getCurrentSession());
		List<Worker> workers = null;
		workers = s.createQuery("from Worker").list();
		return workers;
	}
	
	@Override
	public Worker getWorkerById(int id) {
		Session s = sessionFactory.getCurrentSession();
		Worker w = (Worker) s.get(Worker.class, id);
		
		return w;
	}
	
	@Override
	public void createWorker(Worker w) {
		Session s = sessionFactory.getCurrentSession();
		s.save(w);
	}

	@Override
	public void updateWorkerInfo(Worker w) {
		Session s = sessionFactory.getCurrentSession();
		s.merge(w);
		
	}

	

}
