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
    const webtoons = webtoonConnection
      .map((connection: any) => connection.edges)
      .flat();
    const webtoonCards = webtoons.map(({ node }: { node: any }) => (
      <WebtoonCard key={`webtoon-card-${node.id}`} {...node} />
    ));
    webtoonCards.push(<EmptyWebtoonCard key="empty-webtoon-card" />);
    return (
      <CardViewList title="비슷한 작품" type="pagination">
        {webtoonCards}
      </CardViewList>
    );
  }
  return <div>Webtoon Card Loading</div>;
};

export default WebtoonCardViewList;
