import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  gap: 10px;
  width: 300px;
  max-width: 94%;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
  border-radius: 500px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #333;
`;

export const Info = styled.span``;
