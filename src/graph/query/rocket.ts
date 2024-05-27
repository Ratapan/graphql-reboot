import gql from "graphql-tag";

export const getRocket = gql`
  query RocketsQuery {
    rockets {
      active
      boosters
      company
      cost_per_launch
      country
      description
      engines {
        layout
        number
        type
        version
      }
      first_flight
      height {
        meters
      }
      id
      name
      stages
      success_rate_pct
      type
      wikipedia
    }
  }
`;
