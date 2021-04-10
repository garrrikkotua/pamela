import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import { Container } from "../global"
import {graphql, StaticQuery} from "gatsby";
import Img from "gatsby-image";

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span><strong>Платформа</strong></span>
        <ul>
            <li>
                <AnchorLink href={'#бренды'} style={{'text-decoration': 'none', 'color': 'black'}}>
                    Бренды
                </AnchorLink></li>
            <li>
                <AnchorLink href={'#подкастеры'} style={{'text-decoration': 'none', 'color': 'black'}}>
                    Подкастеры
                </AnchorLink></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span><strong>Контакты</strong></span>
        <ul>
          <li>
                <a href={'mailto:kotuaigor@gmail.com'} style={{'text-decoration': 'none', 'color': 'black'}}>
                    Почта
                </a></li>
            <li>
                <a href={'https://t.me/garrrikkotua'} style={{'text-decoration': 'none', 'color': 'black'}}>
                    Телеграм
                </a>
            </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>Pamela</Logo>
      <StaticQuery
        query={graphql`
              query {
                file(sourceInstanceName: { eq: "product" }, name: { eq: "pomelo_green" }) {
                  childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed_tracedSVG
                    }
                  }
                }
              }
        `}
        render={data => (
            <ImageWrapper>
                <BrandImg fixed={data.file.childImageSharp.fixed} />
            </ImageWrapper>
        )
        }
                />
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.background.light};;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  padding-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  margin-top: 80px;
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer


const ImageWrapper = styled.div`
  display: inline;
  `

const BrandImg = styled(Img)`
  vertical-align: 'middle';
  top: 10px;
`
