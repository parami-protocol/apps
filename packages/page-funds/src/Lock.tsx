// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from "bn.js";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, InputBalance, Input, TxButton } from "@polkadot/react-components";
import { useApi } from "@polkadot/react-hooks";

interface Props {
  className?: string;
  accountId?: string | null;
}

function Lock({ className, accountId }: Props): React.ReactElement<Props> {
  const [amount, setAmount] = useState<BN | string | null>("10");
  const [period, setPeriod] = useState<string | null>(null);
  const { api } = useApi();

  return (
    <section className={className}>
      <div className="ui--row">
        <div className="large">
          <h2>抵押</h2>
          <InputBalance label="Amount to Lock" onChange={setAmount} value={amount} placeholder="请输入抵押金额" />
          <Input onChange={setPeriod} label="Period" value={period} placeholder="请输入抵押周期（天数）" />
          <Button.Group>
            <TxButton
              accountId={accountId}
              isDisabled={!amount || !period}
              icon="lock"
              label="确认"
              params={[amount, Number(period) * 3600 * 24 * 1000]}
              tx={api.tx.did.lock}
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(Lock)`
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
