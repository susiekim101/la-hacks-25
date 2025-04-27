## Inspiration
Imagine a world where college students can travel smarter, greener, and more cost-effectively. Our website is more than just a ridesharing platform—it's a social networking opportunity for students. With the help of Gemini AI to scan and extract essential flight data, we’ve allowed students to upload their flight information and to match with peers traveling on similar schedules. This data-driven approach not only reduces costs but also cuts carbon emissions through ridesharing.

The platform is designed with safety in mind: students are verified through their school email, ensuring only legitimate users can access the service. Contact details are shared only after mutual approval.
Our carpooling platform is transforming the way students share rides between airports and their campuses—combining sustainability, convenience, and social connectivity into one powerful solution. From clouds to campus, we’re cutting carbon, one trip at a time. 

## What it does
Traveling between airports and campuses is often inconvenient and costly for students. Public transport is unreliable, Waymos are expensive, and rideshare options can be scarce during peak times. Our platform solves this by matching students based on flight arrival times and connecting them with peers. This allows students to plan rides back to campus ahead of time, reduces travel costs, and decreases carbon emissions.

We also address safety concerns by verifying users through their school emails, ensuring only legitimate students are accessing the platform. Contact information is shared only after mutual approval. 
By making travel more affordable and sustainable, our platform is shaping the future of student transportation.

## How we built it
We used React and Javascript to build the frontend of each page, while integrating the Gemini API to parse through PDF files and extract specific components of a flight itinerary. We also seamlessly integrated visual elements using Tailwind for our CSS. To manage the backend database, we used Node.js and Express.js with MongoDB to store user data, including their email, password, flight information and personal tags. The application also utilizes the nodemailer module to verify each new user.

## Challenges we ran into
With only one developer on the team, it was difficult picking up pace with the development. As the team's developer focused on implementing the backend and Gemini API for the platform, the three first-time hackers found themselves progressing with the frontend UI rather slowly. Nevertheless, we were able to collaborate, discuss solutions, and compile a standard (for example, common GitHub commands for pushing and pulling) to avoid any conflicts that could lead to large scale damage in our program.

## Accomplishments that we're proud of
This project has a tangible, positive impact on both the environment and students. By facilitating shared rides, it directly reduces carbon emissions. Beyond the environmental benefits, it builds a stronger student community, allowing users to connect with peers on the same journey, whether for a ride or a lasting friendship. Our goal is simple: make travel more affordable, accessible, and eco-friendly for students, while creating a connected community. Whether you’re traveling back home for the holidays or returning to campus, this platform is your perfect travel companion.

## What we learned
With three first-time hackers and one developer on the team, this experience was a large learning curve for all of us. From learning to push and pull from GitHub, resolving merge conflicts, to bringing our Figma prototype to code, our first-time hackers learned frontend development using JavaScript, along with CSS and Tailwind. Our developer learned to connect a backend to the frontend design while leveraging a database to store user information. She also learned to use Gemini for document understanding and retrieving specific information through effective prompt engineering.

## What's next for Clouds2Campus
Our platform is designed to scale. With MongoDB for flexible data storage, we can easily handle increasing user data as we expand to more universities. The core features—flight matching, school verification, and carbon footprint tracking—can easily be adapted for large-scale deployment. As the platform grows, we can accommodate campuses nationwide, allowing students from various schools to connect and share rides seamlessly.
