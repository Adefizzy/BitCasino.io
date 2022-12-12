import { gql } from "@apollo/client";

export const GET_COIN_PRICES = gql`
  query price($coinCode: String!) {
    markets(
      filter: { baseSymbol: { _eq: $coinCode }, quoteSymbol: { _eq: "EUR" } }
    ) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
