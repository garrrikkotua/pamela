import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="продукт">
    <StyledContainer>
      <Subtitle>Продукт</Subtitle>
      <SectionTitle>Рекламные интеграции &mdash; это просто</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Маркетплейс</FeatureTitle>
          <FeatureText>
            <strong>Pamela</strong> объединяет подкасты, агентства и бренды под одной крышей. Делайте правильный выбор быстрее!
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Поиск</FeatureTitle>
          <FeatureText>
            Тематические фильтры помогут быстро найти подкаст, подходящий вашей аудитории.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Форматы</FeatureTitle>
          <FeatureText>
            От органической рекламы до тематических дискуссий <strong>Pamela</strong> специализируется на интеграциях, которые находят отклик у слушателей.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Прозрачность</FeatureTitle>
          <FeatureText>
            Никаких скрытых платежей. <strong>Pamela</strong> устраняет посредника, давая брендам и подкастерам больше ценности, прозрачности, свободы и контроля.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
