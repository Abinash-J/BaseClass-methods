package org.test.unit;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.testng.Assert;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

public class UnitTest {

	@Test
	public void tc1() {
		System.out.println("TC 1");
		System.out.println("TC 2");
		
		SoftAssert s = new SoftAssert();
		s.assertAll();
		
		System.out.println("TC 3");
		System.out.println("TC 4");
		System.out.println("TC 5");
	}
	
}
