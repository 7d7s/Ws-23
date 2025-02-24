import MetaTags from "./MetaTags";
import SchemaMarkup from "./SchemaMarkup";

type MetaData = {
  title: string;
  description: string;
  keywords?: string; // Optional field
  [key: string]: unknown; // Allow additional properties
};

type SchemaData = Record<string, unknown>; // More structured type

type SEOProps = {
  metaData: MetaData;
  schemaData: SchemaData;
};

export default function SEO({ metaData, schemaData }: SEOProps) {
  return (
    <>
      <MetaTags metaData={metaData} />
      <SchemaMarkup schemaData={schemaData} />
    </>
  );
}
