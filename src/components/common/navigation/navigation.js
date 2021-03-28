import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { graphql, StaticQuery, Link } from "gatsby"
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
  ActionsContainer,
} from "./style"

import styled from "styled-components";

const NAV_ITEMS = ["Продукт", "Бренды", "Подкастеры"]


export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

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

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )


  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                <span>
                <Logo>Pamela</Logo>
                <StaticQuery
                        query={graphql`
                              query {
                                file(sourceInstanceName: { eq: "product" }, name: { eq: "pomelo_green" }) {
                                  childImageSharp {
                                    fixed(width: 40, height: 40) {
                                      ...GatsbyImageSharpFixed
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
              </AnchorLink>
            </Scrollspy>
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
          <ActionsContainer>
            <button>Join list</button>
          </ActionsContainer>
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
