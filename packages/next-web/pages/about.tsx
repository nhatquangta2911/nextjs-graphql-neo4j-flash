import React from "react";
import Head from "next/head";
import { PageWrapper } from "styled/pages.style";
import { DropDownButton } from "@progress/kendo-react-buttons";
import { withRouter } from "next/router";

//TODO: Static File Serving - in /public folder
const menuItems = [
  {
    actionName: "Post 1",
    icon: "copy",
    route: "/posts/you-dont-have-to-be-productive-all-the-time",
  },
  {
    actionName: "Post 2",
    icon: "copy",
    disabled: true,
    route: "/posts/get-into-new-habits-quickly",
  },
  {
    actionName: "Post 3",
    icon: "copy",
    route: "/posts/post-random-a",
  },
  {
    actionName: "Post 4",
    icon: "copy",
    route: "/posts/post-random-b",
  },
];

const AboutPage = ({ router }) => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <PageWrapper>
        <p>i'm Shawn</p>
        <DropDownButton
          items={menuItems}
          textField="actionName"
          text="User Settings"
          onItemClick={(item) => {
            router.push("/posts/[slug]", menuItems[item.itemIndex].route);
          }}
        />
      </PageWrapper>
      {/* <img src='/banner.png' alt='Banner' width={200} /> */}
    </>
  );
};

export default withRouter(AboutPage);
