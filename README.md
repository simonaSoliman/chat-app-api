# chat-app-api
chat-app-api

1- insert in to your database via terminal of mongobooster GUI test data:
db.users.insert([
	{
		"updatedAt" : ISODate("2018-06-09T13:27:17.656+02:00"),
		"createdAt" : ISODate("2018-05-23T13:27:17.656+02:00"),
		"activation_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2ltb25hQHNvbGltYW4uY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImZpcnN0X25hbWUiOiJzaW1vbmEiLCJsYXN0X25hbWUiOiJzb2xpbWFuIiwiX2lkIjoiNWIwNTNlMDljZmE1ZmExODQ3MGVlYzlhIiwibnVtYmVyX29mX3Zpc2l0cyI6MCwiYWN0aXZlIjpmYWxzZX0sImlhdCI6MTUyNzA3MDIxNywiZXhwIjoxNTI3MTU2NjE3fQ.no7p2kGJnpzsYfToxXeCXinO9VzRBYbr06OeZctv3WQ",
		"email" : "simona@soliman.com",
		"password" : "$2a$10$/E.Xk1t.rZKM8JDg835aN.dNgSw3u2YBPH22G28de0itJMKz3CsQu",
		"active" : true
	},


	{
		
		"updatedAt" : ISODate("2018-06-09T13:28:17.656+02:00"),
		"createdAt" : ISODate("2018-05-23T13:28:17.656+02:00"),
		"activation_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2ltb25hQHNvbGltYW4uY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImZpcnN0X25hbWUiOiJzaW1vbmEiLCJsYXN0X25hbWUiOiJzb2xpbWFuIiwiX2lkIjoiNWIwNTNlMDljZmE1ZmExODQ3MGVlYzlhIiwibnVtYmVyX29mX3Zpc2l0cyI6MCwiYWN0aXZlIjpmYWxzZX0sImlhdCI6MTUyNzA3MDIxNywiZXhwIjoxNTI3MTU2NjE3fQ.no7p2kGJnpzsYfToxXeCXinO9VzRBYbr06OeZctv3WQ",
		"email" : "simona1@soliman.com",
		"password" : "$2a$10$/E.Xk1t.rZKM8JDg835aN.dNgSw3u2YBPH22G28de0itJMKz3CsQu",
		"active" : true,
		"contacts" : [
			ObjectId("5b1bb9cc15b8bf210e0a986d")
		]
	}
])
