import { Heading, HeadingCon, ViewMore } from "../Styles/CardStyle";

const HomeHeading = (props) => {
  const ScrollUp = () => {
    window.scroll(0, 0);
  };
  return (
    <HeadingCon>
      <Heading>{props.txt}</Heading>
      <ViewMore onClick={() => ScrollUp()} to={props.where}>
        {props.btn}
      </ViewMore>
    </HeadingCon>
  );
};

export default HomeHeading;
