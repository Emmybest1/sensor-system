import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useTitle } from 'hooks';
import { formatDate } from 'utils';
import { useSelector } from 'react-redux';
import { SkeletonUi } from 'components/partials';
import { AdminPanel } from 'components/containers';
import { History } from 'redux/histories/histories';
import { HistoryCard } from './containers/history-card.component';
import { selectHistories, selectHistoriesIsLoading } from 'redux/root.selectors';

type Params = {
  historyId: string;
};
const Histories: React.FC = () => {
  useTitle('Home 🏚');
  const params = useParams<Params>();
  const histories: History[] = useSelector(selectHistories);
  const isLoadingHistories: boolean = useSelector(selectHistoriesIsLoading);

  const HistoriesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    & > * {
      width: 31%;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }
  `;

  const HistoryWrapper = styled.div`
    background-color: #2f3136;
    border-radius: 10px;
    font-size: 0.8rem;
    padding: 10px;
    max-width: 300px;

    & > li {
      padding: 5px;
    }
  `;

  // Because this is not a production app, we will just use augmented pattern to render both histories and single history
  // Nota bena: this pattern should be avoided in production to avoid performance issues, rather create a separate component file for this
  if (params?.historyId && histories.length) {
    return (
      <AdminPanel title="Histories" isLoading={isLoadingHistories}>
        <HistoryWrapper>
          {histories
            .filter(({ id }) => id === params?.historyId)
            .map(({ id, date, sensor1, sensor2, sensor3, sensor4 }) => (
              <ul key={id}>
                <li>
                  <strong>Sensor date:</strong> &nbsp;{formatDate(date)}
                </li>
                <li>
                  <strong>Sensor 1:</strong> &nbsp;{sensor1}
                </li>
                <li>
                  <strong>Sensor 2:</strong> &nbsp;{sensor2}
                </li>
                <li>
                  <strong>Sensor 3:</strong> &nbsp;{sensor3}
                </li>
                <li>
                  <strong>Sensor 4:</strong> &nbsp;{sensor4}
                </li>
              </ul>
            ))}
        </HistoryWrapper>
      </AdminPanel>
    );
  }

  return (
    <AdminPanel title="Histories" isLoading={isLoadingHistories}>
      {isLoadingHistories ? (
        <>
          {[...new Array(5)].map((v, i) => (
            <SkeletonUi shape="radiusHorizone" width="100%" height="5px" key={`${v}${i}skui`.trim()} />
          ))}
        </>
      ) : null}
      {histories.length ? (
        <HistoriesWrapper>
          {histories.map((history) => (
            <HistoryCard {...history} key={history.id} />
          ))}
        </HistoriesWrapper>
      ) : (
        <>{!isLoadingHistories ? <p>No Histories available</p> : null}</>
      )}
    </AdminPanel>
  );
};

export default Histories;
