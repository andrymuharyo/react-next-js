import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utilities.module.css";
import Link from "next/link";

const name = "Sample Posts";
export const siteTitle = "Next.js";
export const siteDescription = "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Primary Meta Tags */}
                <title>Meta Tags — Preview, Edit and Generate</title>
                <meta name="title" content={siteTitle} />
                <meta name="description" content={siteDescription} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content={siteTitle} />
                <meta property="twitter:description" content={siteDescription} />
                <meta property="twitter:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Link href="/">
                            <a>
                                <Image priority src="/images/photo.jpg" className={utilStyles.borderCircle} height={120} width={120} alt={name} />
                            </a>
                        </Link>
                        <h1 className={`${utilStyles.heading2Xl} ${"text-indigo-500"}`}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image priority src="/images/photo.jpg" className={utilStyles.borderCircle} height={120} width={120} alt={name} />
                            </a>
                        </Link>
                        <h1 className={`${utilStyles.heading2Xl} ${"text-green-500"}`}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a className={"text-indigo-500 hover:text-indigo-600"}>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
