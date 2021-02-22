Pictue Palooza
Pictue Palooza is one of three components for a mock booking website that rhymes with "hair, bee, and pea". Designed with Service Oriented Architecture, this specific service renders the photos for a house listing.

This project involved the complete overhaul of the backend system design, deployment to AWS, and optimization for web scale traffic.

To dwell on the web scale traffic for a sec - specifically, I set the minimum requirement of my service to handle 1000 requests/sec with less than a 1% error rate and an average response time of 10ms or less. OK! Back to it:

Inheriting an existing codebase, I refactored the database from a NOSQL db (MongoDB) to a SQL db (PostgreSQL). After local testing with K6 and New Relic, this service was deployed to AWS EC2 instances. Through iterative refinement, I improved database settings (max connections), horizontally scaled the service to have (4) instances, implemented an NGINX load balancer to distribute request calls, and utilized S3/CloudFront to serve static files. All in all, my service improved from the original performace of 700 requests/s with 200ms latency (yuck!) to 1800 requests/s with 6ms latency (thats better). Please enjoy combing through the code and watching the demo!

