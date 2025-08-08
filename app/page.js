import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Home/Banner/Banner";

export default function Home() {
  return (
    <div>
      <main>
          <Banner></Banner>
      </main>
    </div>
  );
}
