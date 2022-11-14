import React from "react";
import Card from "../../component/Card";
import { Layout } from "../../component/Layout";

export const MainPage = () => {
  return (
    <Layout nickName="artem" id={1}>
      <div>main page</div>
      <Card
        nickName="artem"
        id={1}
        imgUrl="https://logos-world.net/wp-content/uploads/2021/03/Telegram-Logo.png"
        likes={10}
        isLikeByYou={true}
        comments={[
          { text: "asd", nickName: "vasia" },
          { text: "asdw", nickName: "vasiqa" },
          { text: "asdw212", nickName: "vasiqa" },
          { text: "asdw112", nickName: "vasiqa" },
          { text: "asdw212", nickName: "vasiqa" },
        ]}
      />
    </Layout>
  );
};

export default MainPage;
