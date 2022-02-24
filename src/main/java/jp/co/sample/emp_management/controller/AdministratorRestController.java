package jp.co.sample.emp_management.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/toInsert")
public class AdministratorRestController {
	
	@RequestMapping(value="/check", method=RequestMethod.POST)
	public Map<String, String> check(String password, String cPassword) {
		Map<String, String> map = new HashMap<>();
		String duplicateMessage = null;
		if (password.equals(cPassword)) {
			duplicateMessage = "確認用パスワード入力OK!";
		} else {
			duplicateMessage = "パスワードが一致していません";
		}
		map.put("duplicateMessage", duplicateMessage);
		return map;
	}
}
