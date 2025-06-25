import { createClient } from 'contentful';

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_WEBSITE_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_WEBSITE_ACCESS_TOKEN;
const HOST = import.meta.env.VITE_CONTENTFUL_HOST;

if (!SPACE_ID || !ACCESS_TOKEN) {
  throw new Error('Faltan las variables de entorno de Contentful');
}

export const createContentClient = () => {
  return createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    host: HOST, // cdn.contentful.com (por defecto) o preview.contentful.com
  });
};

const client = createContentClient();

export default client;
