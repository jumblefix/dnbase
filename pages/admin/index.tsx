import React from 'react';
import Link from 'next/link';

const AdminHome = () => {
    return (
        <div className="container mx-auto px-2">
            <h1>Admin Home</h1>
            <ul>
                <li>
                    <Link href="/admin">
                        <a href="/admin">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/[admin_slug]" as="/admin/products">
                        <a href="/admin/products">Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/[admin_slug]" as="/admin/categories">
                        <a href="/admin/categories">Category</a>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/[admin_slug]" as="/admin/blah">
                        <a href="/admin/blah">Blah</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" as="/">
                        <a href="/">Back</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminHome;
