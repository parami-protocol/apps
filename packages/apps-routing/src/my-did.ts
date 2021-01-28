// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import MyDid from '@polkadot/app-my-did';

export default function create (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: MyDid,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'query.did.metadata',
        'query.did.identity'
      ]
    },
    icon: 'id-card',
    name: 'my-did',
    group: 'did',
    text: t('nav.my-did', 'My DID', { ns: 'apps-routing' })
  };
}
