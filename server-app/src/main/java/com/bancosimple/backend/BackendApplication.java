package com.bancosimple.backend;

import com.bancosimple.backend.config.EnvLoader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		System.setProperty("DB_URL", EnvLoader.get("DB_URL"));
		System.setProperty("DB_USERNAME", EnvLoader.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", EnvLoader.get("DB_PASSWORD"));

		SpringApplication.run(BackendApplication.class, args);
	}

}
