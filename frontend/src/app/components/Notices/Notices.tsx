// app/components/Notices.tsx
import styled from "styled-components";

const NoticeContainer = styled.div`
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

// const NoticeHeader = styled.div`
//   font-size: 18px; /* 제목 폰트 크기 */
//   color: #333;
//   font-weight: bold;
//   padding-bottom: 10px;
//   border-bottom: 2px solid #ddd;
//   margin-bottom: 15px;
// `;

const NoticeContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`;

const NoticeLink = styled.a`
  font-size: 14px; /* 링크와 내용 폰트 크기 통일 */
  color: #0073e6;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const NoticeDate = styled.div`
  font-size: 14px; /* 날짜 폰트 크기 통일 */
  color: #999;
`;

export default function Notices() {
  return (
    <NoticeContainer>
      <TitleContainer>
        <TitleText>공지</TitleText>
        {/* <MoreButton onClick={() => handleMoreClick("공지")}>더보기</MoreButton> */}
        <MoreButton>더보기</MoreButton>
      </TitleContainer>
      <NoticeContentWrapper>
        <NoticeLink href="#">시스템 업데이트 예정</NoticeLink>
        <NoticeDate>2024-10-14 15:36:38</NoticeDate>
      </NoticeContentWrapper>
    </NoticeContainer>
  );
}
