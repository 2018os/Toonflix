import React from 'react';
import styled from 'styled-components';

import { Title, Text } from '../../styles/Typography';

import { useMeForProfileQuery } from '../../generated/graphql';

import { ImgSizes, Colors, spacing, FontSizes } from '../../util/theme';

const ProfileWrapper = styled.div`
  text-align: center;
`;

const ProfileImg = styled.div`
  width: ${ImgSizes.DEFAULT};
  height: ${ImgSizes.DEFAULT};
  background-color: ${Colors.WHITE};
  margin: ${spacing[6]} auto ${spacing[5]} auto;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const NickName = styled.div`
  width: 320px;
  padding: ${spacing[2]} 0;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${Colors.WHITE};
  margin: ${spacing[3]} auto;
`;

const StatusBoxWrapper = styled.div`
  display: flex;
`;

const StatusBox = styled.div`
  position: relative;
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
  background-color: ${Colors.WHITE};
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-right: ${spacing[2]};
  &:last-child {
    margin-right: 0;
  }
`;

const Status = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  :: after {
    content: '개';
  }
`;

const ProfileContainer = () => {
  const { data } = useMeForProfileQuery();
  return (
    <ProfileWrapper>
      <Title>내 프로필</Title>
      <ProfileImg />
      <Text>LV.{data?.me.level}</Text>
      <NickName>{data?.me.name}</NickName>
      <StatusBoxWrapper>
        <StatusBox>
          내가 작성한 댓글
          <Status>
            <Text size={FontSizes.LARGEST}>
              {data?.me.status.commentsCount}
            </Text>
          </Status>
        </StatusBox>
        <StatusBox>
          내가 만든 컬렉션
          <Status>
            <Text size={FontSizes.LARGEST}>
              {data?.me.status.collectionsCount}
            </Text>
          </Status>
        </StatusBox>
        <StatusBox>
          내가 좋아요 누른 컬렉션
          <Status>
            <Text size={FontSizes.LARGEST}>
              {data?.me.status.likedCollectionsCount}
            </Text>
          </Status>
        </StatusBox>
      </StatusBoxWrapper>
    </ProfileWrapper>
  );
};

export default ProfileContainer;
