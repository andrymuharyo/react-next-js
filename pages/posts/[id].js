import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utilities.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h3 className={`${utilStyles.headingLg} ${"mb-2 font-bold text-indigo-500"}`}>{postData.title}</h3>
            <div className={"block my-3 text-gray-500"}>
                <Date dateString={postData.date} />
            </div>
            <p className={"text-gray-700 font-bold"}>{postData.intro}</p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
