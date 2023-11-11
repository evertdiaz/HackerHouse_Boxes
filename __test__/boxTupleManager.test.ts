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
    company = 'Algorand';
    await appClient.appClient.fundAppAccount(algokit.microAlgos(123_700));

    await appClient.createTupleBox({ name, company }, { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] });
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
    const newCompany = 'Algorand Foundation';
    const costPerByte = 400;
    const mbrDiff = (newCompany.length - company.length) * costPerByte;
    await appClient.appClient.fundAppAccount(algokit.microAlgos(mbrDiff));

    await appClient.updateTupleField(
      { field, value: newCompany },
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
    const dataFromMethod = await appClient.getTupleBoxData(
      {},
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
    expect(dataFromMethod.return?.valueOf()).toEqual([name, newCompany]);
  });
});
