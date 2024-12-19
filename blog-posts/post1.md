# StudySpaceFinder - A Case Study

StudySpaceFinder was a project I created with a team of several other UVic students that helped students find empty classrooms on campus for club meetings, study groups, or just to hang out. Peaking at over 100 daily users, the site was widely used by UVic students across disciplines. Now that the project has come to a close, I wanted to take some time to reflect on what we accomplished.

If you’re just here for the highlights, check out the **Design** and **Creating the Project** sections.

## The Ideation

At the beginning of my second year at UVic, I made a large group of friends that I shared classes with. We often found ourselves wandering the halls between classes as a group of 10-12 people, looking for a space large enough for all of us. As most public areas had tables for 4-6 people only, we would usually seek out unused classrooms. 

Finding an available classroom was often harder than it seemed. Many of the classrooms were occupied, especially in the afternoons when we had most of our breaks. Adding in the time it takes to walk between buildings, we would often spend upwards of 20 minutes trying to find somewhere to sit for an hour-long break. This is where the idea for StudySpaceFinder was born, as I realized that there must be a better way to find empty classrooms without aimlessly wandering around campus.

Although I first had the idea for StudySpaceFinder early in my second year, I didn’t start to execute on it until the following semester when I took a **Human-Computer Interaction course**. This course included a semester-long project to design an interface solving a university-related problem. We used StudySpaceFinder for our project, and over the course of the term, the idea went through various design iterations, user feedback cycles, and feasibility studies before we settled on a design that closely resembled what the final product would look like. Although we never wrote any code during the course, I believe the success of StudySpaceFinder can largely be credited to what I learned there, as it took the idea from a vague concept to a well-defined, ready-to-start project. This class was also what sparked my interest in UX design.

## The Design

The main goal of StudySpaceFinder was straightforward: **help students find empty classrooms**.

Several ideas were thrown around for additional features such as maps, marking classes as “in use,” and an account system. After conducting our user studies, we discovered that these features were not necessary, and the added complexity mostly served to confuse the users. 

With this knowledge in mind, we were able to come up with an ultimate objective for the design: **deliver the information users wanted with the fewest clicks possible**. Some of the design changes we made were as follows:

- **Removed the initial landing page**:  
  Instead of forcing users to navigate through an introductory page, we moved the project details to an “About” page. This helped streamline the user experience, especially for repeat users.

- **Added classroom calendars**:  
  The most requested feature in our initial surveys was the ability to see how long a class would remain empty. To fulfill this new requirement, we added a calendar view for each classroom, allowing users to plan their schedules ahead of time.

- **Added a time and date dropdown on the classroom selection page**:  
  To make future planning easier, we added a dropdown that allowed users to check availability at specific times and dates. This was especially important given how scheduling works at UVic, where most classes start on the hour and end 10 minutes before the hour is up. This meant that if you didn’t check the calendar, you could visit the website at the end of class and see that a room was available to use, but by the time you got there, a new class would have already started.

- **Removed instructions in favor of an intuitive UI**:  
  Our early testing included an instructions page, but our testing showed that users largely ignored it. Instead of adding instructions, we opted to simplify the interface, removing distractions and ensuring each screen had just one or two clear options for the user.

## Creating the Project

After seeing my idea for StudySpaceFinder come to life on paper, I decided it was time to make the project a reality. At the time I was still relatively new to development, and although I had picked up some front-end development experience already, I did not feel I was ready to tackle this project on my own. Determined to make this project happen, I approached **VikeLabs**, the University’s programming club.

Through the club, I connected with two other students with complementary skill sets, and together we started working. We broke the project down into three parts: **the front end**, **back end**, and **data acquisition**. While we felt confident in our ability to write the front and back-end code, the challenge came from sourcing the data. We collaborated with a separate VikeLabs team that worked on **CourseUp**, a course planning tool. They introduced us to UVic’s course API, which became the source of our data pipeline. With that hurdle cleared, we were ready to start coding.

### The Tech Stack

- **React**:  
  We chose React mainly because it was what we were most familiar with. React was a good choice as it was well-suited to the single-page nature of the website.

- **GoLang**:  
  Go was selected as the language for the backend API because it was fast and could help us sort large amounts of data quickly (although we ended up not needing to do so). It also had an extensive set of libraries that helped us develop the API quickly.

- **SQLite**:  
  For our database, we wanted something lightweight and easy to host. Knowing that we weren’t going to have a super large data set or complex relations in our data, SQLite was the best fit for the job.

### Development Process

Development was split among the team. Two of us worked on the front end while the third focused on the back-end API. The biggest challenges came from organizing the data. We decided to structure it by building and then by classroom, storing all the class times on the classroom. This also mirrored how the data was displayed on the front end.

To keep the database updated, we wrote a Python script that fetched course data from UVic’s APIs, sorted the data, and stored it in the database. This script ran as a **GitHub Action** once per semester, keeping the website up-to-date without the need for maintenance.

## The Finished Product

After two months of work, StudySpaceFinder was live. Initially, it laid mostly dormant, primarily being used by friends of the people who created it. I was personally using it several times a week, and my friends would often let me know whenever they used it. This changed at the start of the next school year, as someone posted a link to it on UVic’s Engineering and Computer Science Discord server, which helped the site gain traction.

Over the coming months, several people mentioned the website to me in passing, unaware that I had created it. Several clubs, as well as the Engineering Students Society, used it to plan their meetings. The website had gained enough traction that it was being spread by word of mouth. This was incredibly exciting, as it confirmed that we had solved a problem significant enough for people to talk about.

## How It Ended

Unfortunately, on June 28, 2023, a professor at the University of Waterloo was non-fatally stabbed by a troubled student while delivering a lecture. As part of a nationwide response to this incident, UVic decided to take action to prevent university staff from being targeted by future attackers. Part of this action was to revoke access to the public APIs, which also hosted data on where professors would give their lectures and when.

Although it was disappointing to see StudySpaceFinder come to an end, we understand that no compromises can be made when it comes to safety, and we fully agreed with UVic’s decision.

## Conclusion

Looking back, StudySpaceFinder is still one of the projects I’m most proud of. It wasn’t just a coding project—it was a solution that solved a real problem and helped hundreds of students, even if it was just in a minor way.

The project was a great learning experience. Not only did I improve my technical skills, but it also taught me about design, leadership, and how to follow through on a large idea. It was the first time I truly felt like a software engineer, and not just someone who could write some code.
