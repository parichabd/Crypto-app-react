import styles from "./layout.module.css"
function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>Botostart | React.js Full Courses</p>
      </header>

      {children}

      <footer className={styles.footer}>
        <p>Developed with Love 💗</p>
      </footer>
    </div>
  );
}

export default Layout;
