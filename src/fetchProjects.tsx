/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: 'xu9i935s8wkm',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

interface Projects {
  id: number;
  title: string;
  urlCode: string;
  urlDemo: string;
  img: string;
  imgName: string;
  level: string;
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
        const { title, urlCode, urlDemo, image, level } = item.fields;

        const id = parseInt(item.sys.id);
        const img = image?.fields?.file?.url;
        const imgName = image?.fields?.file?.fileName;

        return { id, title, urlCode, urlDemo, img, imgName, level };
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
