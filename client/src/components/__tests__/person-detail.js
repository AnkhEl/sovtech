import React from 'react';
import { render, cleanup } from '../../utils/test-utils';
import PersonDetail from '../person-detail';

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

describe('Module Detail View', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    render(<PersonDetail {...mockPerson} />);
  });
});
