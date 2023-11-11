import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { BoxTupleManagerClient } from '../contracts/clients/BoxTupleManagerClient';

const fixture = algorandFixture();

let appClient: BoxTupleManagerClient;
let algod: algosdk.Algodv2;
let testAccount: algosdk.Account;
let name: string;
let company: string;
describe('Boxmanager', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    testAccount = fixture.context.testAccount;
    algod = fixture.context.algod;

    appClient = new BoxTupleManagerClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod
    );

    await appClient.create.createApplication({});
  });

  test('createTupleBox', async () => {
    name = 'Evert';
    company = 'HackerHouse';
    await appClient.appClient.fundAppAccount(algokit.microAlgos(100_000));

    const { appAddress } = await appClient.appClient.getAppReference();

    const MBRPayment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: testAccount.addr,
      to: appAddress,
      amount: 24_900,
      suggestedParams: await algokit.getTransactionParams(undefined, algod),
    });
    await appClient.createTupleBox(
      { MBRPayment, name, company },
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
  });
  test('getTupleBoxData', async () => {
    const dataFromMethod = await appClient.getTupleBoxData(
      {},
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
    expect(dataFromMethod.return?.valueOf()).toEqual([name, company]);
  });
  test('updateTupleField', async () => {
    const field = 'company';
    company = 'Algorand Foundation';
    await appClient.appClient.fundAppAccount(algokit.microAlgos(3_200));

    await appClient.updateTupleField(
      { field, value: company },
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
    const dataFromMethod = await appClient.getTupleBoxData(
      {},
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
    expect(dataFromMethod.return?.valueOf()).toEqual([name, company]);
  });
});
