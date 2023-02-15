import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../assets/imgs/footer-bg.jpg";

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

const Footer = () => {
  return (
    <FooterCon>
      <Section>
        <Title>REACT MOIVE</Title>
        <Txt>Cinemy Movies and Tv Series</Txt>
        <Txt>Nakuru, Kenya</Txt>
        <Txt>call Us: (+254) 78728340</Txt>
      </Section>
      <Section>
        <Title>Resources</Title>
        <FootLink to="/">About CinemyPlex</FootLink>
        <FootLink to="/">Contact Us</FootLink>
        <FootLink to="/">Forums</FootLink>
        <FootLink to="/">Blog</FootLink>
        <FootLink to="/">Help Center</FootLink>
      </Section>
      <Section>
        <Title>Legal</Title>
        <FootLink to="/">Terms of Use</FootLink>
        <FootLink to="/">Privacy Policy</FootLink>
        <FootLink to="/">Security</FootLink>
      </Section>
      <Section>
        <Title>Security</Title>
        <Txt>
          Subscribe to our newsletter system now to get latest news from us
        </Txt>
        <Input type="text" placeholder="Enter your email" />
        <Btn>SUBSCRIBE NOW</Btn>
      </Section>
    </FooterCon>
  );
};

export default Footer;
