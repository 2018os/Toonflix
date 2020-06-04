import axios from 'axios';
import { AutoComplete, Button, Input } from 'antd';
import { Margin } from 'styled-components-spacing';
import React, { useState } from 'react';
import styled from 'styled-components';

// styles
import { Text } from '../styles/Typography';

const ButtonWrapper = styled.div`
  text-align: center;
  margin-left: ${props => props.theme.spacing[2]}; // TODO: Make no sense
`;

const StyledButton = styled(Button)`
  width: 236px;
  margin-right: ${props => props.theme.spacing[2]};
  &:last-child: {
    margin-right: 0;
  }
`;

const StyledInput = styled(Input)`
  height: 111px;
  border-radius: 10px;
  ${props => `
  border-color: ${props.theme.colors.primaryColor};
  box-shadow: 0px 0px 0px 3px ${props.theme.colors.primaryColor};
  & > input {
    font-size: ${props.theme.fontSizes.larger};
    color: ${props.theme.colors.primaryColor};
    &::placeholder {
      color: ${props.theme.colors.primaryColor};
    }
  }
  `}
`;

const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Z]/gi; // for checking space

const Menu = () => {
  const [options, setOptions] = useState([]);
  const webtoonValues = [];
  const themeValues = [];

  const onSearch = searchText => {
    if (reg.test(searchText)) {
      const webtoonRequest = axios.get(`http://127.0.0.1:8000/api/webtoons/?search=${searchText}`);
      const themeRequest = axios.get(`http://127.0.0.1:8000/api/themes/?search=${searchText}`);
      axios.all([webtoonRequest, themeRequest])
      .then(axios.spread((...res) => {
        const webtoonData = res[0].data;
        const themeData = res[1].data;
        webtoonData.map(webtoon => {
          !webtoonValues.some(element => element.value === webtoon.title) && webtoonValues.push({
            value: webtoon.title,
            label: <Text size="small" color="gray">{webtoon.title}</Text>
          });
        });
        themeData.map(theme => {
          !themeValues.some(element => element.value === theme.title) && themeValues.push({
            value: theme.title,
            label: <Text size="small" color="gray">{theme.title}</Text>
          });
        });
        setOptions([
          {
            label: <Text>"{searchText}" 이(가) 포함된 작품 검색 결과 {webtoonValues.length}</Text>,
            options: webtoonValues
          },
          {
            label: <Text>"{searchText}" 작품이 포함된 컬렉션 검색 결과 {themeValues.length}</Text>,
            options: themeValues
          },
        ]);
      }))
      .catch((err) => {
        console.log(err);
      })
    } else {
      setOptions([]); // Initialize auto complete
    }
  };

  const onSelect = data => {
    console.log('onSelect', data);
  };

  return (
    <div>
      <Margin bottom={3}>
        <AutoComplete
          options={options}
          style={{
            width: '100%',
          }}
          onSelect={onSelect}
          onSearch={onSearch}
        >
          <StyledInput
            placeholder="컬렉션 장르, 키워드, 작가 등을 검색해보세요 :)"
            prefix={(
              <Margin horizontal={1}>
                <img src="/icon/search.svg" alt="search" width="36" height="36" />
              </Margin>
            )}
            className="searchBar"
          />
        </AutoComplete>
      </Margin>
      <ButtonWrapper>
        <StyledButton type="primary">컬렉션 바로가기</StyledButton>
        <StyledButton type="primary">카테고리 바로가기</StyledButton>
      </ButtonWrapper>
    </div>
  );
};

export default Menu;