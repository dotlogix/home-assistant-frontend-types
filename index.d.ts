export type { Constructor, HomeAssistant } from './frontend/types';
export type { Condition } from './frontend/panels/lovelace/common/validate-condition';

export type * from "./frontend/data/lovelace_custom_cards";

export type * from "./frontend/panels/lovelace/types";
export type * from "./frontend/panels/lovelace/cards/types";
export type * from "./frontend/panels/lovelace/card-features/types";
export type * from "./frontend/panels/lovelace/elements/types";
export type * from "./frontend/panels/lovelace/badges/types";

export type * from "./frontend/data/lovelace/config/action";
export type * from "./frontend/data/lovelace/config/badge";
export type * from "./frontend/data/lovelace/config/card";
export type * from "./frontend/data/lovelace/config/section";
export type * from "./frontend/data/lovelace/config/strategy";
export type * from "./frontend/data/lovelace/config/view";
export type * from "./frontend/data/lovelace/config/types";

import type { CustomCardsWindow } from './frontend/data/lovelace_custom_cards';
export type CustomCardHelpers = typeof import('./frontend/panels/lovelace/custom-card-helpers')

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}
