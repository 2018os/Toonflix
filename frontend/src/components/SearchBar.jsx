import { AutoComplete, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// styles
import Icon from 'styles/Icon';
import { Text } from 'styles/Typography';

const StyledInput = styled(Input)`
  border: 1px solid ${props => props.theme.colors.primaryColor};
`;

const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Z]/gi; // for checking space

const SearchBar = ({ placeholder, children }) => {
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
        webtoonData.map(webtoon => (
          !webtoonValues.some(element => element.value === webtoon.title) && webtoonValues.push({
            value: webtoon.title,
            label: <Text size="small" color="gray">{webtoon.title}</Text>
          })
        ));
        themeData.map(theme => (
          !themeValues.some(element => element.value === theme.title) && themeValues.push({
            value: theme.title,
            label: <Text size="small" color="gray">{theme.title}</Text>
          })
        ));
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

  const onSelect = data => { // TODO: Redirect detail page
    console.log('onSelect', data);
  };

  return (
    <AutoComplete
      options={options}
      onSelect={onSelect}
      onSearch={onSearch}
      style={{
        width: '100%',
      }}
      className="searchbar-autocomplete"
    >
      {
        children
        ? children
        : (
          <StyledInput // TODO: Code Splitting
            placeholder={
              placeholder
              ? placeholder
              : "컬렉션 장르, 키워드, 작가 등을 검색해보세요 :)"
            }
            prefix={
              <Icon src="/icon/search.svg" alt="search" size="smaller" />
            }
            className="searchbar-input"
          />
        )
      }
    </AutoComplete>
  );
};

export default SearchBar;