import React from 'react';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import PersonCard from '../person-card';

const mockPerson = {
  person: {
    name: "Luke Skywalker",
    birth_year: "19BBY",
    height: "172",
    mass: "77",
    gender: "male",
    world: {
      name: "Tatooine",
      climate: "arid",
      population: "200000",
      diameter: "10465"
    }
  },
};

describe('Person Card', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders person Card', async () => {
    const mocks = [];
    const { getByText } = await renderApollo(
      <PersonCard track={mockTrackCardData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/swapi-api/i));
  });
});
