import styles from "./Mainaccount.module.css";
import Setting from "./Setting";
import SideBare from "./SideBare";
function Mainaccount() {
  return (
    <main className={styles.main}>
      <section className={styles.accountSection}>
        <SideBare />
        <Setting />
      </section>
    </main>
  );
}

export default Mainaccount;
