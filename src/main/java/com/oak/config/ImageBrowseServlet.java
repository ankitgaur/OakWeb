package com.oak.config;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

@WebServlet(urlPatterns = { "/imgbrowse.php"})
public class ImageBrowseServlet  extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String url = "http://www.ipledge2nigeria.com/service/images";

		String funcNum = request.getParameter("CKEditorFuncNum");
		
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();

		// optional default is GET
		con.setRequestMethod("GET");

		int responseCode = con.getResponseCode();
		System.out.println("\nSending 'GET' request to URL : " + url);
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer resp = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			resp.append(inputLine);
		}
		in.close();
		
		ObjectMapper mapper = new ObjectMapper();
		Image[] images = mapper.readValue(resp.toString(), Image[].class);
		
		StringBuilder htmlBuilder = new StringBuilder("<html><head>");
		
		
		htmlBuilder.append("<style> div { font-size: 0; }");

		htmlBuilder.append(" a { font-size: 16px; display: inline-block; margin-bottom: 8px; width: calc(50% - 4px); margin-right: 8px;}");

		htmlBuilder.append(" a:nth-of-type(2n) { margin-right: 0; }");

		htmlBuilder.append(" @media screen and (min-width: 50em) { a { width: calc(25% - 6px); } a:nth-of-type(2n) { margin-right: 8px; } a:nth-of-type(4n) { margin-right: 0; } }");

		htmlBuilder.append("</style><script>");
		
		
		
		
		htmlBuilder.append("function returnFileUrl(fileUrl) { var funcNum = ");
		htmlBuilder.append(funcNum);
		
		htmlBuilder.append("; window.opener.CKEDITOR.tools.callFunction( funcNum, fileUrl ); window.close();}");
		htmlBuilder.append("</script></head><body>");
		
		for(Image img : images){
			String imgurl = "http://www.ipledge2nigeria.com/service/image/"+img.getId();
			htmlBuilder.append("<div><a onclick='returnFileUrl(\""+imgurl+"\")'><figure><img src='"+imgurl+"' style='width: 300px;'></figure></a></div>");
			
		}
		
		htmlBuilder.append("</body></html>");
		
		PrintWriter out = response.getWriter(); 
	    response.setContentType("text/html"); 
	    out.println(htmlBuilder.toString()); 
	}

}
