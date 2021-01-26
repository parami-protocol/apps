// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// only here, needs to be available for the rest of the codebase
/* eslint-disable react/jsx-max-props-per-line */

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import store from 'store';
import { useApi, useCall } from '@polkadot/react-hooks';
import { Balance } from '@polkadot/react-query';
import { MyDid, MetadataRecord } from './types';
import { hexToDid } from './util';

interface Props {
  className?: string;
  accountId: string;
}

function UserCard ({ className, accountId }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const [did, setDid] = useState<string>('');
  const result = useCall<MyDid>(api.query.did.identity, [accountId]);
  const [metadata, setMetadata] =  useState<MetadataRecord | null>(null);

  useEffect(
    (): void => {
      if (result && result.unwrapOr([])[0]) {
        const didHash = result.unwrapOr([])[0];
        api.query.did.metadata<MetadataRecord>(didHash).then(data => {
          const metadata = data.toHuman();
          const did = hexToDid(metadata['did']);
          setDid(did);
          store.set('did', did);
          setMetadata(metadata);
          store.set('userDocs', metadata);
        })
      } else {
        store.set('did', '');
        setDid('')
        setMetadata(null);
        store.set('userDocs', null);
      }
    },
    [result]
  );
  
  return (
    <div className={className}>
      <h3>我的DID</h3>
      { did ? did : (<div>
        您还没有DID，<NavLink
            data-for={`nav-${name}`}
            to='/create-did'
          >
            点击创建
          </NavLink>
      </div>) }
      <h3>我的资产</h3>
      <Balance params={accountId} />
      <h3>我的抵押</h3>
      {metadata?.locked_records ? metadata.locked_records.locked_funds : '0.000 PRM'}
    </div>
  );
}

export default React.memo(styled(UserCard)`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`);
