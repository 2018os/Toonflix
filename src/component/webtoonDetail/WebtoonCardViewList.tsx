import React, { FunctionComponent } from 'react';

import { Props as Webtoon } from '../shared/WebtoonCard';
import CardViewList from '../shared/CardViewList';
import WebtoonCard from '../shared/WebtoonCard';

interface Props {
  webtoonConnection?: any;
}

const WebtoonCardViewList: FunctionComponent<Props> = ({
  webtoonConnection
}) => {
  if (webtoonConnection) {
    const pageInfo = {
      hasNextPage: true,
      hasPreviousPage: false
    };
    // TODO: pageInfo
    const webtoons = webtoonConnection
      .map((connection: any) => connection.edges)
      .flat();
    return (
      <CardViewList title="비슷한 작품" pageInfo={pageInfo}>
        {webtoons.map(({ node }: { node: Webtoon }) => (
          <WebtoonCard key={`webtoon-card-${node.id}`} {...node} />
        ))}
      </CardViewList>
    );
  } else {
    return <div>Webtoon Card Loading</div>;
  }
};

export default WebtoonCardViewList;
