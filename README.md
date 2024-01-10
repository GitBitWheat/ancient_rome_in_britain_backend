# Prerequisites

The repository doesn't stand on its own - All files should be in a directory named "ancient_rome_in_britain_backend", which is next to the "ancient_rome_in_britain_frontend" directory. The build and run process of this repository also handles build and run of the frontend repository.

Make sure both directories are in the same parent directory and with the correct names.

The project can run on a linux machine with docker and docker-compose. The script **install.sh** installs all needed dependencies for an ubuntu machine.

# Build and Run

Done via docker-compose. 3 scripts are included that contain the docker-compose commands with the required flags:

- **compose_build.sh:** Builds container images.
- **compose_up.sh:** Runs container images.
- **compose_down.sh:** Stops container images.

# Description of the Containers

There a 4 docker containers:

- **proxy:** The API gateway of the site. An nginx proxy.
- **backend:** The node server (express.js) which handles database queries.
- **db:** MongoDB database.
- **frontend:** A server that serves static HTML, which is the result of the build process of the frontend. The web server used is nginx.

All the containers share the same docker network. The only port that is exposed to the host is 443 of proxy, which is mapped to 443 of the host.

# The routes of the backend node server:
Here is the gist of the API of the backend server. Notice the nginx proxy maps routes that start with /actions/ to the backend server.

With the following routes, you can read all items (GET), add an item (POST + JWT authorization), edit (PUT + JWT authorization) and delete (DELETE + JWT authorization):

- /feed/book
- /feed/website
- /feed/audiovisual
- /feed/recreational
- /lists/tag
- /lists/agegroup
- /lists/genre
- /lists/websitetype
- /lists/audiovisualtype
- /lists/recreationaltype

You can manage file uploads with the following routes:

- GET /files/images/:imageName
- DELETE /files/images/:imageName (JWT authorization)
- POST /files/images (JWT authorization)

JWT authorization is done through the following requests:

- PUT /auth/signup
- POST /auth/login

Note the CORS policy only allows requests from the domain "ancientromeinbritain.com"
