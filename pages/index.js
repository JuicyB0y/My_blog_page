import Head from 'next/head';
import Image from 'next/image';
import { Section, SocialNetworks, Cover, BuyMeCoffee, Title, PostGrid, Post, Button } from '../components';

import { loadPosts } from './api/posts';
import React, { useState } from 'react';
// const inter = Inter({ subsets: ['latin'] });

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`);
      const res = await data.json();

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...res.posts]);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>
      <Section>
        <Cover title="Ivan <br /> Bevza" /> <SocialNetworks /> <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Posts</Title>
        <PostGrid>
          {posts.map((item) => (
            <Post key={item.slug.current} {...item} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button getMorePosts={getMorePosts} loading={loading}>
              Load more
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

// getServerSideProps - это функция в next.js которая передаст результат из return в пропсы
export const getServerSideProps = async () => {
  // сколько элементов к нам вернется ( 4)
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};

async function loadData(start, end) {}
