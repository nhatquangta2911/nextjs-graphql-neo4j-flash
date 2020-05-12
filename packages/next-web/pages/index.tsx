import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { PageWrapper, HomeRouteSection } from "styled/pages.style";

// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  const [username, setUsername] = useState("");
  React.useEffect(() => {
    setUsername(localStorage.getItem("username"));
  });
  return (
    <>
      <Head>
        <title>welcome {username}!</title>
      </Head>
      <PageWrapper>
        <HomeRouteSection>
          <p>welcome {username}!</p>
          <Link href="/tracking">
            <a>tracking</a>
          </Link>
          <Link href="/about">
            <a>about me</a>
          </Link>
        </HomeRouteSection>
      </PageWrapper>
    </>
  );
};

export default Index;
