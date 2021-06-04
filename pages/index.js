import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utilities.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${"mt-4 mb-4"}`}>
                <Link href="/404">
                    <a className={"bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 my-7 block rounded-md hover:no-underline"}>Test 404</a>
                </Link>
                <p className={"mt-3"}>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <a className={"text-indigo-500 hover:text-indigo-600"} href="https://nextjs.org/learn">
                        our Next.js tutorial
                    </a>
                    .)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, slug }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a className={"text-indigo-500 hover:text-indigo-600"}> {title}</a>
                            </Link>

                            <br />
                            {id}
                            <br />
                            <div className={"block my-3 text-gray-500"}>
                                <Date dateString={date} />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
