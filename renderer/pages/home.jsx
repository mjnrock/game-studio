import React from "react";
import Head from "next/head";
import Link from "next/link";

import Test from "./../components/Test";

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Home - Nextron (with-javascript)</title>
            </Head>

            <Test />

            <div>
                <p>
                    ⚡ Electron + Next.js ⚡ - <Link href="/next">
                        <a>Go to next page</a>
                    </Link>
                </p>
                <img src="/images/logo.png" />
            </div>
        </React.Fragment>
    );
};

export default Home;