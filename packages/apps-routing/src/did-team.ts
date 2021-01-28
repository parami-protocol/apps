// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Team from '@polkadot/app-team';

export default function team (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: Team,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'query.did.metadata',
        'query.did.identity'
      ]
    },
    icon: 'users',
    group: 'did',
    name: 'team',
    text: t('nav.team', 'Team', { ns: 'apps-routing' })
  };
}
