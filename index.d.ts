export { HomeAssistant } from './frontend/src/types';

export { Condition } from './frontend/src/panels/lovelace/common/validate-condition';
export { Constructor,  } from './frontend/src/types';

export * from "./frontend/src/panels/lovelace/types";
export * from "./frontend/src/data/lovelace/config/card";
export * from "./frontend/src/data/lovelace_custom_cards";

import { CustomCardsWindow } from './frontend/src/data/lovelace_custom_cards';
export type CustomCardHelpers = typeof import('./frontend/src/panels/lovelace/custom-card-helpers')

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}
