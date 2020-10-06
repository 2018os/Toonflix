import React, { FunctionComponent } from 'react';

import { Props as Webtoon } from '../shared/WebtoonCard';
import CardViewList from '../shared/CardViewList';
import { EmptyWebtoonCard } from '../shared/Empty';
import WebtoonCard from '../shared/WebtoonCard';

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
    const webtoonCards = webtoons.map(({ node }: { node: Webtoon }) => (
      <WebtoonCard key={`webtoon-card-${node.id}`} {...node} />
    ));
    webtoonCards.push(<EmptyWebtoonCard />);
    return (
      <CardViewList title="비슷한 작품" type="pagination">
        {webtoonCards}
      </CardViewList>
    );
  } else {
    return <div>Webtoon Card Loading</div>;
  }
};

export default WebtoonCardViewList;
