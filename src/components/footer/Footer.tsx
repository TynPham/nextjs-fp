import * as React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className={styles.container}>
      <div>
        ©2023 <span className={styles.name}>Lamamia</span>. All rights reserved.
      </div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="facebook" className={styles.icon} />
        <Image src="/2.png" width={15} height={15} alt="instagram" className={styles.icon} />
        <Image src="/3.png" width={15} height={15} alt="twitter" className={styles.icon} />
        <Image src="/4.png" width={15} height={15} alt="youtube" className={styles.icon} />
      </div>
    </div>
  );
}
