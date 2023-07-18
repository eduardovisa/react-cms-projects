import { createClient } from 'contentful';

const client = createClient({
  space: 'xu9i935s8wkm',
  environment: 'master',
  accessToken: 'ojI7KQZ2VYgT_LAOLxeDxl-zfPmcrQ35LSKCmCeqzHM',
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
