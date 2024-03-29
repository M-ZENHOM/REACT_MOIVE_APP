import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Wrapper from "../Components/Wrapper";
import Details from "../Components/Movie/Details";
import Casts from "../Components/Movie/Casts";
import Similar from "../Components/Movie/Similar";
import Recommendations from "../Components/Movie/Recommendations";
import SEO from "../Components/SEO";
import Videos from "../Components/Movie/Videos";

export const Moive = () => {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(
    `/${mediaType}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  const { data: credits, isLoading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  const { data: videos, isLoading: videosLoading } = useFetch(
    `/${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  return (
    <div
      className="hero w-full min-h-[100vh] place-items-start "
      style={{
        backgroundImage: `${`url(${process.env.REACT_APP_BG_IMG}${data?.backdrop_path})`}`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SEO title="React Movies - Details" />
      <div className="hero-overlay bg-base-300 bg-opacity-80" />
      <Wrapper>
        <Details data={data} isLoading={isLoading} credits={credits} />
        <Casts credits={credits} creditsLoading={creditsLoading} />
        <Videos videos={videos} isLoading={videosLoading} />
        <Similar id={id} mediaType={mediaType} />
        <Recommendations id={id} mediaType={mediaType} />
      </Wrapper>
    </div>
  );
};
