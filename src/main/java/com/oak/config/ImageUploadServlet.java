package com.oak.config;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = { "/imgupload.php"})
public class ImageUploadServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		Cookie[] cookies = request.getCookies();
		
		StringBuilder cookiebuilder = new StringBuilder();
		
		for (int i = 0; i < cookies.length; i++) {
		  String name = cookies[i].getName();
		  String value = cookies[i].getValue();
		  
		  cookiebuilder.append(name+"="+value);
		  
		  if(i!=cookies.length-1){
			  cookiebuilder.append("; ");
		  }
		  
		}
		
		System.out.println("Inside");
		String url = "http://www.ipledge2nigeria.com/service/ckimages/blogs";
		
		
		String ctype = request.getHeader("Content-Type");
		
		String funcNum = request.getParameter("CKEditorFuncNum");
		System.out.println(funcNum);
		
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		
		con.setRequestProperty("Cookie", cookiebuilder.toString());

		// optional default is GET
		con.setRequestMethod("POST");

		//add request header
		//String auth = "Basic cmljaGFyZC5hZ2lkZWVAaXAybi5jb206YWRtaW4xMjMNCg==";
		//con.setRequestProperty("Authorization", auth);
		con.setRequestProperty("Content-Type",ctype);

		
		System.out.println("\nSending 'POST' request to URL : " + url);

		con.setDoOutput(true);
		
		InputStream is = request.getInputStream();
		
		ByteArrayOutputStream buffer = new ByteArrayOutputStream();

		
		
		int nRead;
		byte[] data = new byte[16384];

		while ((nRead = is.read(data, 0, data.length)) != -1) {
		  buffer.write(data, 0, nRead);
		}

		buffer.flush();
		
		byte[] req  = buffer.toByteArray();
		
		
		DataOutputStream wr = new DataOutputStream(con.getOutputStream());
		
		wr.write(req);
		
		wr.flush();
		wr.close();

		int responseCode = con.getResponseCode();
		System.out.println(responseCode);
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
		StringBuilder imgurl = new StringBuilder();
		String ln = reader.readLine();
		
		while(ln!=null){
			imgurl.append(ln);
			ln = reader.readLine();
		}
		
		reader.close();
		
		PrintWriter out = response.getWriter(); 
	    response.setContentType("text/html"); 
	    String message = "Image was uploaded successfully";
	    String resp = "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction("+funcNum+", '"+imgurl.toString().trim()+"', '"+message+"');</script>";
	    System.out.println("Sending back : "+resp);
	    out.println(resp); 	
	}
	
}
