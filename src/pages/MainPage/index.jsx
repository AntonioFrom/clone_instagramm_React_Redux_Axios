import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card";
import { Layout } from "../../component/Layout";
import { getPhotos } from "../../redux/actions/photos";
import "./styles.scss";

export const MainPage = () => {
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.isPhotoLoading);
  const total = useSelector((state) => state.photos.totalphotos);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const nextHandler = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    dispatch(getPhotos(page));
    // eslint-disable-next-line
  }, [page]);

  console.log(photos.id);
  return (
    <Layout nickName="artem" id={1}>
      <div className="cnMainPageRoot">
        {loading ? (
          <div className="cnMainPageLoaderContainer">
            <Bars color="#000BFF" height={80} width={80} />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={
              <div className="cnMainPageLoaderContainer">
                <Bars color="#000BFF" height={15} width={15} />
              </div>
            }
            endMessage={<p className="cnMainPageLoaderContainer">That's all</p>}
          >
            {photos.map(({ author, comments, likes, imgUrl, id }) => {
              return (
                <Card
                  key={id}
                  className="cnMainPageCard"
                  nickName={author.nickname}
                  id={author.id}
                  imgUrl={imgUrl}
                  avatarUrl={author.avatarUrl}
                  likes={likes.length}
                  isLikeByYou={true}
                  comments={comments}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </div>
    </Layout>
  );
};

export default MainPage;
