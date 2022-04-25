import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Loader from "../components/Loader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{ pathname: "/[username]", query: { username: "blog" } }}
      >
        <a> User Profile </a>
      </Link>
      <div>
        <Loader show />
      </div>
    </div>
  );
}
