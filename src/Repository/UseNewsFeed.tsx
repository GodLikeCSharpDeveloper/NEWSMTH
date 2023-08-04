import '../css/NewsFeed.css'
import React, { useState, useEffect, useRef } from 'react';
import data from '../Resources/Data.json'
interface Posts {
  nickname: string;
  date_posted: string;
  category: string;
  title: string;
  likes_count: number;
  comments_count: number;
}
export const UseNewsFeed = () => {
  const allPosts = data
  const [posts, setPosts] = useState(allPosts.posts.slice(0, 8));
  const loadingRef = useRef(null);
  const loadMorePosts = () => {
    const nextChunk = allPosts.posts.slice(posts.length, posts.length + 10); // Load 10 more posts
    setPosts((prevPosts:Posts[]) => [...prevPosts, ...nextChunk]);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && posts.length < allPosts.posts.length) {
          loadMorePosts();
        }
      },
      { threshold: 1 }
    );
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [posts, allPosts.posts.length]);
  return (
    { posts, loadingRef }
  )
}
