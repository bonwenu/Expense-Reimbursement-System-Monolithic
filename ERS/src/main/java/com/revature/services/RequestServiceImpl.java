package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.daos.RequestDAO;
import com.revature.models.Request;

@Service
public class RequestServiceImpl implements RequestService {

	@Autowired
	private RequestDAO rd;
	
	@Transactional
	@Override
	public List<Request> getAllRequests() {
		return rd.getAllRequests();
	}

	@Transactional
	@Override
	public List<Request> getRequestsById(int id) {
		return rd.getRequestsById(id);
	}

	@Transactional
	@Override
	public Request createRequest(Request r) {
		return rd.createRequest(r);
	}
	
	@Transactional
	@Override
	public Request updateRequest(Request r) {
		return rd.updateRequest(r);
	}

	@Transactional
	@Override
	public void deleteRequest(int id) {
		rd.deleteRequest(id);;
	}

	@Transactional
	@Override
	public List<Request> getAllPending() {
		return rd.getAllPending();
	}

	@Transactional
	@Override
	public List<Request> getAllNonPending() {
		return rd.getAllNonPending();
	}

	@Transactional
	@Override
	public List<Request> getPendingById(int id) {
		return rd.getPendingById(id);
	}

	@Transactional
	@Override
	public List<Request> getNonPendingById(int id) {
		return rd.getNonPendingById(id);
	}

}
