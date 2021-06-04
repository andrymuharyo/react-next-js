import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utilities.module.css";

export default function Custom404() {
    return (
        <body className={"bg-gray-200"}>
            <div className={"flex flex-wrap content-center items-center max-w-md mx-auto my-72"}>
                <div>
                    <h1 className={utilStyles.heading2Xl}>404 - Page not found</h1>
                    <Link href="/">
                        <a className={"bg-indigo-500 hover:bg-indigo-600 text-white text-center px-5 py-3 my-7 block rounded-md hover:no-underline"}>Back to Home</a>
                    </Link>
                </div>
            </div>
        </body>
    );
}
