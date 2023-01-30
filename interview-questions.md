# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
I can update my database using migrations to add a column. When I add the foreign key, it should be an integer, and the naming conventions is: modelname_id. The foreign key always goes on the belongs_to side, so Student. 

Researched answer: Migrations are used to modify the shape of an existing database, so I an create a migration to update my database. The name of the column by convention should be Cohort_id and the data entered should be an integer. The foreign key always goes on the belongs_to side, so the foreign key would belong in the Student model. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Post, put, patch, and delete and need params passed, because they need data to do things to. 

Researched answer:Post, put, patch, and delete and need params passed, because they need data to do things to. Get does not need a param passed to it. 

3. Name three rails generator commands. What is created by each?

Your answer:
$rails generate migration action_name_here
This command generates a new file in the migration directory.

$ rails generate model Name
This command generates databases structure. 

Researched answer:

Using generators saves time by writing boilerplate code, that is necessary for the app to work. To invoke the command we can shortend generate to "g."
$rails generate controller action
This is written in Pascal Case .

$rails generate migration action_name_here
We create a new verison of our database table. The database will update with the new key:value pair. The value will be nil until we assign it a value.

$ rails generate model Name
The name will be written in Pascal case and is sinigular and will generate a Model. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students students#index displays all students

action: "POST" location: /students students#create creates a new student

action: "GET" location: /students/new student#new returns an HTML form creating a new student

action: "GET" location: /students/2 student#show displays a specidif student

action: "GET" location: /students/2/edit photos#edit returns a HTML form for editing a student 

action: "PATCH" location: /students/2 photo#update updates a specific student

action: "DELETE" location: /students/2 photo#destory deletes a specific student 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1. As a user, I can see all of my to do chores. 
2. As a user, I can fill out a form for a new chore and click on a submit button that will trigger a create action
3. As a user, I can navigate from the show page to the view of the edit page.
4. As a user, I can see a form to edit title and progress.
5. As a user, I can see a submit button.
6. As a user, I can navigate back from the edit page to the blog post show page
7. As a user, I can delete chores.
8. As a user, I can navigate back from the show page to the landing page.
9. As a user, I can see a title. 
10. As a user, the page looks nice :) 