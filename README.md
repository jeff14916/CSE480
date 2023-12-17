## Proposal

We focused on implementing the functionality we mentioned in the proposal and all the features works as intended, but we used slightly different technologies for some features.

1. Recommendation Service: We had difficulty using AWS Lambda and API Gateway, so we decided to process the recommendation in frontend, but it still saves the recommendation result to user's profile as properties and users can check the recommendation result in My Page.
2. Photo Gallery: It also do not use AWS Lambda and API Gateway. Also, Log in is required to see the Gallery. (Some auth problems occured) We used GraphQL Query for Create and Read process. Update, Delete is avaliable in My Page. Amazon S3 database used for storing photo, and Amazon DynamoDB is used for managing image links and associated user.
3. User management (Log in): It uses AWS Amplify's Authenticator UI. Auth0 and Lambda is not used. It uses Cognito, IAM, S3, DynamoDB.

## Our Team

Our team, Minseo Kim and Junseo Kim, are both new to web development, so we had to learn everything from the scratch. We acquired basic knowledge through Udemy lectures for HTML, CSS, React etc, and AWS Manual and documents for Backend. As beginners, We go through a lot of trial and error, which made us delete and re-add features in backend if it didn't work as intended. We once did a serious mistake which forced us to hard reset the backend.
At the end, we finished the project with all core features added, and we learned a lot about web development.
For frontend, we learned how to properly use react hooks like useEffect and useState, GraphQL for communicating with backend, CSS for making some clean UI, HTML for making the bone of the website.
For backend, we learned how to use AWS's features like Auth, API, Storage and how to integrate for making a working backend.
