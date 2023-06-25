import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../assets/imgs/footer-bg.jpg";
import { FooterData } from "../config/FooterData";

const Footer = () => {
  const { Main, Resources, Legal, Newsletter } = FooterData;
  return (
    <FooterCon>
      <Wrapper>
        <Section>
          <Title>{Main[0].title}</Title>
          {Main[0].labels.map((l, i) => (
            <Txt key={i}>{l}</Txt>
          ))}
        </Section>
        <Section>
          <Title>{Resources[0].title}</Title>
          {Resources[0].labels.map((l, i) => (
            <FootLink key={i} to="/">
              {l}
            </FootLink>
          ))}
        </Section>
        <Section>
          <Title>{Legal[0].title}</Title>
          {Legal[0].labels.map((l, i) => (
            <FootLink key={i} to="/">
              {l}
            </FootLink>
          ))}
        </Section>
        <Section>
          <Title>{Newsletter[0].title}</Title>
          <Txt>{Newsletter[0].desc}</Txt>
          <Input type="text" placeholder="Enter your email" />
          <Btn>SUBSCRIBE NOW</Btn>
        </Section>
      </Wrapper>
    </FooterCon>
  );
};
const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const FooterCon = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${footerImg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  height: fit-content;
  margin-top: 50px;
  padding: 30px;
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 640px) {
    margin-bottom: 50px;
  }
`;

const Txt = styled.p`
  font-size: 16px;
  color: #abb7c4;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  color: #fff;
  margin-bottom: 10px;
`;
const FootLink = styled(Link)`
  color: #abb7c4;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 48 0px;
  padding: 10px;
  margin-bottom: 20px;
  background: none;
  border: 1px solid #abb7c4;
  @media (max-width: 640px) {
    width: auto;
  }
`;
const Btn = styled.button`
  cursor: pointer;
  color: red;
  background: none;
  border: none;
  font-size: 16px;
  margin-left: 5px;
`;

export default Footer;
