import React, { FunctionComponent } from 'react';

import CardViewList from '../shared/CardViewList';
import WebtoonCard, { Props as Webtoon } from '../shared/WebtoonCard';

interface Props {
  webtoonConnection?: any;
}

const WebtoonCardViewList: FunctionComponent<Props> = ({
  webtoonConnection
}) => {
  if (webtoonConnection) {
    const webtoons = webtoonConnection.webtoonsConnection.edges;
    return (
      <CardViewList
        title={webtoonConnection.title}
        description={webtoonConnection.description}
        type="pagination"
      >
        {webtoons.map(({ node }: { node: Webtoon }) => (
          <WebtoonCard key={`webtoon-card-${node.id}`} {...node} />
        ))}
      </CardViewList>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default WebtoonCardViewList;
