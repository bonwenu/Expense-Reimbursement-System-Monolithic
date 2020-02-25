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

@Repository
public class RequestDAOImpl implements RequestDAO {

	@Autowired
	private SessionFactory sessionFactory;
	private Logger log = Logger.getLogger(RequestDAOImpl.class);
	
	@Override
	public List<Request> getAllRequests() {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request").list();
		if(requests == null) {
			log.error("No requests. Either no one wants to be paid back or DB is empty");
			return null;
		}
		else {
			log.info("List of all requests was successfuly gathered");
		}
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}

	@Override
	public List<Request> getRequestsById(int id) {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where empId = :empId")
				.setParameter("empId", id)
				.list();
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}

	@Override
	public Request createRequest(Request r) {
		Session s = sessionFactory.getCurrentSession();
		s.save(r);
		log.info("Request with ID: " + r.getReqId() + "sucessfully inserted");
		return r;
	}

	@Override
	public Request updateRequest(Request r) {
		Session s = sessionFactory.getCurrentSession();
		s.merge(r);
		log.info("Request with ID: " + r.getReqId() + "sucessfully updated");
		return r;
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
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}
	
	public List<Request> getAllNonPending() {
		Session s = sessionFactory.getCurrentSession();
		List<Request> requests = null;
		requests = s.createQuery("from Request where status <> :status")
				.setParameter("status","PENDING" )
				.list();
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
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
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
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
		Collections.sort(requests, Comparator.comparing(Request::getReqId));
		return requests;
	}

}
