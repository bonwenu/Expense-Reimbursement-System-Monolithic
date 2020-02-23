package com.revature.daos;

import java.util.List;
import com.revature.models.Request;

public interface RequestDAO {
	
	List<Request> getAllRequests();
	public List<Request> getRequestsById(int id);
	public List<Request> getAllPending();
	public List<Request> getAllNonPending();
	public List<Request> getPendingById(int id);
	public List<Request> getNonPendingById(int id); 
	public Request createRequest(Request r);
	public void updateRequest(Request r);
	public void deleteRequest(int id);
	
}
