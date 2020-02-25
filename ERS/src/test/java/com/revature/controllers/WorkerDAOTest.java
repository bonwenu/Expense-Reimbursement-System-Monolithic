package com.revature.controllers;
import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.revature.daos.WorkerDAO;
import com.revature.models.Worker;
import com.revature.test.config.TestBeanConfig;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {TestBeanConfig.class})
public class WorkerDAOTest {
	
	@Autowired
	private WorkerDAO wd;

	@Transactional
    @Rollback(true)
	@Test
	public void getAllWorkers_Test() {

		List<Worker> result =  wd.getAllWorkers();
		System.out.println(result);
		assertNotNull(result);
		assertTrue(result.size() > 0);
	}

}
