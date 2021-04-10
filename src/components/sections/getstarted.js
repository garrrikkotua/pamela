import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const handleBrand = (e) => {
    e.preventDefault();
    window.location.href = '/brands'
};

const handlePodcast = (e) => {
    e.preventDefault();
    window.location.href = '/podcasters'
};



const GetStarted = () => (
    <div>
      <StyledSection id='бренды'>
        <GetStartedContainer>
          <GetStartedTitle>Бренды, давайте знакомиться!</GetStartedTitle>
            <FeatureItem>
                <p style={{'text-align': 'center'}}>Неважно, какой у вас бюджет. Создайте кампанию за минуты, получите отклики,
                    наймите подходящих подкастеров и работайте с ними прямо на платформе.
                    На Ваших условиях.
                </p>
            </FeatureItem>
          <TryItButton onClick={handleBrand}>Поехали!</TryItButton>
        </GetStartedContainer>
      </StyledSection>
      <StyledSection2 id='подкастеры'>
        <GetStartedContainer>
          <GetStartedTitle>Подкастеры, ваш черёд!</GetStartedTitle>
            <FeatureItem>
                <p style={{'text-align': 'center'}}>
                    Получайте деньги за размещение рекламы в подкастах. На Ваших условиях.
                    Просматривайте предложения, питчите себя брендам, устанавливайте цены и сохраняйте свою творческую свободу.
                </p>
            </FeatureItem>
          <TryItButton onClick={handlePodcast} style={{'background-color': "#cca86e"}}>Начинаем!</TryItButton>
        </GetStartedContainer>
      </StyledSection2>
    </div>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const StyledSection2 = styled(Section)`
  background-color: ${props => props.theme.color.background.white};
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: black;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`


const FeatureItem = styled.div`
  max-width: 670px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 0 64px;
  }
`