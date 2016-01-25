package com.oak.main;

import java.io.IOException;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;

import com.oak.config.AppInitializerServlet;

public class OakStartUp {

	private static final int DEFAULT_PORT = 8080;
	// private static final int DEFAULT_PORT = 6767;
	private static final String CONTEXT_PATH = "/";

	private static final String DEFAULT_MAPPING_URL = "/*";
	private static final String ADMIN_MAPPING_URL = "/*";

	public static void main(String[] args) throws Exception {
		Server server = new Server(DEFAULT_PORT);

		ResourceHandler resourceHandler = new ResourceHandler();
		resourceHandler.setDirectoriesListed(true);
		resourceHandler.setWelcomeFiles(new String[] { "oakhome.html" });

		resourceHandler.setResourceBase(".");

		HandlerList handlers = new HandlerList();
		handlers.setHandlers(new Handler[] { resourceHandler,
				getServletHandler(), new DefaultHandler() });
		server.setHandler(handlers);

		server.start();
		server.join();

	}

	private static ServletContextHandler getServletHandler() throws IOException {

		ServletContextHandler servletContextHandler = new ServletContextHandler();
		servletContextHandler.setContextPath("/app");

		// servletContextHandler.setHandler(resourceHandler);

		// servletContextHandler.setResourceBase("./src/main/webapp/");
		// servletContextHandler.addServlet(AdminServlet.class, "/admin");
		servletContextHandler.addServlet(AppInitializerServlet.class, "/admin");
		return servletContextHandler;
	}
}
