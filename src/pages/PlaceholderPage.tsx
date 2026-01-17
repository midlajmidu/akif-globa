import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PlaceholderPageProps {
    title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{title} | Alif Global School</title>
            </Helmet>
            <Navbar />
            <main className="flex-grow flex items-center justify-center pt-20">
                <div className="text-center px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
                    <p className="text-lg text-muted-foreground">
                        This page is currently being updated. Please check back soon for more information.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PlaceholderPage;
