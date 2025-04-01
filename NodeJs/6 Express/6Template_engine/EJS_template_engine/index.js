
/*
<%= EJS %>
Embedded JavaScript templating.

Fast compilation and rendering
Simple template tags: <% %>
Custom delimiters (e.g., use [? ?] instead of <% %>)
Sub-template includes
Ships with CLI
Both server JS and browser support
Static caching of intermediate JavaScript
Static caching of templates
Complies with the Express view system

		npm install ejs


		Load ejs template in node JS


app.set('view engine','ejs') // load ejs on app

app.get('/about',(_,resp)=>{
   resp.render(`${publicpath}/about`);
});

		Print user

<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>


		print loop

		  <ul>
			<% user.Skills.forEach((item)=>{%>
			<li><%= item %></li>
			<% })%>
		  </ul>
	  


		Layouts

<%- include('header'); -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>

*/


const express = require('express');
const app = express();

const path = require('path');
var publicpath=path.join(__dirname,'public') // public sudhi no path

app.set('view engine','ejs') // load ejs on app

app.get('/',(_,resp)=>{
	
	const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
	   Skills:['php','java','python	']
    }

   resp.render(`${publicpath}/index`,{user});
});

app.get('/about',(_,resp)=>{
   resp.render(`${publicpath}/about`);
});

app.get('/blog',(_,resp)=>{
   resp.render(`${publicpath}/blog`);
});

app.get('/*',(_,resp)=>{
   resp.render(`${publicpath}/pnf`);
});


app.listen(3000);