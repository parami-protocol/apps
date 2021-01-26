// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Button, Input, TxButton } from '@polkadot/react-components';
import { decodeAddress } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';
import { useApi } from '@polkadot/react-hooks';

interface Props {
  className?: string;
  accountId?: string | null;
}

function Generate ({ className, accountId }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const [address, setAddress] = useState<string | null>(null);
  const [pubkey, setPubkey] = useState<string>('');
  const didType = '4';
  const _onChange = useCallback(
    (address: string): void => {
      const pubkey = u8aToHex(decodeAddress(address))
      setAddress(address)
      setPubkey(pubkey)
    },
    [],
  )
  return (
    <section className={className}>
      <div className='ui--row'>
        <div className='large'>
          <h2>创建DID</h2>
          <Input
            maxLength={150}
            onChange={_onChange}
            label='Your Address'
            placeholder='请输入您的账户地址'
          />
          <Input
            maxLength={150}
            isDisabled={true}
            label='Your Public Key'
            value={pubkey}
            placeholder='您的公钥'
          />
          <Input
            maxLength={50}
            onChange={setPubkey}
            label='DID Type'
            value='应用'
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              isDisabled={!pubkey}
              icon='id-badge'
              label='确认创建'
              params={[pubkey, address, didType, '', null, null]}
              tx={api.tx.did.create}
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(Generate)`
  padding: 50px;
  background: #fff;
  width: 60%;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .ui--row {
    justify-content: center;
    h2 {
      padding-left: 2rem;
    }
    div.large {
      flex: 0 100%;
    }
  }
`);
