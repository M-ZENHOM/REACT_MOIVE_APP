import React from "react";
import Hero from "../Components/Hero";
import Wrapper from "../Components/Wrapper";
import ResubleSection from "../Components/ResubleSection";
import SEO from "../Components/SEO";

export const Home = () => {
  return (
    <Wrapper>
      <SEO title="React Movies - Home" />
      <Hero />
      <ResubleSection
        fetchQuery="/trending/movie/"
        title="Trending"
        tab={true}
        tabValue="Day"
        tabTwoValue="Week"
      />
      <ResubleSection
        fetchQuery="/discover/"
        title="Popular"
        tab={true}
        tabValue="Movie"
        tabTwoValue="Tv"
      />
      <ResubleSection
        fetchQuery="/movie/upcoming"
        title="Upcoming"
        tab={false}
      />
    </Wrapper>
  );
};
