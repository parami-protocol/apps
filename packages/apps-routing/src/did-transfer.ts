// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import DidTransfer from '@polkadot/app-did-transfer';

export default function create (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: DidTransfer,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.did.transfer'
      ]
    },
    icon: 'people-arrows',
    name: 'did-transfer',
    group: 'did',
    text: t('nav.did-transfer', 'Transfer', { ns: 'apps-routing' })
  };
}
