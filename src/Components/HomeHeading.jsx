import { Heading, HeadingCon, ViewMore } from "../Styles/CardStyle";

const HomeHeading = (props) => {
  return (
    <HeadingCon>
      <Heading>{props.txt}</Heading>
      <ViewMore to={props.where}>{props.btn}</ViewMore>
    </HeadingCon>
  );
};

export default HomeHeading;
