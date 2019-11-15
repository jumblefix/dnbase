import React from 'react';
import { NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';

interface AdminPageProps {
    query: ParsedUrlQuery;
    statusCode: number;
}

const AdminPage = ({ query, statusCode }: AdminPageProps) => {
    return (
        <div className="container mx-auto px-2">
            <Link href="/admin">
                <a href="/admin">Back to Home</a>
            </Link>
            <h1>Admin Page</h1>
            {statusCode === 404 && <h1 className="text-red-600">{query.admin_slug} Not Found</h1>}
            {statusCode === 200 && <p>{query.admin_slug}</p>}
        </div>
    );
};

const availablePages = ['products', 'categories'];

AdminPage.getInitialProps = async ({ query, res }: NextPageContext) => {
    const { admin_slug } = query;

    let statusCode = 200;

    if (!availablePages.includes(admin_slug as string)) {
        statusCode = 404;
        if (res) {
            res.statusCode = 404;
        }
    }

    return { query, statusCode };
};

export default AdminPage;
