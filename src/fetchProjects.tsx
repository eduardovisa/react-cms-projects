import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: 'xu9i935s8wkm',
  environment: 'master',
  accessToken: 'ojI7KQZ2VYgT_LAOLxeDxl-zfPmcrQ35LSKCmCeqzHM',
});

interface Projects {
  id: number;
  title: string;
  urlCode: string;
  urlDemo: string;
  img: unknown;
}

export const useFetchProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Projects[]>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });

      const projects = response.items.map((item) => {
        const { title, urlCode, urlDemo, image } = item.fields;
        const id = parseInt(item.sys.id);
        const img = image;

        return { id, title, urlCode, urlDemo, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return { loading, projects };
};
