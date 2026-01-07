import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
    name: string;
    path: string;
}

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
    schema?: object;
    breadcrumbs?: Breadcrumb[];
}

const SEO = ({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Alif Global School',
    image = '/og-image.jpg',
    schema,
    breadcrumbs
}: SEOProps) => {
    const siteUrl = 'https://alifglobalschool.com'; // Replace with actual domain
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Alif Global School",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "sameAs": [
            "https://www.facebook.com/alifglobalschool",
            "https://www.instagram.com/alifglobalschool",
            "https://www.youtube.com/@alifglobalschool"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Markaz Knowledge City",
            "addressLocality": "Kozhikode",
            "addressRegion": "Kerala",
            "postalCode": "673580",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8012800100",
            "contactType": "admissions"
        }
    };

    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${siteUrl}${crumb.path}`
        }))
    } : null;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | Alif Global School</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schema || defaultSchema)}
            </script>
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
