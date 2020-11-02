import React, { FunctionComponent } from 'react';

import CardViewList from '../shared/CardViewList';
import { EmptyWebtoonCard } from '../shared/Empty';
import WebtoonCard from '../shared/WebtoonCard';

// legacy

interface Props {
  webtoonConnection?: any;
}

const WebtoonCardViewList: FunctionComponent<Props> = ({
  webtoonConnection
}) => {
  if (webtoonConnection) {
    const webtoons = webtoonConnection.webtoonsConnection.edges;
    const webtoonCards = webtoons.map(({ node }: { node: any }) => (
      <WebtoonCard key={`webtoon-card-${node.id}`} {...node} />
    ));
    if (webtoonCards.length < 4) {
      webtoonCards.push(<EmptyWebtoonCard key="empty-webtoon-card" />);
    }
    return (
      <CardViewList
        title={webtoonConnection.title}
        subTitle={webtoonConnection.description}
        type="pagination"
      >
        {webtoonCards}
      </CardViewList>
    );
  }
  return <div>Loading</div>;
};

export default WebtoonCardViewList;
