# I'll work on the README tomorrow.
For now, here is the gist of the API.

With the following routes, you can read all items (GET), add an item (POST + JWT authorization), edit (PUT + JWT authorization) and delete (DELETE + JWT authorization):
/feed/book
/feed/website
/feed/audiovisual
/feed/recreational
/lists/tag
/lists/agegroup
/lists/genre
/lists/websitetype
/lists/audiovisualtype
/lists/recreationaltype

You can manage file uploads with the following routes:
GET /files/images/:imageName
DELETE /files/images/:imageName
POST /files/images
