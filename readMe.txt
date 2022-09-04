This API is build with NodeJS and ExpressJS. 
Data's are stored in mySQL.

Install all the required libraries before running the application. 
Required libraries can be found in the package.json file.

1) Get all tasks->

Method:GET
URL: http://localhost:3000/api/tasks

2) Get single task->

Method:GET
URL: http://localhost:3000/api/tasks/{id}

3)Add new task->

Method:POST
URL: http://localhost:3000/api/tasks

Data: 
{
	"TASK": "Learn NodeJS",
	"TASK_STATUS": "pending"
}

4)Update a task->

Method:PUT
URL: http://localhost:3000/api/tasks/{id}

Data: 
{
	"TASK": "Learn ReactJS",
	"TASK_STATUS": "pending"
}

5)Delete a task->

Method:DELETE
URL: http://localhost:3000/api/tasks/{id}