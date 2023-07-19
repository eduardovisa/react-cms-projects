import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import { FieldsData } from './data';

const client = createClient({
  space: 'xu9i935s8wkm',
  environment: 'master',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
        const data: FieldsData = item.fields as unknown as FieldsData;

        const id = parseInt(item.sys.id);
        const title = data.title;
        const urlCode = data.urlCode;
        const urlDemo = data.urlDemo;
        const img = data.image.fields.file.url;
        const imgName = data.image.fields.file.fileName;
        const level = data.level;

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
