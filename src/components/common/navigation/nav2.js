import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Scrollspy from "react-scrollspy"
import Img from "gatsby-image"
import { Menu, X } from "react-feather"

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  Logo,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from "./style"

import styled from "styled-components";

const NAV_ITEMS = [{'item': 'Бренды', 'link': '/brands'}, {'item': 'Подкастеры', 'link': '/podcasters'}];


export default class Nav2 extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }


  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = obj => (
    <Link to={obj['link']} onClick={this.closeMobileMenu}>
      {obj['item']}
    </Link>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
        <ul>
            {NAV_ITEMS.map(obj => (
              <NavItem key={obj['item']}>{this.getNavAnchorLink(obj)}</NavItem>
            ))}
        </ul>
    </NavListWrapper>

  )


  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
              <Link to="/" style={{'text-decoration': 'none'}} onClick={this.closeMobileMenu}>
                <span>
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
                </span>
              </Link>
          </Brand>
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" />
              )}
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}

const ImageWrapper = styled.div`
  display: inline;
  `

const BrandImg = styled(Img)`
  vertical-align: 'middle';
  top: 10px;
`
