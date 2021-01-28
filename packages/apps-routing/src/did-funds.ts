// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Funds from '@polkadot/app-funds';

export default function funds (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: Funds,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.did.lock',
        'tx.did.unlock'
      ]
    },
    icon: 'donate',
    group: 'did',
    name: 'funds',
    text: t('nav.funds', 'Funds Lock & Unlock', { ns: 'apps-routing' })
  };
}
