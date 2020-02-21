package com.revature.daos;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.models.Request;

@Repository
public class RequestDAOImpl implements RequestDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Request> getAllRequests() {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request").list();
		return requests;
	}

	@Override
	public List<Request> getRequestsById(int id) {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where empId = :empId")
				.setParameter("empId", id)
				.list();
		return requests;
	}

	@Override
	public void createRequest(Request r) {
		Session s = sessionFactory.getCurrentSession();
		s.save(r);
	}

	@Override
	public void updateRequest(Request r) {
		Session s = sessionFactory.getCurrentSession();
		s.merge(r);
	}

	@Override
	public void deleteRequest(int id) {
		Session s = sessionFactory.getCurrentSession();
		s.delete(new Request(id));
		
	}

	@Override
	public List<Request> getAllPending() {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where status = :status")
				.setParameter("status","PENDING" )
				.list();
		return requests;
	}
	
	public List<Request> getAllNonPending() {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where status <> :status")
				.setParameter("status","PENDING" )
				.list();
		return requests;
	}

	@Override
	public List<Request> getPendingById(int id) {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where empId = :empId and status = :status")
				.setParameter("empId",id )
				.setParameter("status","PENDING" )
				.list();
		return requests;
	}

	@Override
	public List<Request> getNonPendingById(int id) {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where empId = :empId and status <> :status")
				.setParameter("empId",id )
				.setParameter("status","PENDING" )
				.list();
		return requests;
	}

}
