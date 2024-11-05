// app/components/Guidelines.tsx
import styled from "styled-components";

const GuidelineContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
`;

const TitleText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const GuidelineBox = styled.div`
  border-radius: 8px;
  padding: 15px;
  padding: 6px 0;
`;

const GuidelineItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuidelineName = styled.div`
  font-size: 14px;
  color: #333;
  flex-basis: 30%; /* 이름이 차지하는 공간 고정 */
`;

const GuidelineLink = styled.a`
  font-size: 14px;
  color: #0073e6;
  text-decoration: none;
  flex-basis: 40%; /* 링크가 차지하는 공간 고정 */
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const GuidelineDate = styled.div`
  font-size: 14px;
  color: #999;
  flex-basis: 30%; /* 날짜가 차지하는 공간 고정 */
  text-align: right;
`;

export default function Guidelines() {
  const guidelines = [
    { name: "CRFs", link: "#", date: "2024-03-20 12:56:32" },
    { name: "IRB 서류", link: "#", date: "2024-03-22 14:12:45" },
  ];

  return (
    <GuidelineContainer>
      <TitleContainer>
        <TitleText>가이드라인</TitleText>
        <MoreButton>더보기</MoreButton>
      </TitleContainer>

      {guidelines.map((guideline, index) => (
        <GuidelineBox key={index}>
          <GuidelineItemWrapper>
            <GuidelineName>{guideline.name}</GuidelineName>
            <GuidelineLink href={guideline.link}>관련 링크</GuidelineLink>
            <GuidelineDate>{guideline.date}</GuidelineDate>
          </GuidelineItemWrapper>
        </GuidelineBox>
      ))}
    </GuidelineContainer>
  );
}
