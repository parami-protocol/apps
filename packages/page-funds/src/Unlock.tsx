// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, InputBalance, Input, TxButton } from '@polkadot/react-components';

interface Props {
  className?: string;
  accountId?: string | null;
}

function Unlock ({ className, accountId }: Props): React.ReactElement<Props> {
  const [amount, setAmount] = useState<BN | undefined | null>(new BN(10**15));

  return (
    <section className={className}>
      <div className='ui--row'>
        <div className='large'>
          <h2>赎回</h2>
          <InputBalance
            label='Amount to Unlock'
            onChange={setAmount}
            value={amount}
            placeholder='请输入赎回金额'
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              isDisabled={!amount}
              icon='send'
              label='确认'
              params={[amount]}
              tx='did.unlock'
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(Unlock)`
  background: #fff;
  width: 60%;
  margin: 50px auto;
  border-radius: 15px;
  .ui--row {
    justify-content: center;
    padding: 30px;
    h2 {
      padding-left: 0;
    }
    .eqpzXe {
      padding-left: 0;
      label {
        left: 1.5rem;
      }
    }
    div.large {
      flex: 0 100%;
    }
  }
`);
