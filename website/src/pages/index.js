import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <a href="/docs/index">Check our guides here!</a>,
    imageUrl: "https://assets2.rockpapershotgun.com/hitmandubaiheader.jpg/BROK/resize/1920x1080%3E/format/jpg/quality/80/hitmandubaiheader.jpg",
  },
];

function Feature({ imageUrl, title }) {
  const imgUrl = useBaseUrl(imageUrl);
  
  return (
  <center>
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className = "h3margin">{title}</h3>
    </div>
	</center>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            Hitman 3 Speedrunning Wiki. Got a question on a Hitman speedrun trick? We're here to help.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={"#"}
            >
              Try the search bar on the top-right corner.
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
