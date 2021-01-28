// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import CreateDid from '@polkadot/app-create-did';

export default function create (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: CreateDid,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.did.create'
      ]
    },
    group: 'did',
    icon: 'id-badge',
    name: 'create-did',
    text: t('nav.create-did', 'Create DID', { ns: 'apps-routing' })
  };
}
