import { site } from "../data/site";

interface MetaProps {
  title: string;
  description: string;
  /** Route path, e.g. "/blog". Used to build the canonical URL. */
  path: string;
  type?: "website" | "article";
}

/**
 * Per-route document metadata.
 *
 * React 19 hoists <title>, <meta> and <link rel="canonical"> into <head>
 * automatically, so these can be rendered from inside a page component and no
 * helmet-style library is needed.
 */
function Meta({ title, description, path, type = "website" }: MetaProps) {
  const url = `${site.url}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}

export default Meta;
