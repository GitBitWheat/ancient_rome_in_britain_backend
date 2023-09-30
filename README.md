# I'll work on the README tomorrow.
For now, here is the gist of the API.

With the following routes, you can read all items (GET), add an item (POST + JWT authorization), edit (PUT + JWT authorization) and delete (DELETE + JWT authorization):
<ul>
  <li>/feed/book</li>
  <li>/feed/website</li>
  <li>/feed/audiovisual</li>
  <li>/feed/recreational</li>
  <li>/lists/tag</li>
  <li>/lists/agegroup</li>
  <li>/lists/genre</li>
  <li>/lists/websitetype</li>
  <li>/lists/audiovisualtype</li>
  <li>/lists/recreationaltype</li>
</ul>

You can manage file uploads with the following routes:
<ul>
  <li>GET /files/images/:imageName</li>
  <li>DELETE /files/images/:imageName</li>
  <li>POST /files/images</li>
</ul>
