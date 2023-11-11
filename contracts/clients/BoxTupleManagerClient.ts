/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createTupleBox(pay,string,string)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "updateTupleField(string,string)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getTupleBoxData()(string,string)": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNTkuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIGNyZWF0ZVR1cGxlQm94KHN0cmluZyxzdHJpbmcscGF5KXZvaWQKYWJpX3JvdXRlX2NyZWF0ZVR1cGxlQm94OgoJYnl0ZSAweCAvLyBwdXNoIGVtcHR5IGJ5dGVzIHRvIGZpbGwgdGhlIHN0YWNrIGZyYW1lIGZvciB0aGlzIHN1YnJvdXRpbmUncyBsb2NhbCB2YXJpYWJsZXMKCgkvLyBjb21wYW55OiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWV4dHJhY3QgMiAwCgoJLy8gbmFtZTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIE1CUlBheW1lbnQ6IHBheQoJdHhuIEdyb3VwSW5kZXgKCWludCAxCgktCglkdXAKCWd0eG5zIFR5cGVFbnVtCglpbnQgcGF5Cgk9PQoJYXNzZXJ0CgoJLy8gZXhlY3V0ZSBjcmVhdGVUdXBsZUJveChzdHJpbmcsc3RyaW5nLHBheSl2b2lkCgljYWxsc3ViIGNyZWF0ZVR1cGxlQm94CglpbnQgMQoJcmV0dXJuCgpjcmVhdGVUdXBsZUJveDoKCXByb3RvIDQgMAoKCS8vIGNvbnRyYWN0cy9ib3hUdXBsZU1hbmFnZXIuYWxnby50czoxMAoJLy8gY29udGFjdDogQ29udGFjdCA9IHsgbmFtZTogbmFtZSwgY29tcGFueTogY29tcGFueSB9CglieXRlIDB4IC8vIGluaXRpYWwgaGVhZAoJYnl0ZSAweCAvLyBpbml0aWFsIHRhaWwKCWJ5dGUgMHgwMDA0IC8vIGluaXRpYWwgaGVhZCBvZmZzZXQKCWZyYW1lX2RpZyAtMiAvLyBuYW1lOiBieXRlcwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNhbGxzdWIgcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQKCWZyYW1lX2RpZyAtMyAvLyBjb21wYW55OiBieXRlcwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNhbGxzdWIgcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQKCXBvcCAvLyBwb3AgaGVhZCBvZmZzZXQKCWNvbmNhdCAvLyBjb25jYXQgaGVhZCBhbmQgdGFpbAoJZnJhbWVfYnVyeSAtNCAvLyBjb250YWN0OiBDb250YWN0CgoJLy8gY29udHJhY3RzL2JveFR1cGxlTWFuYWdlci5hbGdvLnRzOjExCgkvLyB0aGlzLmNvbnRhY3RzKHRoaXMudHhuLnNlbmRlcikudmFsdWUgPSBjb250YWN0Cgl0eG4gU2VuZGVyCglkdXAKCWJveF9kZWwKCXBvcAoJZnJhbWVfZGlnIC00IC8vIGNvbnRhY3Q6IENvbnRhY3QKCWJveF9wdXQKCXJldHN1YgoKLy8gdXBkYXRlVHVwbGVGaWVsZChzdHJpbmcsc3RyaW5nKXZvaWQKYWJpX3JvdXRlX3VwZGF0ZVR1cGxlRmllbGQ6CgkvLyB2YWx1ZTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglleHRyYWN0IDIgMAoKCS8vIGZpZWxkOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWV4dHJhY3QgMiAwCgoJLy8gZXhlY3V0ZSB1cGRhdGVUdXBsZUZpZWxkKHN0cmluZyxzdHJpbmcpdm9pZAoJY2FsbHN1YiB1cGRhdGVUdXBsZUZpZWxkCglpbnQgMQoJcmV0dXJuCgp1cGRhdGVUdXBsZUZpZWxkOgoJcHJvdG8gMiAwCgoJLy8gaWYwX2NvbmRpdGlvbgoJLy8gY29udHJhY3RzL2JveFR1cGxlTWFuYWdlci5hbGdvLnRzOjE1CgkvLyBmaWVsZCA9PT0gJ25hbWUnCglmcmFtZV9kaWcgLTEgLy8gZmllbGQ6IGJ5dGVzCglieXRlIDB4NmU2MTZkNjUgLy8gIm5hbWUiCgk9PQoJYnogaWYwX2Vsc2VpZjFfY29uZGl0aW9uCgoJLy8gaWYwX2NvbnNlcXVlbnQKCS8vIGNvbnRyYWN0cy9ib3hUdXBsZU1hbmFnZXIuYWxnby50czoxNgoJLy8gdGhpcy5jb250YWN0cyh0aGlzLnR4bi5zZW5kZXIpLnZhbHVlLm5hbWUgPSB2YWx1ZQoJdHhuIFNlbmRlcgoJYm94X2dldAoJYXNzZXJ0CglzdG9yZSAwIC8vIGZ1bGwgYXJyYXkKCWludCAwCglkdXAKCXN0b3JlIDQgLy8gZWxlbWVudCBoZWFkIG9mZnNldAoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCWxvYWQgMCAvLyBmdWxsIGFycmF5Cgl1bmNvdmVyIDIKCWV4dHJhY3RfdWludDE2CglkdXAKCXN0b3JlIDEgLy8gZWxlbWVudCBzdGFydAoJZHVwIC8vIGR1cGxpY2F0ZSBzdGFydCBvZiBlbGVtZW50Cglsb2FkIDAgLy8gZnVsbCBhcnJheQoJc3dhcAoJZXh0cmFjdF91aW50MTYgLy8gZ2V0IG51bWJlciBvZiBlbGVtZW50cwoJaW50IDEgLy8gZ2V0IHR5cGUgbGVuZ3RoCgkqIC8vIG11bHRpcGx5IGJ5IHR5cGUgbGVuZ3RoCglpbnQgMgoJKyAvLyBhZGQgdHdvIGZvciBsZW5ndGgKCXN0b3JlIDIgLy8gZWxlbWVudCBsZW5ndGgKCWxvYWQgMCAvLyBmdWxsIGFycmF5CglpbnQgMAoJbG9hZCAxIC8vIGVsZW1lbnQgc3RhcnQKCXN1YnN0cmluZzMKCWZyYW1lX2RpZyAtMiAvLyB2YWx1ZTogYnl0ZXMKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0CglkdXAKCXN0b3JlIDMgLy8gbmV3IGVsZW1lbnQKCWxvYWQgMCAvLyBmdWxsIGFycmF5Cglsb2FkIDEgLy8gZWxlbWVudCBzdGFydAoJbG9hZCAyIC8vIGVsZW1lbnQgbGVuZ3RoCgkrIC8vIGdldCBlbmQgb2YgRWxlbWVudAoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCWxlbgoJc3Vic3RyaW5nMwoJY29uY2F0Cgljb25jYXQKCXN0b3JlIDAgLy8gZnVsbCBhcnJheQoJY2FsbHN1YiBnZXRfbGVuZ3RoX2RpZmZlcmVuY2UKCWxvYWQgNSAvLyBsZW5ndGggZGlmZmVyZW5jZQoJbG9hZCA0IC8vIGVsZW1lbnQgaGVhZCBvZmZzZXQKCWludCAyCgkrIC8vIGhlYWQgb2ZzZXQKCWNhbGxzdWIgdXBkYXRlX2R5bmFtaWNfaGVhZAoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCXR4biBTZW5kZXIKCWR1cAoJYm94X2RlbAoJcG9wCglzd2FwCglib3hfcHV0CgliIGlmMF9lbmQKCmlmMF9lbHNlaWYxX2NvbmRpdGlvbjoKCS8vIGNvbnRyYWN0cy9ib3hUdXBsZU1hbmFnZXIuYWxnby50czoxNwoJLy8gZmllbGQgPT09ICdjb21wYW55JwoJZnJhbWVfZGlnIC0xIC8vIGZpZWxkOiBieXRlcwoJYnl0ZSAweDYzNmY2ZDcwNjE2ZTc5IC8vICJjb21wYW55IgoJPT0KCWJ6IGlmMF9lbHNlCgoJLy8gaWYwX2Vsc2VpZjFfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL2JveFR1cGxlTWFuYWdlci5hbGdvLnRzOjE4CgkvLyB0aGlzLmNvbnRhY3RzKHRoaXMudHhuLnNlbmRlcikudmFsdWUuY29tcGFueSA9IHZhbHVlCgl0eG4gU2VuZGVyCglib3hfZ2V0Cglhc3NlcnQKCXN0b3JlIDAgLy8gZnVsbCBhcnJheQoJaW50IDIKCWR1cAoJc3RvcmUgNCAvLyBlbGVtZW50IGhlYWQgb2Zmc2V0Cglsb2FkIDAgLy8gZnVsbCBhcnJheQoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCXVuY292ZXIgMgoJZXh0cmFjdF91aW50MTYKCWR1cAoJc3RvcmUgMSAvLyBlbGVtZW50IHN0YXJ0CglkdXAgLy8gZHVwbGljYXRlIHN0YXJ0IG9mIGVsZW1lbnQKCWxvYWQgMCAvLyBmdWxsIGFycmF5Cglzd2FwCglleHRyYWN0X3VpbnQxNiAvLyBnZXQgbnVtYmVyIG9mIGVsZW1lbnRzCglpbnQgMSAvLyBnZXQgdHlwZSBsZW5ndGgKCSogLy8gbXVsdGlwbHkgYnkgdHlwZSBsZW5ndGgKCWludCAyCgkrIC8vIGFkZCB0d28gZm9yIGxlbmd0aAoJc3RvcmUgMiAvLyBlbGVtZW50IGxlbmd0aAoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCWludCAwCglsb2FkIDEgLy8gZWxlbWVudCBzdGFydAoJc3Vic3RyaW5nMwoJZnJhbWVfZGlnIC0yIC8vIHZhbHVlOiBieXRlcwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWR1cAoJc3RvcmUgMyAvLyBuZXcgZWxlbWVudAoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCWxvYWQgMSAvLyBlbGVtZW50IHN0YXJ0Cglsb2FkIDIgLy8gZWxlbWVudCBsZW5ndGgKCSsgLy8gZ2V0IGVuZCBvZiBFbGVtZW50Cglsb2FkIDAgLy8gZnVsbCBhcnJheQoJbGVuCglzdWJzdHJpbmczCgljb25jYXQKCWNvbmNhdAoJc3RvcmUgMCAvLyBmdWxsIGFycmF5CgljYWxsc3ViIGdldF9sZW5ndGhfZGlmZmVyZW5jZQoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCXR4biBTZW5kZXIKCWR1cAoJYm94X2RlbAoJcG9wCglzd2FwCglib3hfcHV0CgliIGlmMF9lbmQKCmlmMF9lbHNlOgoJZXJyIC8vICdJbnZhbGlkIGZpZWxkJwoKaWYwX2VuZDoKCXJldHN1YgoKLy8gZ2V0VHVwbGVCb3hEYXRhKCkoc3RyaW5nLHN0cmluZykKYWJpX3JvdXRlX2dldFR1cGxlQm94RGF0YToKCS8vIGV4ZWN1dGUgZ2V0VHVwbGVCb3hEYXRhKCkoc3RyaW5nLHN0cmluZykKCWNhbGxzdWIgZ2V0VHVwbGVCb3hEYXRhCglpbnQgMQoJcmV0dXJuCgpnZXRUdXBsZUJveERhdGE6Cglwcm90byAwIDAKCgkvLyBjb250cmFjdHMvYm94VHVwbGVNYW5hZ2VyLmFsZ28udHM6MjMKCS8vIHJldHVybiB0aGlzLmNvbnRhY3RzKHRoaXMudHhuLnNlbmRlcikudmFsdWU7Cgl0eG4gU2VuZGVyCglib3hfZ2V0Cglhc3NlcnQKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uOgoJaW50IDEKCXJldHVybgoKY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgllcnIKCmNhbGxfTm9PcDoKCW1ldGhvZCAiY3JlYXRlVHVwbGVCb3gocGF5LHN0cmluZyxzdHJpbmcpdm9pZCIKCW1ldGhvZCAidXBkYXRlVHVwbGVGaWVsZChzdHJpbmcsc3RyaW5nKXZvaWQiCgltZXRob2QgImdldFR1cGxlQm94RGF0YSgpKHN0cmluZyxzdHJpbmcpIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2NyZWF0ZVR1cGxlQm94IGFiaV9yb3V0ZV91cGRhdGVUdXBsZUZpZWxkIGFiaV9yb3V0ZV9nZXRUdXBsZUJveERhdGEKCWVycgoKcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQ6Cglwcm90byA0IDMKCWZyYW1lX2RpZyAtNCAvLyB0dXBsZSBoZWFkCglmcmFtZV9kaWcgLTIgLy8gaGVhZCBvZmZzZXQKCWNvbmNhdAoJZnJhbWVfYnVyeSAtNCAvLyB0dXBsZSBoZWFkCglmcmFtZV9kaWcgLTEgLy8gZWxlbWVudAoJZHVwCglsZW4KCWZyYW1lX2RpZyAtMiAvLyBoZWFkIG9mZnNldAoJYnRvaQoJKwoJaXRvYgoJZXh0cmFjdCA2IDIKCWZyYW1lX2J1cnkgLTIgLy8gaGVhZCBvZmZzZXQKCWZyYW1lX2RpZyAtMyAvLyB0dXBsZSB0YWlsCglzd2FwCgljb25jYXQKCWZyYW1lX2J1cnkgLTMgLy8gdHVwbGUgdGFpbAoJZnJhbWVfZGlnIC00IC8vIHR1cGxlIGhlYWQKCWZyYW1lX2RpZyAtMyAvLyB0dXBsZSB0YWlsCglmcmFtZV9kaWcgLTIgLy8gaGVhZCBvZmZzZXQKCXJldHN1YgoKdXBkYXRlX2R5bmFtaWNfaGVhZDoKCXByb3RvIDIgMAoJZnJhbWVfZGlnIC0yIC8vIGxlbmd0aCBkaWZmZXJlbmNlCglsb2FkIDAgLy8gZnVsbCBhcnJheQoJZnJhbWVfZGlnIC0xIC8vIGR5bmFtaWMgYXJyYXkgb2Zmc2V0CglleHRyYWN0X3VpbnQxNiAvLyBleHRyYWN0IGR5bmFtaWMgYXJyYXkgb2Zmc2V0Cglsb2FkIDcgLy8gc3VidHJhY3QgaGVhZCBkaWZmZXJlbmNlCglieiBzdWJ0cmFjdF9oZWFkX2RpZmZlcmVuY2UKCSsgLy8gYWRkIGRpZmZlcmVuY2UgdG8gb2Zmc2V0CgliIGVuZF9jYWxjX25ld19oZWFkCgpzdWJ0cmFjdF9oZWFkX2RpZmZlcmVuY2U6Cglzd2FwCgktIC8vIHN1YnRyYWN0IGRpZmZlcmVuY2UgZnJvbSBvZmZldAoKZW5kX2NhbGNfbmV3X2hlYWQ6CglpdG9iIC8vIGNvbnZlcnQgdG8gYnl0ZXMKCWV4dHJhY3QgNiAyIC8vIGNvbnZlcnQgdG8gdWludDE2Cglsb2FkIDAgLy8gZnVsbCBhcnJheQoJc3dhcAoJZnJhbWVfZGlnIC0xIC8vIG9mZnNldAoJc3dhcAoJcmVwbGFjZTMgLy8gdXBkYXRlIG9mZnNldAoJc3RvcmUgMCAvLyBmdWxsIGFycmF5CglyZXRzdWIKCmdldF9sZW5ndGhfZGlmZmVyZW5jZToKCWxvYWQgMyAvLyBuZXcgZWxlbWVudAoJbGVuIC8vIGxlbmd0aCBvZiBuZXcgZWxlbWVudAoJbG9hZCAyIC8vIGVsZW1lbnQgbGVuZ3RoCgk8Cglibnogc3dhcHBlZF9kaWZmZXJlbmNlCglsb2FkIDMgLy8gbmV3IGVsZW1lbnQKCWxlbiAvLyBsZW5ndGggb2YgbmV3IGVsZW1lbnQKCWxvYWQgMiAvLyBlbGVtZW50IGxlbmd0aAoJaW50IDEKCXN0b3JlIDcgLy8gc3VidHJhY3QgaGVhZCBkaWZmZXJlbmNlCgliIGdldF9kaWZmZXJlbmNlCgpzd2FwcGVkX2RpZmZlcmVuY2U6Cglsb2FkIDIgLy8gZWxlbWVudCBsZW5ndGgKCWxvYWQgMyAvLyBuZXcgZWxlbWVudAoJbGVuIC8vIGxlbmd0aCBvZiBuZXcgZWxlbWVudAoJaW50IDAKCXN0b3JlIDcgLy8gc3VidHJhY3QgaGVhZCBkaWZmZXJlbmNlCgpnZXRfZGlmZmVyZW5jZToKCS0gLy8gZ2V0IGxlbmd0aCBkaWZmZXJlbmNlCglzdG9yZSA1IC8vIGxlbmd0aCBkaWZmZXJlbmNlCglyZXRzdWI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "BoxTupleManager",
    "desc": "",
    "methods": [
      {
        "name": "createTupleBox",
        "args": [
          {
            "name": "MBRPayment",
            "type": "pay",
            "desc": ""
          },
          {
            "name": "name",
            "type": "string",
            "desc": ""
          },
          {
            "name": "company",
            "type": "string",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "updateTupleField",
        "args": [
          {
            "name": "field",
            "type": "string",
            "desc": ""
          },
          {
            "name": "value",
            "type": "string",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "getTupleBoxData",
        "args": [],
        "desc": "",
        "returns": {
          "type": "(string,string)",
          "desc": ""
        }
      },
      {
        "name": "createApplication",
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        },
        "args": []
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the BoxTupleManager smart contract.
 */
export type BoxTupleManager = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createTupleBox(pay,string,string)void' | 'createTupleBox', {
      argsObj: {
        MBRPayment: TransactionToSign | Transaction | Promise<SendTransactionResult>
        name: string
        company: string
      }
      argsTuple: [MBRPayment: TransactionToSign | Transaction | Promise<SendTransactionResult>, name: string, company: string]
      returns: void
    }>
    & Record<'updateTupleField(string,string)void' | 'updateTupleField', {
      argsObj: {
        field: string
        value: string
      }
      argsTuple: [field: string, value: string]
      returns: void
    }>
    & Record<'getTupleBoxData()(string,string)' | 'getTupleBoxData', {
      argsObj: {
      }
      argsTuple: []
      returns: [string, string]
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type BoxTupleManagerSig = keyof BoxTupleManager['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends BoxTupleManagerSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the BoxTupleManager smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends BoxTupleManagerSig> = BoxTupleManager['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the BoxTupleManager smart contract to the method's return type
 */
export type MethodReturn<TSignature extends BoxTupleManagerSig> = BoxTupleManager['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type BoxTupleManagerCreateCalls = (typeof BoxTupleManagerCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type BoxTupleManagerCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type BoxTupleManagerDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: BoxTupleManagerCreateCalls) => BoxTupleManagerCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class BoxTupleManagerCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the BoxTupleManager smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the createTupleBox(pay,string,string)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static createTupleBox(args: MethodArgs<'createTupleBox(pay,string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'createTupleBox(pay,string,string)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.MBRPayment, args.name, args.company],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the updateTupleField(string,string)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static updateTupleField(args: MethodArgs<'updateTupleField(string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'updateTupleField(string,string)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.field, args.value],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getTupleBoxData()(string,string) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getTupleBoxData(args: MethodArgs<'getTupleBoxData()(string,string)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getTupleBoxData()(string,string)' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the BoxTupleManager smart contract
 */
export class BoxTupleManagerClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `BoxTupleManagerClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof BoxTupleManager['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the BoxTupleManager smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: BoxTupleManagerDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(BoxTupleManagerCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the BoxTupleManager smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(BoxTupleManagerCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the BoxTupleManager smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the createTupleBox(pay,string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public createTupleBox(args: MethodArgs<'createTupleBox(pay,string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(BoxTupleManagerCallFactory.createTupleBox(args, params))
  }

  /**
   * Calls the updateTupleField(string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public updateTupleField(args: MethodArgs<'updateTupleField(string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(BoxTupleManagerCallFactory.updateTupleField(args, params))
  }

  /**
   * Calls the getTupleBoxData()(string,string) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getTupleBoxData(args: MethodArgs<'getTupleBoxData()(string,string)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(BoxTupleManagerCallFactory.getTupleBoxData(args, params))
  }

  public compose(): BoxTupleManagerComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      createTupleBox(args: MethodArgs<'createTupleBox(pay,string,string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.createTupleBox(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      updateTupleField(args: MethodArgs<'updateTupleField(string,string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.updateTupleField(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getTupleBoxData(args: MethodArgs<'getTupleBoxData()(string,string)'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getTupleBoxData(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as BoxTupleManagerComposer
  }
}
export type BoxTupleManagerComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the createTupleBox(pay,string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  createTupleBox(args: MethodArgs<'createTupleBox(pay,string,string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): BoxTupleManagerComposer<[...TReturns, MethodReturn<'createTupleBox(pay,string,string)void'>]>

  /**
   * Calls the updateTupleField(string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  updateTupleField(args: MethodArgs<'updateTupleField(string,string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): BoxTupleManagerComposer<[...TReturns, MethodReturn<'updateTupleField(string,string)void'>]>

  /**
   * Calls the getTupleBoxData()(string,string) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getTupleBoxData(args: MethodArgs<'getTupleBoxData()(string,string)'>, params?: AppClientCallCoreParams & CoreAppCallArgs): BoxTupleManagerComposer<[...TReturns, MethodReturn<'getTupleBoxData()(string,string)'>]>

  /**
   * Makes a clear_state call to an existing instance of the BoxTupleManager smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): BoxTupleManagerComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): BoxTupleManagerComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<BoxTupleManagerComposerResults<TReturns>>
}
export type BoxTupleManagerComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}