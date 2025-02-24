import Head from "next/head";

type SchemaMarkupProps = {
  schemaData: Record<string, unknown>; // ✅ More specific type
};

export default function SchemaMarkup({ schemaData }: SchemaMarkupProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}
